import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import uplatnica from "../../assets/uplatnica.png";
import uplatnica1 from "../../assets/uplatnica1.png";
import pplogo from "../../assets/pplogo.png";
import btn_bynow from "../../assets/btn_buynow.gif";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { User } from "../../interfaces/user.interface";
import Footer from "../Footer/Footer";

function Dashboard() {
  const { logout } = useAuth();
  const { getUser } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const Logout = () => {
    logout();

    navigate("/login");
  };
  useEffect(() => {
    fetchUserData(getUser()?.userId!);
  }, []);
  async function fetchUserData(id: string) {
    const { data } = await Axios.get(`${import.meta.env.VITE_URL}/users/${id}`);
    const { user } = data;
    setUser(user);
  }

  const navigate = useNavigate();
  return (
    <>
      <div className="container-dashboar">
        <div className="dashbord-info">
          <h2>Username: {user?.email}</h2>
          <h2>Tokeni : {user?.tokens!}</h2>
        </div>

        <div className="buttons-dashboard">
          <button type="button" onClick={() => navigate("/chat")}>
            Pokreni Balkan AI
          </button>
          <button type="button" onClick={() => navigate("/paypal")}>
            Pretplati se
          </button>
          <button type="button" onClick={() => navigate("/changepassword")}>
            Promeni Lozinku
          </button>
          <button type="button" onClick={() => Logout()}>
            IZLOGUJ SE
          </button>
        </div>
        <div className="balkanai-info">
          <h2>Balkan AI</h2>
          <p>
            Svaki novi registrovani korisnik Balkan AI dobija 500 tokena potpuno
            besplatno kako bi mogao da isproba naš Chatbot.
            <span className="span">1 token predstavlja 1 reč.</span>
            Nakon potrošenih 500 tokena, korisnik se može pretplatiti na naš
            servis za svega <span className="span"> 400 dinara ili 4€.</span>
          </p>
          <br />
          <p>
            Pretplata traje 30 dana od momenta kada uplatite novac. Pretplata
            košta 400 dinara ili 4€ zavisno od načina plaćanja. Mesečna
            pretplata se mora obnavljati manuelno - ne postoji opcija automatske
            obnove ili produžetka.
          </p>
          <p>
            Pretplatom dobijate 20.000 tokena dostupnih 24/7 u narednih 30 dana.
            Jedan tokena predstavlja jednu reč.
          </p>
          <p>
            U taj broj (20.000) ulazi vaše pitanje + odgovor koji vam Chatbot
            ispiše. Ukoliko pre isteka roka od 30 dana potrošite svih 20.000
            tokena možete se pretplatiti ponovo. Ukoliko ne potrošite svih
            20.000 tokena u roku od 30 dana vaši tokeni se brišu, dakle, nisu
            prenosivi iz meseca u mesec.
          </p>
          <p>Za sva dodatna pitanja stojimo Vam na raspolaganju.</p>
        </div>
        <div className="balkanai-info">
          <h2>PRETPLATI SE</h2>
          <p>Kako se pretplatiti? Postoje dva načina:</p>
          <p>
            1. Uplatom preko Nnetbanking-a, Mbanking-a & fizičkom uplatom iz
            banke ili pošte <br /> 2. Putem PayPal-a
          </p>
          <p>
            Korisnicima iz Srbije se preporučuje prvi način, dok se korisnicima
            iz Hrvatske, Crne Gore, Makedonije i Bosne preporučuje drugi način.
          </p>
          <p>
            Prilikom pretplate putem PayPal-a u opis transakcije navesti EMAIL
            sa kojim se logujete na Balkan AI kako bismo mogli da identifikujemo
            uplatu te Vam dodelimo tokene
          </p>
        </div>
        <div className="images-dashboard">
          <div>
            {" "}
            <img
              className="uplatnica"
              src={uplatnica1}
              width="65%"
              alt="uplatnica"
            />
          </div>

          <div className="pp">
            <img src={pplogo} alt="" />
            <button type="button" onClick={() => navigate("/paypal")}>
              <img src={btn_bynow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
