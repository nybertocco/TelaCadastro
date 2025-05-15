import "./app.css";
import { useState } from "react";

export default function Cadastro() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="home">
      <h2>Cadastre-se já!</h2>
      <button className="register" onClick={() => setMostrarModal(true)}>
        Cadastrar
      </button>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="fechar" onClick={() => setMostrarModal(false)}>
              X
            </button>
            <h3>Cadastre a sua conta!</h3>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Senha" required />
              <button className="submit" type="submit">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
