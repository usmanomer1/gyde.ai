"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

const routes = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Activities",
      href: "/activities",
    },
    {
      name: "Colleges",
      href: "/colleges",
    },
    {
      name: "Essays",
      href: "/essays",
    },
    {
      name: "Planner",
      href: "/planner",
    },
  ]

export function NavBar({ className, ...props }) {
    
    const pathname = usePathname()
    
    return (

    <header className="flex items-center justify-between p-4 bg-card shadow-md">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <LogInIcon className="h-8 w-8" />
            <span className="text-2xl font-bold text-card-foreground">gyde.ai</span>
          </div>
          <div className="relative">
          <div className={cn("flex items-center", className)} {...props}>
            {routes.map((route, index) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "flex items-center rounded-full px-4 text-lg transition-colors hover:text-primary font-medium",
                  pathname?.startsWith(route.href) ||
                    (index === 0 && pathname === "/")
                    ? "bg-muted font-medium text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.name}
              </Link>
            ))}
          </div>
      </div>

        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="rounded-full text-card-foreground">
            <BellIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="rounded-full text-card-foreground">
            <UserIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      
    )
  }

  function LogInIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" x2="3" y1="12" y2="12" />
      </svg>)
    );
  }

  function BellIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>)
    );
  }

  function UserIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>)
    );
  }
  
  
  