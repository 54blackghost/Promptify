import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Textarea } from "../components/ui/textarea";
import { SendHorizontalIcon } from "lucide-react";




export default function Home() {
        const location = useLocation();
        const navigate = useNavigate()

        const  [ chatSessionId, setChatSessionId]= useState<null | string>(null)
        const {chatId } = useParams()
    
    const [messages, setMessages] = useState([
        {role: 'assistant', content:"Welcome! I'm here to assist you"}
    ]);

    const [input, setInput] = useState("");

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    },[messages]);

    const handleSend = () => {
        if(!input.trim()) return;

        if(location.pathname=="/" || location.pathname == "/chats/new"){
            navigate("/chats/chat_id")
        }

        const newMessage = { role: 'user', content: input};
        const dummyReply = {
            role: 'assistant',
            content: 'This is a dummy response. Replace this with actual API logic',
        };
        setMessages((prev) => 
        [...prev, newMessage, dummyReply].filter(
          (p) => p.content != "Welcome1 I'm here to assist you."  
        ));

        //setMessages((prev) => [...prev, newMessage, dummyReplay])
        setInput("");
    };

    return(
        <div className="flex flex-1">
            <div className="flex flex-col flex-1 bg-background text-foreground">
                {/* mEssages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    { messages.map((msg, idx) =>
                       msg.role === 'user ' ? (
                        <div
                        key={idx} 
                        className="w-full mx-auto p-4 rounded-xl bg-primary text-primary-foreground self-end">
                            {msg.content}
                        </div>
                       ) : (
                        <div 
                        key={idx}
                        className="prose dar:prose-invert max-w-none bg-muted text-foreground p-4 rounded-lg shadow mb">
                            <ReactMarkdow
                            components={{
                                code({ inline, className, children }) {
                                    const match = /language-{\w+}/.exec(className || '');
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                        style={vs2015}
                                        language={match[1]}
                                        PreTag='div'
                                        className='rounded-md'
                                        >
                                            {string(children).replace(/\n$/, "")}
                                        </SyntaxHighlighter>
                                    ) : (
                                       <code className="bg-muted rounded px-1 py-0.5 text-sm">
                                            {children}
                                       </code> 
                                    );
                                },
                            }}
                            >
                                {msg.content}
                            </ReactMarkdow>
                        </div>
                       )
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="border-t p-4 sticky bottom-0 z-50 bg-background text-foreground">
                    <div className="max-w-2xl mx-auto flex items-center gap-4">
                        <Textarea
                        placeholder="Send a message..."
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        onKeyDown={(e)=>{
                            if (e.key === "Enter" && !e.shiftKey){
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        className="flex-1 resize-none min-h-[80px] max-h-[200px] rounded-md border border-input bg-muted/30" 
                        >
                        <button
                        onClick={handleSend}
                        className="p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition"
                        >
                            <SendHorizontalIcon size={28} className="cursor-pointer"/>
                        </button>
                        </Textarea>
                    </div>
                </div>
            </div>
        </div>
    )




}