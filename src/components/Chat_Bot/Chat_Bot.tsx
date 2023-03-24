import { useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import "./Chat_Bot.css";
import { number } from "zod";
import Axios from "axios";

function Chat_Bot() {
  const input = useRef<HTMLTextAreaElement | null>(null);

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_REACT_APP_OPENAI_API_KEY!,
  });
  console.log(import.meta.env.VITE_REACT_APP_OPENAI_API_KEY);

  const openai = new OpenAIApi(configuration);

  // const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalTokens, setTotalTokens] = useState("");

  const handleClick = async () => {
    console.log(input.current?.value);
    const question = input.current?.value;

    {
      Axios.post("http://localhost:5000/open-ai/checkModeration", null, {
        params: {
          question: question,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          console.error();
        });
    }

    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input.current?.value,
        temperature: 0.5,
        max_tokens: 250,
      });
      setResult(response.data.choices[0].text!);
      // setTotalTokens(response.data.usage?.total_tokens!)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
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
