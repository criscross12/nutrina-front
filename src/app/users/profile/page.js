'use client';
import { useState } from "react";
import SidebarLayout from "../../../components/SidebarLayout";

export default function UserProfilePage() {
  const userType = 'user'; // Cambia a 'user' según sea necesario

  // Datos de ejemplo del usuario
  const userData = {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    password: "mi_contraseña_secreta", // No muestres la contraseña real en producción
    age: 30,
    location: "Madrid, España",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado local para el modo oscuro

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <SidebarLayout userType={userType}>
      <div className={`p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-500 text-black'}`}>
        <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
        
        <div className={`shadow-md rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Nombre:</p>
              <p>{userData.name}</p>
            </div>
            <div>
              <p className="font-medium">Correo Electrónico:</p>
              <p>{userData.email}</p>
            </div>
            <div>
              <p className="font-medium">Contraseña:</p>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  value={userData.password}
                  readOnly
                  className={`border rounded p-2 w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                />
                <button
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-blue-500"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>
            <div>
              <p className="font-medium">Edad:</p>
              <p>{userData.age}</p>
            </div>
            <div>
              <p className="font-medium">Ubicación:</p>
              <p>{userData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
