import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h3>Formulário | Endereço de Entrega</h3>
      <hr />
      <form>
        <div className="container-input">
          <label>Nome Completo</label>
          <input type={"text"} placeholder={"Ex.: Wendell Thomas Teske"} />
        </div>
        <div className="container-input">
          <label>Email</label>
          <input type={"email"} placeholder={"Ex.: wendelltteske@gmail.com"} />
        </div>
        <div className="container-input">
          <label>Data de Entrega</label>
          <input type={"date"} />
        </div>
        <div className="container-input">
          <label>CEP</label>
          <input type={"text"} placeholder={"_ _ _ _ _ - _ _"} />
        </div>
        <div className="container-input">
          <label>Estado</label>
          <input type={"text"} disabled />
        </div>
        <div className="container-input">
          <label>Cidade</label>
          <input type={"text"} disabled />
        </div>
        <div className="container-input">
          <label>Bairro</label>
          <input type={"text"} disabled />
        </div>
        <div className="container-input">
          <label>N de Endereço</label>
          <input type={"number"} placeholder={"Ex.: 000"} />
        </div>
        <div className="container-input">
          <label>Complemento</label>
          <input type={"text"} placeholder={"Ex.: Posto de Saúde"} />
        </div>
      </form>
      <div className="container-buttons">
        <button>Limpar Campos</button>
        <button>Enviar</button>
      </div>
    </div>
  );
}
