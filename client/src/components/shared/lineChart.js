import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

function LineChart({ data }) {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: "Number of attempts",
                data: data.map(item => item.attempts),
                borderColor: 'rgba(26, 247, 181, 1)',
                backgroundColor: 'rgba(26, 247, 181, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (context) => `Attempts: ${context.raw}`,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Attempts',
                },
            },
        },
    };

    return (
        <div className="my-4">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;