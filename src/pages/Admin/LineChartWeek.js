// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Dataset',
        data: [100, 130, 90, 150, 240, 190, 100],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        tension: 0.1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Doanh Thu Tuần',
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="relative h-96">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
