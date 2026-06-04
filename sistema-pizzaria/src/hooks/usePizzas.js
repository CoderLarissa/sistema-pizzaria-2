import { useEffect, useState } from "react";

export default function usePizzas() {
  const [pizzas, setPizzas] = useState(() => {
    return (
      JSON.parse(
        sessionStorage.getItem("Pizzas")
      ) || []
    );
  });

  useEffect(() => {
    sessionStorage.setItem(
      "Pizzas",
      JSON.stringify(pizzas)
    );
  }, [pizzas]);

  const adicionarPizza = (pizza) => {
    const novaPizza = {
      ...pizza,
      id: Date.now(),
    };

    setPizzas((prev) => [
      ...prev,
      novaPizza,
    ]);
  };

  const editarPizza = (pizzaAtualizada) => {
    setPizzas((prev) =>
      prev.map((pizza) =>
        pizza.id === pizzaAtualizada.id
          ? pizzaAtualizada
          : pizza
      )
    );
  };

  const excluirPizza = (id) => {
    if (
      !window.confirm(
        "Deseja excluir esta pizza?"
      )
    ) {
      return;
    }

    setPizzas((prev) =>
      prev.filter(
        (pizza) => pizza.id !== id
      )
    );
  };

  return {
    pizzas,
    adicionarPizza,
    editarPizza,
    excluirPizza,
  };
}