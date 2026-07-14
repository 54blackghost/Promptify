
import { Bot, Calendar, Home, Inbox, MessageSquare, MessageSquarePlus, Search, Settings, Zap } from "lucide-react";
import { 
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, 
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "./ui/sidebar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";


const mainNav = [
    {title: 'Home', url: '#', icon:Home},
    {title: 'Inbox', url: '#', icon:Inbox},
    {title: 'Calendar', url: '#', icon:Calendar},
    {title: 'Search', url: '#', icon:Search},
    {title: 'Settings', url: '#', icon:Settings},
]

const recentChats = [
    {title:'Fix CI/CD deploy error',url: '#', icon: MessageSquare },
    {title:'Postgress vs SQLite',url: '#', icon: MessageSquare },
]

const yesterdayChats = [
    {title: 'Image resize in Django', url:'#', icon: MessageSquare}
]


const last7DayChats = [
    {title:'Build todo app', url:'#', icon:MessageSquare},
    {title:'Navbar with CSS Module', url:'#', icon:MessageSquare},
]

export function AppSidebar(){
    return(
        <Sidebar className="bg-background text-foreground border-r">
            <SidebarContent className="flex flex-col justify-between h-full">
                <div>
                        {/*Main Nav*/}
                    <SidebarGroup className="mb-6"/>
                        <SidebarGroupLabel className="text-xs text-mutes=foregrounde uppercase px-4 pt-4 pb-2">
                            Main Menu
                            <Badge variant='secondary' className="ml-2 text-[10px] px-1.5 py-0.5">
                                Pro
                            </Badge>
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {mainNav.map((item)=>(
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link
                                            to={item.url}
                                            className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition">
                                                <item.icon className="w-5 h-5 text-muted-foreground"/>
                                                <span className="text-sm font-medium">{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    <SidebarGroup/>


                    <div className="px-4 pt-4">
                        <Button
                        variant='secondary'
                        className='w-full justify-start gap-2'
                        > 
                            <MessageSquarePlus className="w-4 h-4"/>
                            New Chat
                            </Button> 
                    </div>

                    {/* Recent Chats */}
                    <SidebarGroup className="mb-6">
                        <SidebarGroupLabel className="text-xs text-mutes=foregrounde uppercase px-4 pt-4 pb-2">
                            Recent Chats
                        </SidebarGroupLabel>     
                    </SidebarGroup>
                    <SidebarGroupContent>
                       <SidebarMenu>
                                {recentChats.map((chat)=>(
                                    <SidebarMenuItem key={chat.title}>
                                        <SidebarMenuButton asChild>
                                            <Link
                                            to={chat.url}
                                            className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition">
                                                <chat.icon className="w-5 h-5 text-muted-foreground"/>
                                                <span className="text-sm font-medium">{chat.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu> 
                    </SidebarGroupContent>

                    {/* Yesterday Chats */}
                    <SidebarGroup className="mb-6">
                        <SidebarGroupLabel className="text-xs text-mutes=foregrounde uppercase px-4 pt-4 pb-2">
                            Yesterday
                        </SidebarGroupLabel>     
                    </SidebarGroup>
                    <SidebarGroupContent>
                       <SidebarMenu>
                                {yesterdayChats.map((chat)=>(
                                    <SidebarMenuItem key={chat.title}>
                                        <SidebarMenuButton asChild>
                                            <Link
                                            to={chat.url}
                                            className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition">
                                                <chat.icon className="w-5 h-5 text-muted-foreground"/>
                                                <span className="text-sm font-medium">{chat.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu> 
                    </SidebarGroupContent>

                    {/* last 7 days  Chats */}
                    <SidebarGroup className="mb-6">
                        <SidebarGroupLabel className="text-xs text-mutes=foregrounde uppercase px-4 pt-4 pb-2">
                            Last 7 Days
                        </SidebarGroupLabel>     
                    </SidebarGroup>
                    <SidebarGroupContent>
                       <SidebarMenu>
                                {last7DayChats.map((chat)=>(
                                    <SidebarMenuItem key={chat.title}>
                                        <SidebarMenuButton asChild>
                                            <Link
                                            to={chat.url}
                                            className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition">
                                                <chat.icon className="w-5 h-5 text-muted-foreground"/>
                                                <span className="text-sm font-medium">{chat.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu> 
                    </SidebarGroupContent>



                    {/* Explore Chat GPT */}
                    <SidebarGroup className="mb-6">
                       <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link
                                    to='#'
                                    className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition"
                                    >
                                        <Bot className="w-5 h-5 text-muted-foreground"/>
                                        <span className="text-sm font-semibold">Explore GPTs</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>    
                    </SidebarGroup>
                    
                </div>

                {/* Update CTA */}
                <div className="p-4 border-t">
                    <Link
                    to='#'
                    className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90
                    transition">
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <Zap className="w-4 h-4" />
                            Update to Pro
                        </span>
                    <Badge variant='secondary' className="text-[10px] px-1.5 py-0.5">
                        New
                    </Badge>
                    </Link>
                </div>
            </SidebarContent>
            <SidebarFooter/>
        </Sidebar>
    )
}





 