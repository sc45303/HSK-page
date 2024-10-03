import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  return (
    <header className="  p-4 flex justify-between items-center font-bol">
      
      <div className="flex items-center">
        <Image src="/kk.png"
         alt="Suhail Marketer Logo" 
         height={300}
         width={150}
        
        
        />
      </div>

      
      <nav>
        <ul className="flex space-x-4  text-white font-semibold">
          <li className=" hover:underline"><Link href="/">Home</Link></li>
          <li className='hover:underline'><Link href=" /about">About</Link></li>
          <li className='hover:underline'><Link href=" /services">Services</Link></li>
         
        </ul>
      </nav>
    </header>
  );
}
