"use client"

import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

function Header() {
  return (
    <header className="flex justify-between items-center w-full px-4 py-3 ">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-primary">
        Biniyam
      </Link>

    

      {/* Mobile Menu (Sheet) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon" aria-label="Open Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="fixed top-0 left-0 w-full h-screen bg-white z-50 p-6 animate-slideDown"
            side="top" // Remove side (optional if it's defaulting)
          >
             <SheetHeader>
          <SheetTitle>Biniyam</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-15 h-full text-8xl justify-center align-middle pr-32 font-bold">
            <Link href="/work" className="hover:text-primary transition-colors">WORK</Link>
            <Link href="/about" className="hover:text-primary transition-colors">ABOUT</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">CONTACT</Link>
        </div>
             
          </SheetContent>

        </Sheet>
    </header>
  )
}

export default Header
