import { useState } from "react";
import "../css/global.css"
import MenuLateral from "../components/MenuLateral";
import PizzaList from "../components/PizzaList";
import PizzaModal from "../components/PizzaModal";
import usePizzas from "../hooks/usePizzas";

function PizzasPage() {
  const { pizzas, adicionarPizza, editarPizza, excluirPizza } = usePizzas();

  const [show, setShow] =
    useState(false);

  const [pizzaSelecionada, setPizzaSelecionada] = useState(null);

  const [busca, setBusca] = useState("");

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
    pizzas.filter((pizza) => pizza.nome.toLowerCase().includes(busca.toLowerCase()));

  const pizzasExibidas =
    pizzasFiltradas.slice(0, 7);

  return (
    <div className="container-fluid">

      <div className="app-layout">

        <div className="col-auto p-0">
          <MenuLateral />
        </div>

        <main className="main-content p-4">

          <h1 className="mb-4 text-danger">
            Pizzas
          </h1>

          <div className="d-flex flex-column flex-md-row gap-3 justify-content-between mb-4">

            <input type="text" className="form-control" placeholder="Buscar sabor" value={busca}
              onChange={(e) => setBusca(e.target.value)} />

            <button className="btn btn-primary" onClick={abrirCadastro}>
              + Adicionar Pizza
            </button>

          </div>
        
        <div className="card shadow-sm">
          <div className="card-body">

          {pizzas.length === 0 ? (
            <div className="text-center py-5">

              <h5 className="text-muted">
                Nenhuma pizza cadastrada
              </h5>

              <button className="btn btn-primary mt-3" onClick={abrirCadastro}>
                Cadastrar Pizza
              </button>
            </div>
          ) : (
            <div>
              <PizzaList pizzas={pizzasExibidas} onEdit={abrirEdicao} onDelete={excluirPizza} />

              {pizzasFiltradas.length > 7 && (
                <p className="text-muted mt-3">
                  Exibindo apenas os 7 primeiros registros.
                </p>
              )}
            </div>
          )}

          <PizzaModal show={show} handleClose={() => 
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

        </main>

      </div>
    </div>
      
  );
}

export default PizzasPage;