import React, { FormEvent, useRef, useState } from "react";
import "./Contact.css";

function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const surnmeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const name = nameRef.current!.value;
    const surname = surnmeRef.current!.value;
    const email = emailRef.current!.value;
    const message = messageRef.current!.value;


    console.log(name, surname, email, message);
    formRef.current?.reset()
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
          <form onSubmit={(e: FormEvent) => submitHandler(e)} ref={formRef}>
            <h1>KONTAKT</h1>
            <div className="name-surname">
              <div className="name">
                <label htmlFor="">Ime</label>
                <input type="text" placeholder="" name="name" ref={nameRef} />
              </div>

              <div className="surname">
                <label htmlFor="">Prezime</label>
                <input
                  type="text"
                  placeholder=""
                  name="surname"
                  ref={surnmeRef}
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="" name="email" ref={emailRef} />
            </div>
            <p>Poruka</p>

            <div className="textarea">
              <textarea
                name="textarea"
                id="text"
                cols={40}
                rows={10}
                ref={messageRef}
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
