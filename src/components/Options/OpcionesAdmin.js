// OpcionesAdmin.js
import Link from 'next/link';
import { HomeIcon, ClipboardDocumentListIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const OpcionesAdmin = ({ isOpen }) => {
  return (
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
  );
};

export default OpcionesAdmin;
