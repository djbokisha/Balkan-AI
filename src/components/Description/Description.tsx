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
              Naš AI chatbot će vam pomoći da brzo i efikasno pronađete
              informacije, što će vam uštedeti vreme i omogućiti da se
              fokusirate na svoje ciljeve. Mnogi naši korsnici koriste Balkan AI
              umesto Google pretraživača kada su u potrazi za informacijama.
            </p>

            <p>
              BALKAN AI chatbot je prvi sistem veštačke inteligencije koji
              koristi naš maternji jezik kako bi odgovorio na sva specifična
              pitanja. To je glavno objašnjenje toliko velike popularnosti među
              studentima i srednjoškolcima.
            </p>
          </div>
        </div>
      </div>
      <div id="right" className="right-desciption-side"></div>
    </div>
  );
});

export default Description;
