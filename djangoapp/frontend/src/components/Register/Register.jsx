import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registering:', formData);
        // Lógica para enviar al backend
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>First Name</label>
                    <input type="text" name="firstName" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input type="text" name="lastName" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;