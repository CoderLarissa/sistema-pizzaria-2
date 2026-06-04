import { useState } from "react";
import MenuLateral from "../components/MenuLateral";
import PedidoTable from "../components/PedidoTable";
import ModalClientePedidos from "../components/ModalClientePedidos";

function Pedidos() {
  const [modalAberto, setModalAberto] = useState(false);

  const [cliente, setCliente] = useState({
    nome: "",
    telefone: "",
    logradouro: "",
    bairro: "",
    numero: "",
    complemento: "",
  });

  const [itens, setItens] = useState([]);

  const adicionarItem = () => {
    setItens([
      ...itens,
      {
        pizza: "",
        descricao: "",
        quantidade: 1,
        valorUnitario: 0,
      },
    ]);
  };

  const totalPedido = itens.reduce(
    (total, item) =>
      total + item.quantidade * item.valorUnitario,
    0
  );

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-auto p-0">
          <MenuLateral />
        </div>

        <div className="col p-4">
          <h1 className="mb-4">Pedidos</h1>

          <div className="d-flex flex-column flex-md-row gap-3 mb-4">
            <div className="input-group">
              <span className="input-group-text">
                🔍
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Buscar Cliente"
              />
            </div>

            <button
              className="btn btn-success"
              onClick={() => setModalAberto(true)}
            >
              + Adicionar Cliente
            </button>
          </div>

          <section className="card shadow-sm mb-4">
            <div className="card-header">
              Dados do Cliente
            </div>

            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    value={cliente.nome}
                    placeholder="Nome"
                    disabled
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control"
                    value={cliente.telefone}
                    placeholder="Telefone"
                    disabled
                  />
                </div>

                <div className="col-md-4">
                  <input
                    className="form-control"
                    value={cliente.logradouro}
                    placeholder="Logradouro"
                    disabled
                  />
                </div>

                <div className="col-md-3">
                  <input
                    className="form-control"
                    value={cliente.bairro}
                    placeholder="Bairro"
                    disabled
                  />
                </div>

                <div className="col-md-2">
                  <input
                    className="form-control"
                    value={cliente.numero}
                    placeholder="Número"
                    disabled
                  />
                </div>

                <div className="col-md-3">
                  <input
                    className="form-control"
                    value={cliente.complemento}
                    placeholder="Complemento"
                    disabled
                  />
                </div>
              </div>
            </div>
          </section>

         

          <section className="card shadow-sm mt-4">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h6>Data do Pedido</h6>

                  <p>
                    {new Date().toLocaleDateString(
                      "pt-BR"
                    )}
                  </p>

                  <h5 className="text-success">
                    Total: R$ {totalPedido.toFixed(2)}
                  </h5>
                </div>

                <div className="col-md-6 text-md-end">
                  <button className="btn btn-success me-2">
                    Salvar Pedido
                  </button>

                  <button className="btn btn-danger">
                    Cancelar Pedido
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ModalClientePedidos
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
        setCliente={setCliente}
      />
    </div>
  );
}

export default Pedidos;