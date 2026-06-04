import PizzaCard from "./PizzaCard";

function PizzaList({
  pizzas,
  onEdit,
  onDelete,
}) {
  return (
    <div className="row">
      {pizzas.map((pizza) => (
        <PizzaCard
          key={pizza.id}
          pizza={pizza}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PizzaList;