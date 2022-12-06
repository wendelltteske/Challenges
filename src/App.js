import "./App.css";
import { FaRegPaperPlane, FaEraser } from "react-icons/fa";

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

  const clearData = () => {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("data_entrega").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("localidade").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("num_endereco").value = "";
    document.getElementById("complemento").value = "";
  };

  return (
    <div className="container">
      <h1>Formulário Endereço de Entrega</h1>
      <form>
        <div className="line-1">
          <div className="input-container">
            <label>Nome Completo</label>
            <input id="nome" type={"text"} placeholder={"Ex.: Fernanda Dias"} />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              id="email"
              type={"text"}
              placeholder={"Ex.: fed@gmail.com"}
            />
          </div>
        </div>
        <div className="line-2">
          <div className="input-container">
            <label>Data de Entrega</label>
            <input id="data_entrega" type={"date"} />
          </div>
          <div className="input-container">
            <label>CEP</label>
            <input
              id="cep"
              type={"text"}
              placeholder={"XXXXX-XXX"}
              onBlur={checkarCEP}
            />
          </div>
        </div>
        <div className="line-3">
          <div className="input-container">
            <label>Estado</label>
            <input id="uf" type={"text"} disabled />
          </div>
          <div className="input-container">
            <label>Cidade</label>
            <input id="localidade" type={"text"} disabled />
          </div>
          <div className="input-container">
            <label>Bairro</label>
            <input id="bairro" type={"text"} disabled />
          </div>
        </div>
        <div className="line-4">
          <div className="input-container" style={{ width: "30%" }}>
            <label>Nº de Endereço</label>
            <input id="num_endereco" type={"text"} placeholder={"Ex.: 000"} />
          </div>
          <div className="input-container">
            <label>Complemento</label>
            <input
              id="complemento"
              type={"text"}
              placeholder={"Ex.: Posto de Saúde"}
            />
          </div>
        </div>
      </form>
      <div className="button-container">
        <button className="previous" onClick={clearData}>
          <FaEraser style={{ marginRight: "10px" }} />
          Limpar Campos
        </button>
        <button
          className="send"
          onClick={() => {
            alert("Formulário enviado com sucesso!");
          }}
        >
          <FaRegPaperPlane style={{ marginRight: "10px" }} />
          Enviar
        </button>
      </div>
    </div>
  );
}
