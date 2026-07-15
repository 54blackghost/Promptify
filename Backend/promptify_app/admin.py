from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Chat, ChatMessage

# Register your models here.
@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser  
    list_display = ('username', 'email')

@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    model = Chat
    list_display = ('id','title','created_at')

@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    model = ChatMessage
    list_display = ('id','role', 'content', 'created_at')