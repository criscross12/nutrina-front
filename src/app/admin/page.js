'use client';

import SidebarLayout from "../../components/SidebarLayout";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const patients = [
  { id: 1, name: "Juan Pérez", age: 30, email: "juan.perez@ejemplo.com" },
  { id: 2, name: "María López", age: 25, email: "maria.lopez@ejemplo.com" },
  { id: 3, name: "Carlos Sánchez", age: 28, email: "carlos.sanchez@ejemplo.com" },
  { id: 4, name: "Laura Martínez", age: 22, email: "laura.martinez@ejemplo.com" },
  { id: 5, name: "Pedro Gómez", age: 35, email: "pedro.gomez@ejemplo.com" },
  { id: 6, name: "Ana Torres", age: 29, email: "ana.torres@ejemplo.com" },
  { id: 7, name: "Jorge Ramírez", age: 40, email: "jorge.ramirez@ejemplo.com" },
  { id: 8, name: "Sofía Morales", age: 27, email: "sofia.morales@ejemplo.com" },
];

export default function PatientsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastPatient = currentPage * itemsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - itemsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);
  const totalPages = Math.ceil(patients.length / itemsPerPage);

  return (
    <SidebarLayout>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Lista de Pacientes</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Agregar Nuevo Usuario
          </button>
        </div>

        <div className={`overflow-x-auto`}>
          <table className={`min-w-full border border-gray-300 rounded-lg shadow-lg`}>
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">Nombre</th>
                <th className="py-3 px-6 text-left">Edad</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {currentPatients.map((patient) => (
                <tr key={patient.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{patient.name}</td>
                  <td className="py-3 px-6 text-left">{patient.age}</td>
                  <td className="py-3 px-6 text-left">{patient.email}</td>
                  <td className="py-3 px-6 text-center">
                    <button className="text-green-700">Consulta</button>
                    <button className="text-blue-600 ml-3">Editar</button>
                    <button className="text-red-600 ml-4">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex justify-between items-center mt-4">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-blue-600 text-white rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <span>Página {currentPage} de {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-blue-600 text-white rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SidebarLayout>
  );
}
