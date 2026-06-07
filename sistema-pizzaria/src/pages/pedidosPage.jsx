import { useState } from "react";

import MenuLateral from "../components/MenuLateral";
import ClienteModal from "../components/ClienteModal";
import useClientes from "../hooks/useClientes";
import usePedidos from "../hooks/usePedidos";
import { listaPizzasTeste } from "../data/pizzas";
import "../css/global.css"

export default function PedidosPage() {
  const {clientes, adicionarCliente} = useClientes();

  const {itensPedido, adicionarItem, atualizarItem, totalPedido} = usePedidos();

  const [pesquisa, setPesquisa] = useState("");

  const [clienteAtual, setClienteAtual] = useState(null);

  const [mostrarModal, setMostrarModal] = useState(false);

  const procurarCliente = () => {
    const cliente = clientes.find((c) => c.nome.toLowerCase().includes(pesquisa.toLowerCase()));

    if (cliente) {
      setClienteAtual(cliente);
    }
  };

  const salvarCliente = (dados) => {
    adicionarCliente(dados);

    setClienteAtual({
      ...dados,
      id: Date.now(),
    });

    setMostrarModal(false);
  };

  const selecionarPizza = (linhaId, pizzaId) => {
    const pizza =
      listaPizzasTeste.find((p) => p.id === Number(pizzaId));

    atualizarItem(linhaId, "pizzaId", pizza.id);

    atualizarItem(linhaId, "descricao", pizza.descricao);

    atualizarItem(linhaId, "valor", pizza.preco);

    atualizarItem(linhaId, "total", 0);
  };

  const alterarQuantidade = (item, quantidade) => {
    atualizarItem(item.id,"quantidade", quantidade);

    atualizarItem(item.id,"total", quantidade * item.valor);
  };

  function salvarPedido() {
    const mensagemAlert = (confirm("Deseja salvar esse pedido?"));
    if (mensagemAlert) {
      alert("Pedido salvo com sucesso!");
    }
  }

  function cancelarPedido() {
    const cancelarPedidoModal = confirm("Deseja realmente cancelar esse pedido?");
    if (cancelarPedidoModal) {
      alert("Pedido cancelado!")
      window.location.reload();

    }
  }

  return (
    <div className="container-fluid">

      <div className="app-layout">

        <div className="col-auto p-0">
          <MenuLateral />
        </div>

        <main className="main-content p-4">

          <h1 className="text-danger mb-4">
            Pedidos
          </h1>

          <div className="d-flex flex-column flex-md-row gap-3 justify-content-between mb-4">

            <input className="form-control" placeholder="Buscar cliente" value={pesquisa} onChange={(e) =>
                setPesquisa(e.target.value)} />

            <button className="btn btn-secondary" onClick={procurarCliente}>
              Buscar
            </button>

            <button className="btn btn-primary" onClick={() => setMostrarModal(true)}>
              + Adicionar Cliente
            </button>

          </div>

          <div className="card mb-4">
            <div className="card-body">

              <h4>
                Dados do Cliente
              </h4>

              <div className="row">

                <div className="col-md-6">
                  <input className="form-control mb-2" value={clienteAtual?.nome || ""} placeholder="Nome"readOnly/>
                </div>

                <div className="col-md-6">
                  <input className="form-control mb-2" value={clienteAtual?.telefone || ""} placeholder="Telefone"readOnly />
                </div>

                <div className="col-md-3">
                  <input className="form-control" value={clienteAtual?.logradouro || ""} placeholder="Logradouro"readOnly />
                </div>

                <div className="col-md-3">
                  <input className="form-control" value={clienteAtual?.bairro || ""} placeholder="Bairro"readOnly />
                </div>

                <div className="col-md-3">
                  <input className="form-control" value={clienteAtual?.numero || ""} placeholder="Número"readOnly />
                </div>

                <div className="col-md-3">
                  <input className="form-control" value={clienteAtual?.complemento || ""} placeholder="Complemento"readOnly />
                </div>

              </div>
            </div>
          </div>

          <div className="card">

            <div className="card-body">

              <h4>
                Dados do Pedido
              </h4>
              <div className="table-container">
              <table className="table">

                <thead>
                  <tr>
                    <th>Pizza</th>
                    <th>Descrição</th>
                    <th>Qtd</th>
                    <th>Valor Unit.</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>

                  {itensPedido.map(
                    (item) => (
                      <tr key={item.id}>

                        <td>
                          <select className="form-select" onChange={(e) =>
                              selecionarPizza(item.id, e.target.value)
                            }
                          >
                            <option>
                              Escolha uma opção de Pizza
                            </option>

                            {listaPizzasTeste.map((pizza) => (
                                <option
                                  key={pizza.id}
                                  value={pizza.id}
                                >
                                  {pizza.nome}
                                </option>
                              )
                            )}

                          </select>
                        </td>

                        <td>
                          {item.descricao}
                        </td>

                        <td>
                          <input type="number" min="0" className="form-control"
                            value={item.quantidade}
                            onChange={(e) => alterarQuantidade(item, Number(e.target.value)) }/>
                        </td>

                        <td>
                          R$ {item.valor}
                        </td>

                        <td>
                          R${" "}
                          {item.total.toFixed(2)}
                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>
            </div>

              <button className="btn btn-warning" onClick={adicionarItem}>
                + Adicionar Item
              </button>

            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">

            <div>

              <h5>Data: {" "}
                {new Date().toLocaleDateString("pt-BR")}
              </h5>

              <h4>
                Total: {" "}
                R$ {totalPedido.toFixed(2)}
              </h4>

            </div>

            <div>

              <button className="btn btn-success me-2" onClick={salvarPedido}>
                Salvar Pedido
              </button>

              <button className="btn btn-danger" onClick={cancelarPedido}>
                Cancelar Pedido
              </button>

            </div>

          </div>

        </main>

      </div>

      <ClienteModal aberto={mostrarModal} fechar={() =>
          setMostrarModal(false)
        }
        salvar={salvarCliente}/>

    </div>
  );
}