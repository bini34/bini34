import React from 'react'
import Link from 'next/link'
import { Mail, Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full h-52 p-20 border-t-2 border-black flex justify-between ">
      <p className='text-xl font-semibold'>Biniyam Amabachew @ 2025</p>
      <div className='flex gap-5'>
        <Link href=""><Linkedin/> </Link>

        <Link href=""><Github/> </Link>
        <Link href=""><Mail/> </Link>
      </div>
    </footer>
  )
}

export default Footer
