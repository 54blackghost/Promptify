from openai import OpenAI
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from dotenv import load_dotenv
from promptify_app.models import Chat, ChatMessage



# Create your views here.
client = OpenAI()
load_dotenv()



def createChatTitle(user_message):
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "assistant", "content": " Give a short, description title for this conversation in 3 words or less."},
                {"role": "user", "content": user_message}
            ],
            
        )
        title = response.choices[0].message.content.strip()
    except Exception:
        title = user_message[:50]  # Fallback to the first 50 characters of the user message if an error occurs
    return title



@api_view(['POST'])
def prompt_gpt(request):
    chat_id = request.data.get('chat_id')
    content = request.data.get('content')

    # Here you would typically call your GPT model with the content and chat_id
    if not chat_id:
        return Response({"error": "Chat ID was not provided."}, status=400)


    if not content:
        return Response({"error": "There was no prompt passed."}, status=400)

    chat, created = Chat.objects.get_or_create(id=chat_id)
    chat.title = createChatTitle(content)
    chat.save()

    ChatMessage.objects.create(role='user', chat=chat, content=content)

    chat_messages = chat.messages.order_by('created_at')[:10] 

    openai_messages = [
        {"role": message.role, "content": message.content} for message in chat_messages
    ]

    if not any(message['role'] == 'assistant' for message in openai_messages):
        assistant_message = {"role": "assistant", "content": "You are a helpful assistant."}
        openai_messages.insert(0, assistant_message)

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=openai_messages
        )
        openai_reply = response.choices[0].message.content
    except Exception as e:
        return Response({"error": f"An error from Openai {str(e)}"}, status=500)

    ChatMessage.objects.create(role='assistant', content=openai_reply, chat=chat)
    return Response({"reply": openai_reply, "chat_id": chat.id}, status=status.HTTP_201_CREATED)