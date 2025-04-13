import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler, ArcElement } from 'chart.js';

// Register necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Filler,
    ArcElement
);

const Dashboard = () => {
    const stats = {
        totalCourses: 120,
        totalTrainers: 45,
        totalPayments: 23000,
        activeEnrollments: 300,
    };

    // Bar chart data (Course Enrollments by Month)
    const barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Enrollments',
                data: [50, 70, 120, 90, 160, 200],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    // Pie chart data (Trainer Payment Distribution)
    const pieChartData = {
        labels: ['Paid', 'Pending', 'Overdue'],
        datasets: [
            {
                data: [80, 15, 5],
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
            },
        ],
    };

    // Line chart data (Monthly Signups)
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Signups',
                data: [20, 30, 50, 60, 90, 120],
                fill: false,
                borderColor: '#36A2EB',
                tension: 0.1,
            },
        ],
    };

    // Chart height style
    const chartStyle = {
        height: '300px',
    };

    // Chart options with animations
    const chartOptions = {
        responsive: true,
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
            onProgress: (animation) => {
                console.log(animation);
            },
        },
    };

    return (
        <div className="container mt-4">
            <div className="mb-4 text-center">
                <h2 className="fw-bold pt-5">Dashboard Overview</h2>
                <p className="text-muted pb-3">Insights into your courses, trainers, and enrollments</p>
            </div>

            {/* Stats Cards */}
            <div className="row mb-4">
                <div className="col-12 col-md-3 mb-3">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <h5 className="card-title">Total Courses</h5>
                            <p className="card-text display-4 text-primary">{stats.totalCourses}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mb-3">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <h5 className="card-title">Total Trainers</h5>
                            <p className="card-text display-4 text-primary">{stats.totalTrainers}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mb-3">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <h5 className="card-title">Total Payments</h5>
                            <p className="card-text display-4 text-primary">${stats.totalPayments}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mb-3">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <h5 className="card-title">Active Enrollments</h5>
                            <p className="card-text display-4 text-primary">{stats.activeEnrollments}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="row">
                <div className="col-12 col-lg-4 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Course Enrollments by Month</h5>
                            <div style={chartStyle}>
                                <Bar data={barChartData} options={{ ...chartOptions }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Trainer Payment Distribution</h5>
                            <div style={chartStyle}>
                                <Pie data={pieChartData} options={{ ...chartOptions }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Monthly Signups</h5>
                            <div style={chartStyle}>
                                <Line data={lineChartData} options={{ ...chartOptions }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
