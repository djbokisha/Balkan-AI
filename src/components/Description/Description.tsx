import React from "react";
import "./Decription.css";
import { forwardRef } from "react";

const Description = forwardRef((props, ref: any) => {
  return (
    <div className="container-desciption" id="description" ref={ref}>
      <div className="left-desciption-side">
        <div className="scrolling-area">
          <div className="scrolling-element-inside">
            <h2>BALKAN AI:</h2>
            <p>
              BALKAN AI: Naš AI chatbot će vam pomoći da brzo i efikasno
              pronađete informacije, što će vam uštedeti vreme i omogućiti da se
              fokusirate na svoje ciljeve.
            </p>
            <p>
              BALKAN AI chatbot je obučen da odgovori na specifična pitanja, te
              da rešava specifične probleme naših korisnika. Zato je toliko
              popularan među studentima.
            </p>

            <hr />

            <h2>BALKAN AI:</h2>
            <p>
              BALKAN AI: Naš AI chatbot će vam pomoći da brzo i efikasno
              pronađete informacije, što će vam uštedeti vreme i omogućiti da se
              fokusirate na svoje ciljeve.
            </p>
            <p>
              BALKAN AI chatbot je obučen da odgovori na specifična pitanja, te
              da rešava specifične probleme naših korisnika. Zato je toliko
              popularan među studentima.
            </p>
          </div>
        </div>
      </div>
      <div id="right" className="right-desciption-side"></div>
    </div>
  );
});

export default Description;
