import { useState } from "react";

import MenuLateral from "../components/MenuLateral";
import Footer from "../components/Footer";
import ClienteModal from "../components/ClienteModal";

import useClientes from "../hooks/useClientes";

function ClientesPage() {
  const {
    clientes,
    adicionarCliente,
    editarCliente,
    excluirCliente,
  } = useClientes();

  const [mostrarModal, setMostrarModal] =
    useState(false);

  const [clienteSelecionado, setClienteSelecionado] =
    useState(null);

  const [pesquisa, setPesquisa] =
    useState("");

  const clientesFiltrados = clientes.filter(
    (cliente) =>
      cliente.nome
        .toLowerCase()
        .includes(
          pesquisa.toLowerCase()
        )
  );

  const clientesExibidos =
    clientesFiltrados.slice(0, 7);

  const abrirCadastro = () => {
    setClienteSelecionado(null);
    setMostrarModal(true);
  };

  const abrirEdicao = (cliente) => {
    setClienteSelecionado(cliente);
    setMostrarModal(true);
  };

  const fecharModal = () => {
    setMostrarModal(false);
    setClienteSelecionado(null);
  };

  const salvarCliente = (dados) => {
    if (dados.id) {
      editarCliente(dados);
    } else {
      adicionarCliente(dados);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-auto p-0">
          <MenuLateral />
        </div>

        <main className="col p-4">

          <h1 className="mb-4 text-danger">
            Clientes
          </h1>

          <div className="d-flex flex-column flex-md-row gap-3 justify-content-between mb-4">

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar cliente"
                value={pesquisa}
                onChange={(e) =>
                  setPesquisa(e.target.value)
                }
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={abrirCadastro}
            >
              + Adicionar Cliente
            </button>

          </div>

          <div className="card shadow-sm">
            <div className="card-body">

              {clientes.length === 0 ? (
                <div className="text-center py-5">
                  <h5 className="text-muted">
                    Nenhum cliente cadastrado
                  </h5>

                  <button
                    className="btn btn-primary mt-3"
                    onClick={abrirCadastro}
                  >
                    Cadastrar Cliente
                  </button>
                </div>
              ) : (
                <>
                  <table className="table table-striped align-middle">

                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Logradouro</th>
                        <th>Número</th>
                        <th>Bairro</th>
                        <th>Complemento</th>
                        <th>Ações</th>
                      </tr>
                    </thead>

                    <tbody>

                      {clientesExibidos.length === 0 ? (
                        <tr>
                          <td
                            colSpan="7"
                            className="text-center text-muted"
                          >
                            Nenhum cliente encontrado
                          </td>
                        </tr>
                      ) : (
                        clientesExibidos.map(
                          (cliente) => (
                            <tr
                              key={cliente.id}
                            >
                              <td>
                                {cliente.nome}
                              </td>

                              <td>
                                {cliente.telefone}
                              </td>

                              <td>
                                {
                                  cliente.logradouro
                                }
                              </td>

                              <td>
                                {cliente.numero}
                              </td>

                              <td>
                                {cliente.bairro}
                              </td>

                              <td>
                                {
                                  cliente.complemento
                                }
                              </td>

                              <td>
                                <button
                                  className="btn btn-warning btn-sm me-2"
                                  onClick={() =>
                                    abrirEdicao(
                                      cliente
                                    )
                                  }
                                >
                                  Editar
                                </button>

                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() =>
                                    excluirCliente(
                                      cliente.id
                                    )
                                  }
                                >
                                  Excluir
                                </button>
                              </td>
                            </tr>
                          )
                        )
                      )}

                    </tbody>

                  </table>

                  {clientesFiltrados.length >
                    7 && (
                    <p className="text-muted small">
                      Exibindo apenas os
                      7 primeiros registros.
                    </p>
                  )}
                </>
              )}

            </div>
          </div>

        </main>

        <Footer
          textColor="black"
          bgColor="warning"
        />

      </div>

      <ClienteModal
        aberto={mostrarModal}
        fechar={fecharModal}
        cliente={clienteSelecionado}
        salvar={salvarCliente}
      />

    </div>
  );
}

export default ClientesPage;