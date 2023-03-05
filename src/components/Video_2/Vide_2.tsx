import "./Video.css";
import video_2 from "../../assets/video2.mp4";
import { useNavigate } from "react-router-dom";

function Vide_2() {
  const navigate = useNavigate()

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={video_2} type="video/mp4" />
      </video>

      <div className="container-video"></div>
      <div className="left-video2-side">
        <div className="scrolling-area-video2">
          <div className="scrolling-element-inside">
            <h2>Zašto izabrati BALKAN AI?</h2>
            <p>
              Nudimo konkretna rešenja za vaše probleme, čineći vas boljim i
              uspešnijim. Završite svoje obaveze za svega nekoliko minuta.
            </p>
            <p>
              Korišćenjem našeg AI sistema ćete svoje obaveze na fakultetu ili
              poslu završavati i do 10 puta brže nego inače, te će vam ostajati
              više slobodnog vremena za aktivnosti koje vas opuštaju.
            </p>


            <hr />

            <h2>BALKAN AI:</h2>
            <p>
              BALKAN AI: Naš AI chatbot će vam pomoći da brzo i efikasno
              pronađete informacije, što će vam uštedeti vreme i omogućiti da se
              fokusirate na svoje ciljeve.
            </p>
            <p>
              BALKAN AI chatbot je obučen da odgovori na specifična pitanja, te
              da rešava specifične probleme naših korisnika. Zato je toliko
              popularan među studentima.
            </p>
          </div>

        </div>
        <button className="btn-video2 btn-hover" type="button" onClick={() => navigate('/chat')}>Isprobaj</button>
      </div>
    </div>
  );
}

export default Vide_2;
