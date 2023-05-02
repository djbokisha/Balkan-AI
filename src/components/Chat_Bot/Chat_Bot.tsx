import Axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Chat_Bot.css";
import pointer from "../../assets/paper-plane-svgrepo-com.svg";
import logo from "../../assets/AiLogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../hooks/useAuth";

interface User {
  userId: string;
}

function Chat_Bot(props: any) {
  const location = useLocation();
  const data = location.state?.data;
  const navigate = useNavigate();
  const input = useRef<HTMLInputElement>(null);
  const { getItem } = useLocalStorage();
  const [user, setUser] = useState([]);
  const { getUser } = useAuth();

  const [appData, setAppData] = useState<User[] | []>([]);
  const [filterdata, setfilterData] = useState(appData);

  // async function fetchUserData(id: string) {
  //   const { data } = await axiosPrivate.get(`/users/${id}`);
  //   const { user } = data;
  //   setUser(user);
  //   console.log(user)
  //   console.log(id);
  // }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    console.log("USER", user);
    if (!user) {
      navigate("/login");
    } else {
      setUser(user);
      if (data) {
        // @ts-ignore
        const id = user.userId;
        console.log(user);
        console.log(id);
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

              return <></>;
            });
        }
      }
    }
  }, []);
  //@ts-ignore
  const userId = user.userId;
  console.log(userId);
  //@ts-ignore
  const email = user.email;
  console.log(email);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalTokens, setTotalTokens] = useState<any>("");

  const handleClick = async () => {
    const question = input.current?.value;
    // @ts-ignore
    const id = user.userId;
    // @ts-ignore
    const email = user.email;
    console.log(email);
    setLoading(true);
    console.log(user);
    // @ts-ignore
    const userToken = user.tokens;
    console.log(userToken);

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
          console.log(err);
          if (err) {
            toast(err, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    }
    function removeAmountTokens() {
      Axios.patch(`${import.meta.env.VITE_URL}/tokens/substractTokens`, {
        email: email,
        tokenAmout: totalTokens,
        id: userId,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
    removeAmountTokens();
  };

  const [updated, setUpdated] = useState("");

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setUpdated(input.current?.value!);
      handleClick();
    }
  };

  return (
    <main className="main">
      <div className="row">
        <div className="column">
          <div className="card">
            <h3>Zasto bas Balkan AI?</h3>
            <p>
              Balkan AI je prvi domaci sistem vestacke inteligencijo koji je
              treniran za interakciju na nasem jeziku.Izuzetno pogodan za sve
              skolarce, studente i zaposlene. Resi svoje obaveze i do 10 puta
              brze. Pocnite konacno da uzivate u slobodnom vremenu.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Balkan AI vs Chat GPT?</h3>
            <p>
              Ovo je glavno pitanje koje bi svaki korisnik postavio. Balkan AI
              je treniran sistem i prilagodjen nasem trzistu zbog specificnosti
              jezika i podnevija. Nas AI chatbot kosta SVEGA 3.5€ mesecno, a
              dobijate sve benefite koje nudi Chat GPT Plus. Negova cene je 20$
              mesecno.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Benefiti Balkan AI?</h3>
            <p> - Pristup sistomu 24/7</p>
            <p> - Pristupacna cena - </p>
            <p> Sistem prevoda za sve jezike sveta </p>
            <p> - Resavanje zadataka sistemom korak po korak </p>
            <p> - Uvek zagarantovano mesto ne server </p>
            <p> - Pomoc prilikom ucenja </p>
            <p> - Konkretni odgovori na sva vasa pitanja</p>
          </div>
        </div>
      </div>

      <div className="chat-bot-input">
        {/* <textarea
          placeholder="Write your prompt.."
          className="textarea"
        ></textarea>
        <button
          onClick={handleClick}
          disabled={loading}
          className="btn-chatbot"
        >
          {loading ? "Generating..." : "Generate"}
        </button> */}
        <p>{totalTokens}</p>
        <pre className="result">{result}</pre>

        <div className="chat-box">
          <img src={logo} alt="" className="chat-logo" />

          <div className="input-chatbot">
            <input
              className="chat"
              type="text"
              placeholder="Send a message..."
              ref={input}
              onKeyDown={handleKeyDown}
            />
            <div className="pointer">
              <button className="chat-buttton">
                <img
                  src={pointer}
                  alt=""
                  width={16}
                  height={16}
                  onClick={handleClick}
                />
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </main>
  );
}

export default Chat_Bot;
