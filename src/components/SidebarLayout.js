'use client';
import { useState, useEffect } from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, HomeIcon, InformationCircleIcon, LockClosedIcon, MoonIcon, SunIcon, SparklesIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function SidebarLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cargar el modo oscuro desde localStorage al iniciar
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);

  // Cambiar el modo oscuro y guardar en localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); // Guardar en localStorage
      return newMode;
    });
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Sidebar */}
      <div
        className={`${isOpen ? 'w-64' : 'w-20'} ${isDarkMode ? 'bg-gray-800' : 'bg-green-600'} h-full transition-all duration-300 relative`}
      >
        <button
            className="text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? (
                <ChevronDoubleLeftIcon className="h-6 w-6" aria-hidden="true" /> // Icono de cerrar
            ) : (
                <ChevronDoubleRightIcon className="h-6 w-6" aria-hidden="true" /> // Icono de abrir
            )}
        </button>

        {/* Nombre de la compañía con icono */}
        {isOpen && (
          <div className="text-center mt-4 mb-6 flex items-center justify-center">
            <SparklesIcon className="h-8 w-8 mr-2 text-white" aria-hidden="true" />
            <h1 className={`text-3xl font-bold font-lobster ${isDarkMode ? 'text-white' : 'text-black'}`}>Nutriña</h1>
          </div>
        )}

        <nav className="mt-4">
          <ul>
            <li className="p-2 hover:bg-blue-500 flex items-center">
              <Link href="/" className="flex items-center w-full text-white">
                <HomeIcon className="h-5 w-5 mr-2 text-blue-50" aria-hidden="true" />
                {isOpen && <span className='font-bold'>Home</span>}
              </Link>
            </li>
            <li className="p-2 hover:bg-blue-500 flex items-center">
              <Link href="/consultations" className="flex items-center w-full text-white">
                <ClipboardDocumentListIcon className="h-5 w-5 mr-2 text-blue-50" aria-hidden="true" />
                {isOpen && <span className='font-bold'>Consultas</span>}
              </Link>
            </li>
            <li className="p-2 hover:bg-blue-500 flex items-center">
              <Link href="/about" className="flex items-center w-full text-white">
                <InformationCircleIcon className="h-5 w-5 mr-2 text-blue-50" aria-hidden="true" />
                {isOpen && <span className='font-bold'>About</span>}
              </Link>
            </li>            
          </ul>
        </nav>

        {/* Botón de modo oscuro y botón de cerrar sesión */}
        <div className="absolute bottom-4 left-2">
          <button
            className="flex items-center text-white p-2 rounded mb-2 w-full text-left"
            onClick={toggleDarkMode}
          >
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
          
          {/* Mostrar el ícono de logout */}
          <Link href="/logout" className="flex items-center text-white p-2 mb-2 rounded w-full text-left">
            <LockClosedIcon className="h-5 w-5 mr-2 " aria-hidden="true" />
            {isOpen && <span className='truncate hover:bg-red-600 rounded'>Logout</span>}
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
