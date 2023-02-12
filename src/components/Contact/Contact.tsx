import React, { FormEvent } from "react";
import "./Contact.css";

function Contact() {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

  };
  return (
    <div className="container-contact">
      <div className="left-contact-side">
        <div className="text-area-contact">
          <h1>BALKAN AI</h1>

          <p>PIB: 112371254 Delatnost: 4791 Matični broj: 66058336</p>

          <p>Tel: +381638765730 </p>
          <p>Email: support@balkanai.com</p>

          <p>Adresa: Zemunska 22 / 1. Sprat Interfon: 8 Novi Beograd 11070</p>
        </div>
      </div>
      <div className="right-contact-side">
        <div className="container-form">
          <form onSubmit={(e: React.SyntheticEvent) => submitHandler} action="">
            <h1>KONTAKT</h1>
            <div className="name-surname">
              <div className="name">
                <label htmlFor="">Ime</label>
                <input type="text" placeholder="" name="name" />
              </div>

              <div className="surname">
                <label htmlFor="">Prezime</label>
                <input type="text" placeholder="" name="surname" />
              </div>
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="" name="email" />
            </div>
            <p>Poruka</p>

            <div className="textarea">
              <textarea
                name="textarea"
                id="text"
                cols={40}
                rows={10}
              ></textarea>
              <button type="submit" className="btn-send">
                Posalji
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
