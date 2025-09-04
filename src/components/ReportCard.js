import React from "react";
import "./ReportCard.css";

function ReportCard({ report }) {
  return (
    <div className="report-card">
      <h3>{report.location}</h3>
      <p>Severidad: {report.severity}</p>
    </div>
  );
}

export default ReportCard;
