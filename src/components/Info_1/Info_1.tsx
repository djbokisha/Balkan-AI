import React from "react";
import { useNavigate } from "react-router-dom";
import "./Info_1.css";

function Info_1() {
  const navigate = useNavigate();
  return (
    <div className="container-info1">
      <div className="left-info1-side">
        <div className="text-area-info1">
          <div className="scrolling-area">
            <div className="scrolling-element-inside">
              <h2>Kako vam BALKAN AI može pomoći prilikom učenja?</h2>

              <p>
                BALKAN AI može pomoći studentima da se pripreme za ispite ili
                kolokvijume. Takođe, uz naš AI sistem završite svoje seminarske
                ili esejske radove za svega sat vremena. Mnogi studenti koriste
                naš AI sistem kako bi uslužno pisali seminarske i završne radove
                ostalim studentima
              </p>

              <p>
                Naš AI sistem može pomoći studentima u rešavanju problema iz
                matematike ili drugih naučnih predmeta generišući rešenja
                sistemom korak po korak. Takođe, implementiran je sjajan sistem
                prevođenja tekstova sa preko 100 različitih jezika sveta.
                Mogućnosti su beskonačne i zavise samo od vas i vaše mašte.
                <span className="span">
                  Stoga ne oklevajte i isprobajte naš sistem besplatno.
                </span>
              </p>
            </div>
          </div>

          <button
            className="btn-info btn-hover"
            onClick={() => navigate("/login")}
            type="button"
          >
            ISPROBAJ
          </button>
        </div>
      </div>
      <div className="right-info1-side"></div>
    </div>
  );
}

export default Info_1;
