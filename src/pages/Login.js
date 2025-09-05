import React, { useState } from "react";
import "./Login.css";

function Login({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Login exitoso
        alert(`Bienvenido, ${data.nombre}!`);
        
        // Redirigir según rol
        if (data.id_rol === 2) {
          onNavigate("ciudadano"); // ciudadano
        } else {
          onNavigate("home"); // otros roles
        }
      } else {
        // Error devuelto por el backend (usuario no encontrado o contraseña incorrecta)
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      alert("Error al conectar con el servidor");
    }
  };

  const handleNavigation = (page) => {
    if (onNavigate) onNavigate(page);
  };

  return (
    <div className="login-container">
      <nav className="navbar">
        <div className="logo"><span>UrbanFix</span></div>
        <ul className="nav-links">
          <li><button onClick={() => handleNavigation("home")}>Inicio</button></li>
          <li><button onClick={() => handleNavigation("register")}>Registrarse</button></li>
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

      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Ingresar</button>
          <div className="register-link">
            <p>¿No tienes una cuenta? <span onClick={() => handleNavigation("register")}>Regístrate ahora</span></p>
          </div>
        </form>
        <div className="login-footer">
          <p>© 2023 UrbanFix. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
