import React, { useState } from "react";
import { motion } from "framer-motion";

const AddTeacher = () => {
    const [trainerData, setTrainerData] = useState({
        name: "",
        bio: "",
        expertise: "",
        email: "",
        phone: "",
        profileImage: null,
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setTrainerData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (trainerData.name && trainerData.email) {
            setMessage("Trainer added successfully!");
        } else {
            setMessage("Please fill in all required fields.");
        }
    };

    return (
        <motion.div
            className="container mt-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="shadow p-4 rounded bg-white">
                <h2 className="text-center mb-4">Add New Trainer</h2>

                {/* Message for success or failure */}
                {message && <div className="alert alert-info">{message}</div>}

                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Trainer Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={trainerData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="expertise" className="form-label">Expertise</label>
                        <input
                            type="text"
                            className="form-control"
                            id="expertise"
                            name="expertise"
                            value={trainerData.expertise}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="bio" className="form-label">Trainer Bio</label>
                        <textarea
                            className="form-control"
                            id="bio"
                            name="bio"
                            rows="4"
                            value={trainerData.bio}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={trainerData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={trainerData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="profileImage" className="form-label">Profile Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="profileImage"
                            name="profileImage"
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
                            Submit Trainer
                        </motion.button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default AddTeacher;
