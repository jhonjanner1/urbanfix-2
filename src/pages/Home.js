import React, { useState, useEffect } from "react";
import "./Home.css";
import foto1 from "../assets/images/foto1.jpg";
import foto2 from "../assets/images/foto2.jpeg";
import foto3 from "../assets/images/foto3.jpg";
import logoUrban from "../assets/images/logoUrban.png";

  
function Home({ goLogin, goRegister, goReport }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // estado del menú
  const carouselImages = [foto1, foto2, foto3];

  const recentReports = [
    { id: 1, title: "Bache en Avenida Principal", status: "En proceso", location: "Chapinero", date: "15/09/2023" },
    { id: 2, title: "Alcantarilla tapada", status: "Resuelto", location: "Usaquén", date: "10/09/2023" },
    { id: 3, title: "Semáforo dañado", status: "Pendiente", location: "Teusaquillo", date: "12/09/2023" },
    { id: 4, title: "Calle sin iluminación", status: "En proceso", location: "Suba", date: "14/09/2023" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  const toggleMenu = () => setMenuOpen(!menuOpen); // abre/cierra hamburguesa

  return (
    <div className="home-page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src={logoUrban} alt="UrbanFix Logo" className="logo-img" />
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><button onClick={goLogin}>Login</button></li>
          <li><button onClick={goRegister}>Registro</button></li>
          <li><button onClick={goReport}>Reportes</button></li>
        </ul>

        {/* Hamburger */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* CARRUSEL */}
      <section className="carousel-container">
        <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {carouselImages.map((img, index) => (
            <div key={index} className="carousel-slide">
              <img src={img} alt={`Slide ${index + 1}`} />
              <div className="carousel-overlay">
                <h2>Transformando tu ciudad</h2>
                <p>Reporta problemas urbanos y contribuye a mejorar Bogotá</p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button key={index} className={index === currentSlide ? "active" : ""} onClick={() => goToSlide(index)} />
          ))}
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="home-container">
        <h1>Bienvenido a <span className="highlight">UrbanFix</span></h1>
        <p>La app para reportar y solucionar baches en tu ciudad 🚧</p>
        <div className="btn-group">
          <button onClick={goLogin}>Iniciar sesión</button>
          <button onClick={goRegister}>Registrarse</button>
          <button onClick={goReport}>Ver reportes</button>
        </div>
      </main>

      {/* REPORTES */}
      <section className="recent-reports">
        <div className="section-header">
          <h2>Reportes <span className="highlight">Recientes</span></h2>
          <p>Problemas reportados por la comunidad</p>
        </div>
        <div className="reports-grid">
          {recentReports.map(r => (
            <div key={r.id} className="report-card">
              <div className="report-status">{r.status}</div>
              <h3>{r.title}</h3>
              <div className="report-details">
                <p>📍 {r.location}</p>
                <p>📅 {r.date}</p>
              </div>
              <button className="view-report-btn" onClick={goReport}>Ver detalles</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 UrbanFix | Creado con 💛 en Bogotá</p>
      </footer>
    </div>
  );
}

export default Home;
