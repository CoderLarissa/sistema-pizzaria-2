function PedidoTable({
  itens,
  setItens,
  adicionarItem,
}) {
  const alterarCampo = (
    index,
    campo,
    valor
  ) => {
    const novosItens = [...itens];

    novosItens[index][campo] = valor;

    setItens(novosItens);
  };

  return (
    <section className="card shadow-sm">
      <div className="card-header d-flex justify-content-between">
        <span>Dados do Pedido</span>

        <button
          className="btn btn-primary btn-sm"
          onClick={adicionarItem}
        >
          + Adicionar Item
        </button>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Pizza</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Valor Item</th>
              </tr>
            </thead>

            <tbody>
              {itens.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      className="form-control"
                      value={item.pizza}
                      onChange={(e) =>
                        alterarCampo(
                          index,
                          "pizza",
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      className="form-control"
                      value={item.descricao}
                      onChange={(e) =>
                        alterarCampo(
                          index,
                          "descricao",
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={item.quantidade}
                      onChange={(e) =>
                        alterarCampo(
                          index,
                          "quantidade",
                          Number(e.target.value)
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={item.valorUnitario}
                      onChange={(e) =>
                        alterarCampo(
                          index,
                          "valorUnitario",
                          Number(e.target.value)
                        )
                      }
                    />
                  </td>

                  <td>
                    R${" "}
                    {(
                      item.quantidade *
                      item.valorUnitario
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default PedidoTable;