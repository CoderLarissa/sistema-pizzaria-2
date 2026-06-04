import { useState } from "react";
import logotipoPizzaria from "../assets/logotipoPizzaria.png"
import "../css/paginaLogin.css";
import Footer from "../components/footer"
function LoginPage() {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function validarLogin(e) {
    e.preventDefault();
    if (usuario === "admin" && senha === "admin") {
      alert("Seja bem vindo!")
    } else {
      alert("Usuário ou senha incorretos!")
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100 login-page">

      <main className="flex-grow-1 d-flex justify-content-center align-items-center">

        <form className="login-container" onSubmit={validarLogin}>

          <div className="text-center">
            <img src={logotipoPizzaria} alt="logotipo da pizzaria" style={{ width: "250px" }} />
          </div>

          <div className="mb-2 row-gap-2 d-flex flex-column">
            <label className="form-label label-campo">Usuário</label>

            <input type="text" className="form-control" placeholder="Digite seu usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
          </div>

          <div className="mb-3 row-gap-2 d-flex flex-column">
            <label className="form-label label-campo">Senha</label>

            <input type="password" className="form-control" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </div>

          <button className="btn btn-primary w-100 btn-entrar mt-2" type="submit">
            Entrar
          </button>

          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">
              Esqueceu a senha?
            </a>
          </div>

        </form>

      </main>

      <Footer />

    </div>
  );
}

export default LoginPage;