import { useEffect, useState } from "react";

function ClienteModal({aberto, fechar, cliente, salvar}) {
  const [dados, setDados] = useState(
    {
      nome: "",
      telefone: "",
      logradouro: "",
      bairro: "",
      numero: "",
      complemento: "",
    }
  );

  useEffect(() => {
    if (cliente) {
      setDados(cliente);
    } else {
      setDados({
        nome: "",
        telefone: "",
        logradouro: "",
        bairro: "",
        numero: "",
        complemento: "",
      });
    }
  }, [cliente]);

  const handleSalvar = () => {
    if (!dados.nome.trim() || !dados.telefone.trim() || !dados.numero.trim() || !dados.bairro.trim()) {
      alert("Nome, telefone, número e bairro são obrigatórios.");
      return;
    }
    salvar(dados);
    alert("Registro salvo com sucesso!");
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
                {cliente ? "Editar Cliente" : "Cadastrar Cliente"}
              </h5>

              <button type="button" className="btn-close" onClick={fechar}/>
            </div>

            <div className="modal-body">

              <input className="form-control mb-2" placeholder="Nome" value={dados.nome} onChange={(e) =>
                  setDados({
                    ...dados,
                    nome: e.target.value,
                  })
                }
              />

              <input className="form-control mb-2" placeholder="Telefone" value={dados.telefone} onChange={(e) =>
                  setDados({
                    ...dados,
                    telefone: e.target.value,
                  })
                }
              />

              <input className="form-control mb-2" placeholder="Logradouro" value={dados.logradouro} onChange={(e) =>
                  setDados({
                    ...dados,
                    logradouro: e.target.value,
                  })
                }
              />

              <input className="form-control mb-2" placeholder="Número" value={dados.numero} onChange={(e) =>
                  setDados({
                    ...dados,
                    numero: e.target.value,
                  })
                }
              />

              <input className="form-control mb-2" placeholder="Bairro" value={dados.bairro} onChange={(e) =>
                  setDados({
                    ...dados,
                    bairro: e.target.value,
                  })
                }
              />

              <input className="form-control" placeholder="Complemento" value={dados.complemento} onChange={(e) =>
                  setDados({
                    ...dados,
                    complemento: e.target.value,
                  })
                }
              />

            </div>

            <div className="modal-footer">

              <button type="button" className="btn btn-secondary" onClick={fechar}>
                Fechar
              </button>

              <button type="button" className="btn btn-success" onClick={handleSalvar}>
                {cliente ? "Salvar Alterações" : "Cadastrar"}
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default ClienteModal;