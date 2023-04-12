import Axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Chat_Bot.css";

interface User {
  userId: string;
}

function Chat_Bot(props: any) {
  const location = useLocation();
  const data = location.state?.data;
  const navigate = useNavigate();
  const input = useRef<HTMLTextAreaElement>(null);
  const { getItem } = useLocalStorage();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (!user) {
      navigate("/login");
    } else {
      setUser(user);
      if (data) {
        // @ts-ignore
        const id = user.userId;
        setLoading(true);
        {
          Axios.post(`${import.meta.env.VITE_URL}/open-ai/chat`, {
            query: data,
            userId: id,
          })
            .then((res) => {
              setResult(res.data.choices[0].text!);
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              //  ovde treba toster u cath.error
            });
        }
      }
    }
  }, []);

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalTokens, setTotalTokens] = useState("");

  const handleClick = async () => {
    const question = input.current?.value;
    // @ts-ignore
    const id = user.userId;
    // @ts-ignore
    const email = user.email;
    setLoading(true);

    {
      Axios.post(`${import.meta.env.VITE_URL}/open-ai/chat`, {
        query: question,
        userId: id,
      })
        .then((res) => {
          setResult(res.data.choices[0].text!);
          setLoading(false);
          console.log(res);
          console.log(res.data.usage.total_tokens);
          const total_tokens = res.data.usage.total_tokens;

          setTotalTokens(total_tokens);
        })
        .catch((err) => {
          setLoading(false);
          //  ovde treba toster u cath.error
        });
    }

    {
      Axios.patch(`${import.meta.env.VITE_URL}/tokens/removeTokens`, null, {
        params: { email },
      })
        .then((res) => {
          console.log(res);

          // const updatedUsers = ((u: any) =>
          //   u.id === user.id ? { ...user, tokens: user.tokens! - totalTokens } : u
          // );
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <main className="main">
      <div className="chat-bot-input">
        <textarea
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
