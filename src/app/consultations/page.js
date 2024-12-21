'use client';

import { useState } from 'react';
import SidebarLayout from '../../components/SidebarLayout';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

export default function ConsultationPage() {
  const userType = 'admin'; // Cambia a 'user' según sea necesario
  const [step, setStep] = useState(1);
  
  // Array de componentes de pasos, agrega o quita pasos aquí según sea necesario
  const steps = [Step1, Step2, Step3];
  
  const totalSteps = steps.length;

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const CurrentStepComponent = steps[step - 1];

  return (
    <SidebarLayout userType={userType}>
      <h1 className="text-3xl font-bold mb-8">Formulario de Consulta</h1>
      
      {/* Barra de progreso moderna */}
      <div className="mb-8 relative">
        <div className="absolute w-full h-1 bg-gray-300 rounded-full top-1/2 transform -translate-y-1/2"></div>
        <div className="flex justify-between items-center relative z-10">
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-4 ${step >= index + 1 ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-500 border-gray-300'} transition duration-300`}
              >
                {index + 1}
              </div>
              <span className={`mt-1 text-sm ${step === index + 1 ? 'text-teal-600 font-semibold' : 'text-gray-500'}`}>
                Paso {index + 1}
              </span>
            </div>
          ))}
        </div>
        <div
          className="absolute top-1/2 left-0 h-1 bg-teal-600 rounded-full transition-all duration-300"
          style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>

      {/* Contenido del paso actual */}
      <CurrentStepComponent />

      {/* Botones de navegación */}
      <div className="flex justify-between mt-8">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-6 py-2 bg-gray-200 text-gray-600 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
          >
            Anterior
          </button>
        )}
        {step < totalSteps ? (
          <button
            onClick={nextStep}
            className="ml-auto px-6 py-2 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Siguiente
          </button>
        ) : (
          <button
            onClick={() => alert('Consulta confirmada')}
            className="ml-auto px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          >
            Confirmar
          </button>
        )}
      </div>
    </SidebarLayout>
  );
}
