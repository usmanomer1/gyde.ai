"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
    )
  }