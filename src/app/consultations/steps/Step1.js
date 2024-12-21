export default function Step1() {
    return (
      <div>
        <h2 className="text-2xl font-semibold">Paso 1: Información Personal</h2>
        <p>Por favor, proporciona tu nombre y correo electrónico.</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Nombre</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-gray-700">Correo Electrónico</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="tu@correo.com" />
          </div>
        </form>
      </div>
    );
  }
  