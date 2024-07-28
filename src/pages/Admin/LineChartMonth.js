// src/LineChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Revenue',
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        tension: 0.1,
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ohecaa.azurewebsites.net/api/Dashboards/RevenueForMonth');
        const data = response.data;

        // Kiểm tra dữ liệu nhận được
        console.log('API Data:', data);

        // Truy cập mảng data bên trong đối tượng
        if (data && Array.isArray(data.data)) {
          const datasetData = data.data;

          setChartData(prevChartData => ({
            ...prevChartData,
            datasets: [
              {
                ...prevChartData.datasets[0],
                data: datasetData
              }
            ]
          }));
        } else {
          console.error('Data is not an array or does not exist:', data);
        }
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Doanh Thu Tháng',
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="relative h-96">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
