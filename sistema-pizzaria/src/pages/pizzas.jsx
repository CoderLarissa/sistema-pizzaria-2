import { useState } from "react";

import MenuLateral from "../components/MenuLateral";
import PizzaList from "../components/PizzaList";
import PizzaModal from "../components/PizzaModal";

import usePizzas from "../hooks/usePizzas";

function Pizzas() {
  const {
    pizzas,
    adicionarPizza,
    editarPizza,
    excluirPizza,
  } = usePizzas();

  const [show, setShow] =
    useState(false);

  const [pizzaSelecionada,
    setPizzaSelecionada] =
    useState(null);

  const [busca,
    setBusca] =
    useState("");

  const abrirCadastro = () => {
    setPizzaSelecionada(null);
    setShow(true);
  };

  const abrirEdicao = (pizza) => {
    setPizzaSelecionada(pizza);
    setShow(true);
  };

  const salvarPizza = (pizza) => {
    if (pizza.id) {
      editarPizza(pizza);
    } else {
      adicionarPizza(pizza);
    }

    setShow(false);
  };

  const pizzasFiltradas =
    pizzas.filter((pizza) =>
      pizza.nome
        .toLowerCase()
        .includes(
          busca.toLowerCase()
        )
    );

  const pizzasExibidas =
    pizzasFiltradas.slice(0, 7);

  return (
    <div className="container-fluid">

      <div className="row">

        <div className="col-auto p-0">
          <MenuLateral />
        </div>

        <div className="col p-4">

          <h1 className="mb-4">
            Pizzas
          </h1>

          <div className="d-flex gap-3 mb-4">

            <input
              type="text"
              className="form-control"
              placeholder="Buscar sabor"
              value={busca}
              onChange={(e) =>
                setBusca(
                  e.target.value
                )
              }
            />

            <button
              className="btn btn-success"
              onClick={
                abrirCadastro
              }
            >
              + Adicionar Pizza
            </button>

          </div>

          {pizzas.length === 0 ? (
            <div className="text-center">

              <h4 className="text-muted">
                Nenhuma pizza cadastrada
              </h4>

              <button
                className="btn btn-success mt-3"
                onClick={
                  abrirCadastro
                }
              >
                Cadastrar Pizza
              </button>

            </div>
          ) : (
            <>
              <PizzaList
                pizzas={
                  pizzasExibidas
                }
                onEdit={
                  abrirEdicao
                }
                onDelete={
                  excluirPizza
                }
              />

              {pizzasFiltradas.length >
                7 && (
                <p className="text-muted mt-3">
                  Exibindo apenas
                  os 7 primeiros
                  registros.
                </p>
              )}
            </>
          )}

          <PizzaModal
            show={show}
            handleClose={() =>
              setShow(false)
            }
            handleSave={
              salvarPizza
            }
            pizzaSelecionada={
              pizzaSelecionada
            }
          />

        </div>

      </div>

      <footer className="text-center p-3 bg-light">
        © 2026 - Fatia Mágica Pizzarias
      </footer>

    </div>
  );
}

export default Pizzas;