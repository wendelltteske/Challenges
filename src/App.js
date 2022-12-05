import "./App.css";

export default function App() {
  const showData = (result) => {
    for (let fillValue in result) {
      if (document.querySelector("#" + fillValue)) {
        document.querySelector("#" + fillValue).value = result[fillValue];
      }
    }
  };

  const checkarCEP = (evento) => {
    const cep = evento.target.value.replace(/[0-9]{5}-[\d]{3}/g, "");
    const search = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(search)
      .then((res) => res.json())
      .then((data) => {
        showData(data);
      });
  };

  return (
    <div className="container">
      <h3>Formulário | Endereço de Entrega</h3>
      <hr />
      <form>
        <div className="container-input">
          <label>Nome Completo</label>
          <input
            id="nome"
            type={"text"}
            placeholder={"Ex.: Wendell Thomas Teske"}
          />
        </div>
        <div className="container-input">
          <label>Email</label>
          <input
            id="email"
            type={"email"}
            placeholder={"Ex.: wendelltteske@gmail.com"}
          />
        </div>
        <div className="container-input">
          <label>Data de Entrega</label>
          <input id="data_entrega" type={"date"} />
        </div>
        <div className="container-input">
          <label>CEP</label>
          <input
            id="cep"
            onBlur={checkarCEP}
            type={"text"}
            placeholder={"_ _ _ _ _ - _ _"}
          />
        </div>
        <div className="container-input">
          <label>Estado</label>
          <input id="uf" type={"text"} disabled />
        </div>
        <div className="container-input">
          <label>Cidade</label>
          <input id="localidade" type={"text"} disabled />
        </div>
        <div className="container-input">
          <label>Bairro</label>
          <input id="bairro" type={"text"} disabled />
        </div>
        <div className="container-input">
          <label>N de Endereço</label>
          <input type={"number"} placeholder={"Ex.: 000"} />
        </div>
        <div className="container-input">
          <label>Complemento</label>
          <input
            id="complemento"
            type={"text"}
            placeholder={"Ex.: Posto de Saúde"}
          />
        </div>
      </form>
      <div className="container-buttons">
        <button>Limpar Campos</button>
        <button>Enviar</button>
      </div>
    </div>
  );
}
