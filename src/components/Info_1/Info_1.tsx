import React from "react";
import { useNavigate } from "react-router-dom";
import "./Info_1.css";

function Info_1() {
  const navigate = useNavigate()
  return (
    <div className="container-info1">
      <div className="left-info1-side">
        <div className="text-area-info1">
          <h2>Kako BALKAN AI može pomoći studentima?</h2>

          <p>
            BALKAN AI može pomoći studentima da se pripreme za ispite ili
            kolokvijume generišući pitanja i odgovore na teme koje su se
            obrađivale u toku predmeta.
          </p>

          <p>
            Naš AI može pomoći studentima u rešavanju problema iz matematike ili
            drugih naučnih predmeta generišući rešenja sistemom korak po korak.
            Mogućnosti su beskonačne i zavise samo od vas samih.
          </p>

          <button className="btn-info btn-hover" onClick={() => navigate('/chat')} type="button">ISPROBAJ</button>
        </div>
      </div>
      <div className="right-info1-side"></div>
    </div>
  );
}

export default Info_1;
