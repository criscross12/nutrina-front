'use client';

import React from "react";
import SidebarLayout from "../../components/SidebarLayout";
import { Bar } from 'react-chartjs-2';  // Importar el componente de gráfico de barras
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';  // Importar el plugin de anotaciones

// Registrar los módulos de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin  // Registrar el plugin de anotaciones
);

export default function AboutPage() {
  let datos = [{
    requestUID: "2f4efdbc-3fc6-46e0-ad24-1ef1a581517a",
    medi1: [{ "1er": 59.25, "2er": 98.8, "3er": 92.15 }],
    medi2: [{ "1er": 85, "2er": 94, "3er": 48 }]
  }];

  // Extraer los valores de las medias para graficar
  const labels = Object.keys(datos[0].medi1[0]); // '1er', '2er', '3er'
  const medi1Values = Object.values(datos[0].medi1[0]);
  const medi2Values = Object.values(datos[0].medi2[0]);

  // Configurar los datos del gráfico
  const data1 = {
    labels: labels,  // Etiquetas para el gráfico de barras
    datasets: [
      {
        label: 'Medi 1',  // Primera serie de datos
        data: medi1Values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Color de las barras
        borderColor: 'rgba(75, 192, 192, 1)',  // Color del borde
        borderWidth: 1,
      }
    ],
  };

  const data2 = {
    labels: labels,  // Etiquetas para el gráfico de barras
    datasets: [
      {
        label: 'Medi 2',  // Segunda serie de datos
        data: medi2Values,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',  // Color de las barras
        borderColor: 'rgba(153, 102, 255, 1)',  // Color del borde
        borderWidth: 1,
      },
    ],
  };

  // Configurar las opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de barras con datos medi1',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  const options2 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de barras con datos medi1',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };  

  return (
    <SidebarLayout>
      <h1 className="">About Us</h1>
      <p>
        Welcome to the about page. This content will grow, but the sidebar will stay in place.
      </p>

      {/* Aquí agregamos el gráfico de barras */}
      <div>
        <h2>Gráfico de barras de medi1 con alerta</h2>
        <Bar data={data1} options={options} />
      </div>
      <div>
        <h2>Gráfico de barras de medi2 con alerta</h2>
        <Bar data={data2} options={options2} />
      </div>      
    </SidebarLayout>
  );
}
