"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import Link from "next/link"

export const NavbarRoutes = () => {
    const pathname = usePathname()

    const isTeacherPage = pathname?.startsWith('/teacher');
    const isPlayerPage = pathname?.includes('/chapter');
    return (
        <div className=" flex items-center gap-x-2 ml-auto">
            <div className="">
                {
                isTeacherPage || isPlayerPage ? (
                    <Link href='/'>
                    <Button className="h-10" size='sm' variant="ghost">
                        <LogOut className=" h-4 w-4 mr-2" />
                        Exit
                    </Button>
                    </Link>
                )
                    : (
                        <Link href='/teacher/courses'>
                            <Button size='sm' variant="ghost" className=" h-10">
                                Teacher Mode
                            </Button>
                        </Link>
                    )}
            </div>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}