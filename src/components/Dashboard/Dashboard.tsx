import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div className="container-dashboar">
      <h2>Username: example@gmail.com</h2>
      <h3>Tokeni : 18750</h3>

      <div className="buttons-dashboard">
        <button type="button" onClick={() => navigate('/chat')}>Pokreni Balkan AI</button>
        <button type="button">Pretplati se</button>
        <button type="button">Promeni Lozinku</button>
      </div>
    </div>
  );
}

export default Dashboard;
