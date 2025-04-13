import { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddCourse() {
    const [courseData, setCourseData] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        image: null,
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setCourseData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(courseData);
        setMessage("Course Submitted Successfully!");

        // Optional: clear the form after submission
        setCourseData({
            title: "",
            description: "",
            category: "",
            price: "",
            image: null,
        });

        // Optional: auto-hide the message after 3 seconds
        setTimeout(() => setMessage(""), 3000);
    };

    return (
        <motion.div
            className="container mt-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="shadow p-5 rounded bg-white">

                {message && <div className="alert alert-info">{message}</div>}

                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="title" className="form-label">Course Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={courseData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            name="category"
                            value={courseData.category}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="description" className="form-label">Course Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="4"
                            value={courseData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="price" className="form-label">Price ($)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            value={courseData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="image" className="form-label">Course Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12 text-center mt-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="btn btn-primary px-5 py-2"
                        >
                            Submit Course
                        </motion.button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}
