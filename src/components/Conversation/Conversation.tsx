import React from "react";
import "./Conversation.css";

function Conversation() {
  return (
    <div className="conversation">
      <h1>BALKAN AI</h1>


      <div className="content">
      <p>Započnite konverzaciju:</p>

        <div className="input">
          <input type="email" placeholder="Vase pitanje/zahtev" />
          <button>Posalji</button>

        </div>
      </div>
    </div>
  );
}

export default Conversation;
