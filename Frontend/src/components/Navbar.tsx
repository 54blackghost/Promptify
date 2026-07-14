import { useEffect, useState } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

 




 export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark";
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark)
    }, []);

    const toggleTheme = () => {
       const isDark = !darkMode;
       setDarkMode(isDark);
       document.documentElement.classList.toggle("dark", isDark);
       localStorage.setItem("theme", isDark ? "dark" : " light");
    };

    const user = {
        name : 'ulrichleblack',
        image: 'http://i.pravatar.cc/',
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur
        supports-[backdrop-filters]">
            <div className="flex items0center justify-between px-4 py-3 md:px-6">
                {/*left: sidebar + Brand*/}
                <div className="flex items-center gap4">
                    <SidebarTrigger/>
                    <span className="text-xl font-bold tracking-light">
                        <span className="text-primary">Prompt</span>ify
                    </span>
                </div>

                {/*Right: controls */}
                <div className="flex items-center gap-4">
                    {/*Theme Toggle */}
                    <Button
                    variant='ghost'
                    size='icon'
                    onClick={toggleTheme}
                    className='hover:bg-muted transition'
                    >
                     { darkMode ? (
                        <Sun className="h-5 w-5" />
                     ): (
                        <Moon className="h-5 w-5"/>
                     )}
                    </Button>

                    {/* Auth Control */}
                    <div className="hidden sm:flex items-center gap-2">
                        <Button variant='outline' size='sm' className='hover:shaow-sm'>
                            Sign In
                        </Button>
                        <Button  size='sm' className='hover:shaow-sm'>
                            Sign Out
                        </Button>
                    </div>

                    {/* Avatar */}
                    <Avatar className='h-8 w-8 ring-1 ring-muted-foreground/10 hover:ring-2 transition'>
                        <AvatarImage src={user.image} alt={user.name}/>
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
 }