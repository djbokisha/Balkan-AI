import React from "react";
import { useNavigate } from "react-router-dom";
import "./Conversation.css";

function Conversation() {
  const navigate = useNavigate()
  return (
    <div className="conversation">
      <h1>BALKAN AI</h1>


      <div className="content">
        <p>Započnite konverzaciju:</p>

        <div className="input">
          <input type="email" placeholder="Vase pitanje/zahtev" />
          <button type="button" onClick={() => navigate('/chat')}>Posalji</button>

        </div>
      </div>
    </div>
  );
}

export default Conversation;
