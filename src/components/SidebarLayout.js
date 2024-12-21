'use client';

import { useState, useEffect } from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, LockClosedIcon, MoonIcon, SunIcon, SparklesIcon } from '@heroicons/react/24/solid';
import OpcionesAdmin from './Options/OpcionesAdmin'; // Asegúrate de importar el componente correcto
import OpcionesUser from './Options/OpcionesUser'; // Asegúrate de importar el componente correcto
import Link from 'next/link';

export default function SidebarLayout({ children, userType }) { // userType puede ser 'admin' o 'user'
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className={`${isOpen ? 'w-64' : 'w-20'} ${isDarkMode ? 'bg-gray-800' : 'bg-green-600'} h-full transition-all duration-300 relative`}>
        <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronDoubleLeftIcon className="h-6 w-6" aria-hidden="true" /> : <ChevronDoubleRightIcon className="h-6 w-6" aria-hidden="true" />}
        </button>

        {isOpen && (
          <div className="text-center mt-4 mb-6 flex items-center justify-center">
            <SparklesIcon className="h-8 w-8 mr-2 text-white" aria-hidden="true" />
            <h1 className={`text-3xl font-bold font-lobster ${isDarkMode ? 'text-white' : 'text-black'}`}>Nutriña</h1>
          </div>
        )}

        <nav className="mt-4">
          {userType === 'admin' ? <OpcionesAdmin isOpen={isOpen} /> : <OpcionesUser isOpen={isOpen} />}
        </nav>

        <div className="absolute bottom-4 left-2">
          <button className="flex items-center text-white p-2 rounded mb-2 w-full text-left" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <>
                <SunIcon className="h-5 w-5 mr-2" aria-hidden="true" /> {isOpen && <span className='font-bold'>Modo Claro</span>}
              </>
            ) : (
              <>
                <MoonIcon className="h-5 w-5 mr-2" aria-hidden="true" /> {isOpen && <span className='font-bold'>Modo Oscuro</span>}
              </>
            )}
          </button>
          
          <Link href="/logout" className="flex items-center text-white p-2 mb-2 rounded w-full text-left">
            <LockClosedIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            {isOpen && <span className='truncate hover:bg-red-600 rounded'>Logout</span>}
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
