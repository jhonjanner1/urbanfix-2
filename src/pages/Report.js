import React from "react";
import "./Report.css";
import ReportCard from "../components/ReportCard";


function Report({ goHome }) {
  const reports = [
    { id: 1, location: "Calle 1", severity: "Alta" },
    { id: 2, location: "Calle 2", severity: "Media" },
    { id: 3, location: "Calle 3", severity: "Baja" },
  ];

  return (
    <div className="report-container">
      <h2>Reportes de Baches</h2>
      <button onClick={goHome}>Volver al inicio</button>
      <div className="cards">
        {reports.map((r) => (
          <ReportCard key={r.id} report={r} />
        ))}
      </div>
    </div>
  );
}

export default Report;
