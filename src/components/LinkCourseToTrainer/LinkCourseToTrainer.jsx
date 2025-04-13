import React, { useState } from "react";
import { Button, Form, ListGroup, Table, Card } from "react-bootstrap";

// Dummy data for courses and trainers
const courses = [
    { id: 1, name: "JavaScript for Beginners" },
    { id: 2, name: "Advanced React" },
    { id: 3, name: "Python for Data Science" },
    { id: 4, name: "Machine Learning with Python" },
];

const trainers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Brown" },
    { id: 4, name: "Emily White" },
];

const LinkCourseToTrainer = () => {
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedTrainer, setSelectedTrainer] = useState("");
    const [assignedCourses, setAssignedCourses] = useState([]);
    const [message, setMessage] = useState("");

    // Handle selecting a course
    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    // Handle selecting a trainer
    const handleTrainerChange = (e) => {
        setSelectedTrainer(e.target.value);
    };

    // Handle the link button click
    const handleLinkCourseTrainer = () => {
        if (selectedCourse && selectedTrainer) {
            const newAssignment = {
                course: courses.find(course => course.id === parseInt(selectedCourse)).name,
                trainer: trainers.find(trainer => trainer.id === parseInt(selectedTrainer)).name,
            };
            setAssignedCourses([...assignedCourses, newAssignment]);
            setMessage("Course successfully linked to trainer!");
            setSelectedCourse("");
            setSelectedTrainer("");
        } else {
            setMessage("Please select both a course and a trainer.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Link Course to Trainer</h2>

            {/* Message for success or failure */}
            {message && <div className="alert alert-info">{message}</div>}

            {/* Card for the form */}
            <Card className="shadow-sm p-4 mb-4">
                <Form>
                    {/* Dropdown for selecting course */}
                    <Form.Group controlId="courseSelect">
                        <Form.Label>Course</Form.Label>
                        <Form.Control as="select" value={selectedCourse} onChange={handleCourseChange}>
                            <option value="">Select a Course</option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    {/* Dropdown for selecting trainer */}
                    <Form.Group controlId="trainerSelect">
                        <Form.Label>Trainer</Form.Label>
                        <Form.Control as="select" value={selectedTrainer} onChange={handleTrainerChange}>
                            <option value="">Select a Trainer</option>
                            {trainers.map((trainer) => (
                                <option key={trainer.id} value={trainer.id}>
                                    {trainer.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    {/* Link Button */}
                    <Button variant="primary" className="mx-auto d-block mt-4" onClick={handleLinkCourseTrainer}>
                        Link Course to Trainer
                    </Button>
                </Form>
            </Card>

            {/* List of assigned courses with a table format */}
            <h4>Assigned Courses to Trainers</h4>
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>Course</th>
                    <th>Trainer</th>
                </tr>
                </thead>
                <tbody>
                {assignedCourses.length > 0 ? (
                    assignedCourses.map((assignment, index) => (
                        <tr key={index}>
                            <td>{assignment.course}</td>
                            <td>{assignment.trainer}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="2" className="text-center">
                            No assignments yet.
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
};

export default LinkCourseToTrainer;
