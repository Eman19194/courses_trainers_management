import React, { useState } from "react";
import { Button, Dropdown, Table } from "react-bootstrap";

export default function Payment() {
    // States for form input and payment data
    const [trainer, setTrainer] = useState("");
    const [course, setCourse] = useState("");
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("Unpaid");
    const [payments, setPayments] = useState([
        { id: 1, trainer: "John Doe", course: "React Basics", amount: 200, status: "Unpaid" },
        { id: 2, trainer: "Jane Smith", course: "Flutter Development", amount: 300, status: "Paid" },
    ]);
    const [filter, setFilter] = useState("All");

    // Handle adding a new payment record
    const handleAddPayment = (e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page

        // Ensure amount is a number
        const paymentAmount = parseFloat(amount);
        if (!trainer || !course || isNaN(paymentAmount) || paymentAmount <= 0) {
            alert("Please fill in all fields correctly.");
            return;
        }

        const newPayment = {
            id: payments.length + 1,
            trainer,
            course,
            amount: paymentAmount,
            status,
        };

        setPayments([...payments, newPayment]);

        // Reset form after submission
        setTrainer("");
        setCourse("");
        setAmount("");
        setStatus("Unpaid");
    };

    // Handle changing the payment status
    const handleMarkAsPaid = (id) => {
        const updatedPayments = payments.map((payment) =>
            payment.id === id ? { ...payment, status: "Paid" } : payment
        );
        setPayments(updatedPayments);
    };

    // Filter payments based on status
    const filteredPayments = payments.filter(
        (payment) => filter === "All" || payment.status === filter
    );

    return (
        <>
            <main className="contact pt-4">
                <div className="container mt-5">
                    <div className="contact-body box-radius">
                        <div className="row main-white box-radius">
                            {/* Add Payment Form Container with Shadow */}
                            <div className="contact-content col-lg-12 col-md-12 shadow p-4 rounded">
                                <h3 className="contact-title mb-5">Add Payment</h3>
                                <form onSubmit={handleAddPayment}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="trainer" className="form-label">
                                                Trainer Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="trainer"
                                                name="trainer"
                                                value={trainer}
                                                onChange={(e) => setTrainer(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="course" className="form-label">
                                                Course
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="course"
                                                name="course"
                                                value={course}
                                                onChange={(e) => setCourse(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="amount" className="form-label">
                                                Amount
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="amount"
                                                name="amount"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="status" className="form-label">
                                                Payment Status
                                            </label>
                                            <select
                                                className="form-control"
                                                id="status"
                                                name="status"
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                                required
                                            >
                                                <option value="Unpaid">Unpaid</option>
                                                <option value="Paid">Paid</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mt-4 text-center">
                                            <Button type="submit" variant="primary">
                                                Add Payment
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Filter Payments by Status */}
                    <Dropdown className="mb-3 mt-5">
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Filter by Status: {filter}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setFilter("All")}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilter("Paid")}>Paid</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilter("Unpaid")}>Unpaid</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* Payment Table */}
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            <th>Trainer</th>
                            <th>Course</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredPayments.map((payment) => (
                            <tr key={payment.id}>
                                <td>{payment.trainer}</td>
                                <td>{payment.course}</td>
                                <td>${payment.amount}</td>
                                <td>
                                    <span
                                        className={`badge ${
                                            payment.status === "Paid" ? "bg-success" : "bg-danger"
                                        }`}
                                    >
                                        {payment.status}
                                    </span>
                                </td>
                                <td>
                                    {payment.status === "Unpaid" && (
                                        <Button
                                            variant="success"
                                            size="sm" // This makes the button smaller
                                            onClick={() => handleMarkAsPaid(payment.id)}
                                        >
                                            Mark as Paid
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </main>
        </>
    );
}
