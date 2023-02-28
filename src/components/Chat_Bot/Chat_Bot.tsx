import { useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import "./Chat_Bot.css";

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

  const handleClick = async () => {
    console.log(input.current?.value);
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input.current?.value,
        temperature: 0.5,
        max_tokens: 150,
      });
      setResult(response.data.choices[0].text!);
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

        <button onClick={handleClick} disabled={loading} className="btn-chatbot">
          {loading ? "Generating..." : "Generate"}
        </button>

        <pre className="result">{result}</pre>
      </div>
    </main>
  );
}

export default Chat_Bot;
