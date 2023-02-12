import React from "react";
import "./Conversation.css";

function Conversation() {
  return (
    <div className="conversation">
      <h1>BALKAN AI</h1>

      <div className="content">
        <div className="input">
          <p>Započnite konverzaciju:</p>
          <input type="email" placeholder="Vase pitanje/zahtev" />
        </div>
        <button>Posalji</button>
      </div>
    </div>
  );
}

export default Conversation;
