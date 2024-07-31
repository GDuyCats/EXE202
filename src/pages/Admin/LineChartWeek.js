// src/LineChart.js
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sarturday', 'Sunday'],
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
        const response = await axios.get('https://ohecaa.azurewebsites.net/api/Dashboards/RevenueForWeek');
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
        text: 'Doanh Thu Tuần',
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
