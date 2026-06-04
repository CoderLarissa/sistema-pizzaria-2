import { useState } from "react";
import "../css/menu.css"

function MenuLateral() {

  return (
    <aside
      className={"bg-dark text-white d-flex flex-column sidebar-expandida"}>
      <div className="text-center m-3 titulo-menu">
        Menu
      </div>

      <nav className="flex-grow-1 menu-body">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Clientes
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Pizzas
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Pedidos
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-3 secao-sair">
        <button className="btn btn-outline-light w-100">
          Sair
        </button>
      </div>
    </aside>
  );
}

export default MenuLateral;