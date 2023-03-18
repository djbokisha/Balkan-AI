import { useNavigate } from "react-router-dom";
import "./Info_2.css";

function Info_2() {
  const navigate = useNavigate();

  return (
    <div className="container-info2">
      <div className="right-info2-side"></div>
      <div className="left-info2-side">
        <div className="text-area-info2">
          <div className="scrolling-area-r">
            <div className="scrolling-element-inside-r">
              <h2>Kako vam BALKAN AI može pomoći ako ste zaposleni?</h2>
              <p>
                BALKAN AI chatbot pomaže našim korisnicima da brzo i efikasno
                pronađu informacije, što dovodi do uštedete vremena. Mnogi
                zaposleni koriste baš Balkan AI kako bi poboljšali svoju
                efikasnost u jedinici vremena.
              </p>
              <p>
                Naš AI sistem pruža instantan pristup informacijama koristeći
                vaš maternji jezik, što je posebno korisno za zaposlene u
                industrijama gde je vremenska efikasnost važan i sastavni deo
                samog posla. Takođe, naša veštačka inteligencija radi 24/7.
                Ukoliko ste pretplaćeni na naš sistem, za vas ne postoji
                čekanje. Sa nama zaboravite na stres uzrokovan 'deadline'
                rokovima.
              </p>
            </div>
          </div>
          <button
            className="btn-info btn-hover"
            onClick={() => navigate("/chat")}
            type="button"
          >
            ISPROBAJ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info_2;
