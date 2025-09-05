import React, { useState } from "react";
import "./Ciudadano.css";

function Ciudadano({ goHome }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Aquí podrías tener estado para los reportes si quieres agregarlos dinámicamente
  const [reportes, setReportes] = useState([
    {
      titulo: "Bache en la calle 12",
      estado: "Pendiente",
      comentario: "En revisión",
    },
  ]);

  return (
    <div>
      <header>
        <h1>UrbanFix - Usuario</h1>
        <div className="perfil">
          <img src="https://via.placeholder.com/40" alt="Perfil" />
          <button className="menu-btn" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
      </header>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={closeSidebar}>
          ×
        </span>
        <a href="#">Mi Perfil</a>
        <a href="#">Configuración</a>
        <a href="#" onClick={goHome}>
          Volver al inicio
        </a>
        <a href="#" onClick={goHome}>
          Cerrar sesión
        </a>
      </div>

      <div className="contenido">
        <h2>Reportar Daño</h2>
        <form>
          <input type="text" placeholder="Título del reporte" />
          <textarea placeholder="Describe el problema"></textarea>
          <input type="file" />
          <button type="submit">Enviar reporte</button>
        </form>

        <h2>Mis reportes</h2>
        {reportes.map((r, index) => (
          <div key={index} className="card">
            <h3>{r.titulo}</h3>
            <p>
              <strong>Estado:</strong> {r.estado}
            </p>
            <p>
              <strong>Comentario JAC:</strong> {r.comentario}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ciudadano;
