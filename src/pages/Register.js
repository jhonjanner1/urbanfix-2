import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert(`Registro exitoso. Bienvenido ${formData.name}!`);
  };

  return (
    <div className="register-container">
      <nav className="navbar">
        <div className="logo"><span>UrbanFix</span></div>
        <ul className="nav-links">
          <li><button>Inicio</button></li>
          <li><button>Registrarse</button></li>
        </ul>
        <div className="hamburger" onClick={() => {
          document.querySelector(".nav-links").classList.toggle("open");
          document.querySelector(".hamburger").classList.toggle("active");
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="register-card">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-button">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Register;