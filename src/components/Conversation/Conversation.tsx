import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Conversation.css";

function Conversation() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

function buttonHandler() {

    const input = inputRef.current?.value;

    console.log(input);

    navigate("/chat");
  }
  return (
    <div className="conversation">
      <h1>BALKAN AI</h1>

      <div className="content">
        <p>Započnite konverzaciju:</p>
          <div className="input">
            <input
              type="email"
              placeholder="Vase pitanje/zahtev"
              ref={inputRef}
            />
            <button  type="button" onClick={() => buttonHandler()} className="btn-conversation">
              Posalji
            </button>
          </div>
      </div>
    </div>
  );
}

export default Conversation;
