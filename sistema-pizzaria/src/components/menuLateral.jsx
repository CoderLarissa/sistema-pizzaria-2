import { useState } from "react";
import "../css/menu.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function MenuLateral() {
  const navigateLogin = useNavigate()

  function sairAplicacao() {
    const sair = confirm("Deseja realmente sair da aplicação?")
    const telaLogin = (sair && navigateLogin("/"));
    
  }

  return (
    <aside
      className={"bg-dark text-white d-flex flex-column sidebar-expandida"}>
      <div className="text-center m-3 titulo-menu">
        Menu
      </div>

      <nav className="flex-grow-1 menu-body">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/clientesPage" className="nav-link text-white">
              Clientes
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/pizzasPage" className="nav-link text-white">
              Pizzas
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/pedidosPage" className="nav-link text-white">
              Pedidos
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-3 secao-sair">
        <button className="btn btn-outline-light w-100" onClick={sairAplicacao}>
          Sair
        </button>
      </div>
    </aside>
  );
}

export default MenuLateral;