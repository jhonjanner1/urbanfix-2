import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin, onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      alert(`Bienvenido, ${email}!`);
      if (onLogin) onLogin();
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      console.log(`Navegando a: ${page}`);
      // Aquí podrías implementar react-router o tu sistema de navegación
      alert(`Navegando a: ${page}`);
    }
  };

  return (
    <div className="login-container">
      <nav className="navbar">
        <div className="logo"><span>UrbanFix</span></div>
        <ul className="nav-links">
          <li><button onClick={() => handleNavigation("inicio")}>Inicio</button></li>
          <li><button onClick={() => handleNavigation("registro")}>Registrarse</button></li>
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
            <p>¿No tienes una cuenta? <span onClick={() => handleNavigation("registro")}>Regístrate ahora</span></p>
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