"use client"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"


function Header() {

  return (
    <header className="flex justify-between items-center w-full px-4 py-3 ">
      {/* Logo */}
      <Link
          href="/"
          className="font-[var(--font-amatic)] text-[30px]  text-primary"
        >
          BINIYAM
        </Link>


    

      {/* Mobile Menu (Sheet) */}
        <Sheet >
          <SheetTrigger asChild>
            <button className="cursor-pointer">
            <svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>

            </button>

          </SheetTrigger>
          <SheetContent
            className="fixed top-0 left-0 w-full h-screen bg-white z-50 p-2 animate-slideDown"
            side="top"
          >
             <SheetHeader>
              <Link
              href="/"
              className="font-[var(--font-amatic)] text-[30px]  text-primary"
            >
              BINIYAM
            </Link>
        </SheetHeader>
        <div className="flex flex-col gap-15 h-full md:text-8xl text-6xl justify-center align-middle pr-32 font-bold ">
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
