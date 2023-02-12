import React from "react";
import "./Info_2.css";

function Info_2() {
  return (
    <div className="container-info2">
      <div className="right-info2-side"></div>
      <div className="left-info2-side">
        <div className="text-area-info2">
          <h2>Kako vam BALKAN AI može pomoći ako ste zaposleni?</h2>

          <p>
            BALKAN AI chatbot pomaže našim korisnicima da brzo i efikasno
            pronađu informacije, što dovodi do uštedete vremena
          </p>

          <p>
            Naš AI sistem pruža instantan pristup informacijama, što je posebno
            korisno za zaposlene u industrijama gde je vremenska efikasnost
            važan i sastavni deo samog posla. Takođe, naša veštačka
            inteligencija radi 24/7, stoga vam je uvek na raspolaganju.
          </p>

          <button className="btn-info btn-hover">ISPROBAJ</button>
        </div>
      </div>
    </div>
  );
}

export default Info_2;
