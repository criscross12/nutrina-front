'use client';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, HomeIcon, InformationCircleIcon } from '@heroicons/react/24/solid'; 
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-green-500 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-lg">Logo</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="mt-4">
          <ul className="text-white">
            <li className="p-2 hover:bg-blue-600 flex items-center">
              <HomeIcon className="h-5 w-5 mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="p-2 hover:bg-blue-600 flex items-center">
              <InformationCircleIcon className="h-5 w-5 mr-2" />
              <Link href="/about">About</Link>
            </li>
            {/* Otros enlaces si es necesario */}
          </ul>
        </nav>
      )}
    </div>
  );
}
