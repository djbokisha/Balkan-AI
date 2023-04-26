import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Conversation.css";

function Conversation() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    setIsLoggedIn(user ? true : false);
  }, [getItem]);

  function buttonHandler() {
    if (isLoggedIn) {
      navigate("/chat ", { state: { data: inputValue } });
    } else if (!isLoggedIn) {
      navigate("/login", { state: { data: inputValue } });
    }
  }

  const onChangeHandler = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="conversation">
      <h1>BALKAN AI</h1>
      <div className="content">
        <p>Započnite konverzaciju:</p>
        <div className="input">
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={inputValue}
          />
          <button
            type="button"
            onClick={() => buttonHandler()}
            className="btn-conversation"
          >
            Pošalji
          </button>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
