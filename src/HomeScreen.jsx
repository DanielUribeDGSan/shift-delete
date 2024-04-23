import "./App.scss";
import "./styles/index.scss";

import heartImage from "./assets/images/icons/heart.svg";
import closeImage from "./assets/images/icons/close.svg";
import { CardForm } from "./components/CardForm";

function HomeScreen() {
  return (
    <main>
      <section className="delete__content">
        <div className="w-100 d-flex justify-content-end">
          <button className="close" type="button" aria-label="cerrar modal">
            <img className="img-fluid" src={closeImage} alt="corazón roto" />
          </button>
        </div>
        <h2>¡Oh no!</h2>
        <img className="img-fluid" src={heartImage} alt="corazón roto" />
        <div className="message">
          <h3>
            Estas a punto de eliminar tú cuenta de shift. Al eliminar tu cuenta
            recuerda que se perderá:
          </h3>
          <ul>
            <li>Tu información de tu cuenta</li>
            <li>Respuestas en cuestionarios</li>
            <li>Tus recomendados</li>
          </ul>
        </div>
        <CardForm />
      </section>
    </main>
  );
}

export default HomeScreen;
