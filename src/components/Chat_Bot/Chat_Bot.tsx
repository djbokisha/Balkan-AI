import { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./Chat_Bot.css";
import Axios from "axios";
import { number, ZodNumber } from "zod";
import { useUser } from "../../hooks/useUser";
import { useLocalStorage } from "../../hooks/useLocalStorage";
interface User {
  userId: string;
}

function Chat_Bot() {
  const input = useRef<HTMLTextAreaElement | null>(null);
  const { getItem } = useLocalStorage();

  const [user, setUser] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user !== null) {
      setUser(user);
    }
  }, []);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalTokens, setTotalTokens] = useState("");

  const handleClick = async () => {
    console.log(input.current?.value);
    const question = input.current?.value;
    // @ts-ignore
    const id = user.userId;
    console.log("UserID", id);
    setLoading(true);

    {
      Axios.post(`${import.meta.env.VITE_URL}/open-ai/chat`, {
        query: question,
        userId: id,
      })
        .then((res) => {
          console.log(res);
          setResult(res.data.choices[0].text!);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          console.error();
          setLoading(false);
        });
    }
  };

  return (
    <main className="main">
      <div className="chat-bot-input">
        <textarea
          // value={input.current}
          //   onChange={(e) => (input.current = e.target.value)}
          placeholder="Write your prompt.."
          className="textarea"
          ref={input}
        ></textarea>

        <button
          onClick={handleClick}
          disabled={loading}
          className="btn-chatbot"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        <pre className="result">{result}</pre>
        <p>{totalTokens}</p>
      </div>
    </main>
  );
}

export default Chat_Bot;
