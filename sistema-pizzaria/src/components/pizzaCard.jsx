function PizzaCard({
  pizza,
  onEdit,
  onDelete,
}) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100">

        <div className="card-body">

          <h5 className="card-title">
            {pizza.nome}
          </h5>

          <p className="card-text">
            {pizza.descricao}
          </p>

          <h6 className="text-success">
            R$ {Number(pizza.preco).toFixed(2)}
          </h6>

        </div>

        <div className="card-footer bg-white border-0 d-flex justify-content-between">

          <button
            className="btn btn-warning btn-sm"
            onClick={() =>
              onEdit(pizza)
            }
          >
            Editar
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              onDelete(pizza.id)
            }
          >
            Excluir
          </button>

        </div>

      </div>
    </div>
  );
}

export default PizzaCard;