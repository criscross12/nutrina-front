'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Asesoría Nutricional Personalizada",
      description: "Recibe un plan nutricional adaptado a tus necesidades y objetivos.",
      image: "/images/nutrition1.jpg", // Asegúrate de tener imágenes en esta ruta
    },
    {
      title: "Talleres y Charlas",
      description: "Participa en talleres educativos sobre alimentación y salud.",
      image: "/images/nutrition2.jpg",
    },
    {
      title: "Seguimiento Continuo",
      description: "Monitoreo regular para asegurarte de que estás en el camino correcto.",
      image: "/images/nutrition3.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Encabezado */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-700">Tu Marca</h1>
        <nav className="flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-teal-600">Productos</Link>
          <Link href="#" className="text-gray-600 hover:text-teal-600">Soluciones</Link>
          <Link href="#" className="text-gray-600 hover:text-teal-600">Precios</Link>
          <Link href="#" className="text-gray-600 hover:text-teal-600">Consigue una Demo</Link>
        </nav>
        <div className="space-x-4">
          <Link href="/login" className="text-teal-600">Inicia sesión</Link>
          <Link href="/register">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-teal-700 transition duration-300">
              Regístrate gratis
            </button>
          </Link>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="text-center py-16 px-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Productividad para Equipos Felices</h2>
        <p className="text-gray-600 text-lg mb-12">La suite de software de productividad enfocada a un flujo de trabajo natural.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Projects",
              description: "Gestión de proyectos para equipos de proyectos exitosos",
              color: "from-purple-500 to-indigo-500",
              icon: "📈",
            },
            {
              title: "Zenforms",
              description: "Formularios y encuestas",
              color: "from-green-400 to-blue-500",
              icon: "📋",
            },
            {
              title: "Zenchat",
              description: "Chat + Tareas = Magia",
              color: "from-blue-400 to-purple-500",
              icon: "💬",
            },
          ].map((item, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md bg-gradient-to-r ${item.color} text-white`}>
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Carrusel de Nutrición */}
        <div className="relative mt-8 mb-12">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full flex-shrink-0">
                  <img src={slide.image} alt={slide.title} className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105" />
                  <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-teal-600">{slide.title}</h2>
                    <p className="mt-2 text-gray-600">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition duration-300">
            &#10094; {/* Icono de flecha izquierda */}
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition duration-300">
            &#10095; {/* Icono de flecha derecha */}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-4 text-center">
        <p>&copy; 2024 Tu Marca. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
