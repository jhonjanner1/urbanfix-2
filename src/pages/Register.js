import "./Register.css";
import React, { useState } from "react";

function Register({ goLogin }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    documento: "",
    contrasena: "",
    confirmContrasena: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.contrasena !== formData.confirmContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          correo: formData.correo,
          documento: formData.documento,
          contrasena: formData.contrasena
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Registro exitoso. Bienvenido ${data.nombre}!`);
        goLogin(); // Redirige automáticamente a Login.js
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert("Error al conectar con el servidor");
    }
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
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="documento"
              placeholder="Documento"
              value={formData.documento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              value={formData.contrasena}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="confirmContrasena"
              placeholder="Confirmar contraseña"
              value={formData.confirmContrasena}
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
