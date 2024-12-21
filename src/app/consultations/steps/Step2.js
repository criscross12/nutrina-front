export default function Step2() {
    return (
      <div>
        <h2 className="text-2xl font-semibold">Paso 2: Detalles de Consulta</h2>
        <p>Por favor, proporciona detalles sobre la consulta.</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Motivo de la Consulta</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Describe tu motivo" rows="4"></textarea>
          </div>
        </form>
      </div>
    );
  }
  