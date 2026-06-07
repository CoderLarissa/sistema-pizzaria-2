import { useState } from "react";

function ModalClientePedidos({aberto, fechar, setCliente}) {
  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    logradouro: "",
    bairro: "",
    numero: "",
    complemento: "",
  });

  const cadastrar = () => {
    setCliente(dados);
    fechar();
  };

  if (!aberto) return null;

  return (
    <>
      <div className="modal fade show d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Cadastro de Cliente
              </h5>

              <button className="btn-close" onClick={fechar}></button>
            </div>

            <div className="modal-body">
              <input className="form-control mb-2" placeholder="Nome" onChange={(e) =>
                  setDados({
                    ...dados,
                    nome: e.target.value,
                  })
                }
              />

              <input className="form-control mb-2" placeholder="Telefone" onChange={(e) =>
                  setDados({
                    ...dados,
                    telefone: e.target.value,
                  })
                }
              />

              <input className="form-control mb-2" placeholder="Logradouro" onChange={(e) =>
                  setDados({
                    ...dados,
                    logradouro: e.target.value,
                  })
                }
              />

              <input className="form-control mb-2" placeholder="Número" onChange={(e) =>
                  setDados({
                    ...dados,
                    numero: e.target.value,
                  })
                }
              />

              <input className="form-control mb-2" placeholder="Bairro" onChange={(e) =>
                  setDados({
                    ...dados,
                    bairro: e.target.value,
                  })
                }
              />

              <input className="form-control" placeholder="Complemento" onChange={(e) =>
                  setDados({
                    ...dados,
                    complemento: e.target.value,
                  })
                }
              />
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={fechar}>
                Fechar
              </button>

              <button className="btn btn-success" onClick={cadastrar}>
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default ModalClientePedidos;