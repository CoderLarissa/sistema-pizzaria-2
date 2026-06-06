import { useState } from "react";

export default function usePedidos() {
  const [itensPedido, setItensPedido] = useState([]);

  const adicionarItem = () => {
    setItensPedido((prev) => [
      ...prev,
      {
        id: Date.now(),
        pizzaId: "",
        descricao: "",
        quantidade: 0,
        valor: 0,
        total: 0,
      },
    ]);
  };

  const atualizarItem = (
    id,
    campo,
    valor
  ) => {
    setItensPedido((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [campo]: valor,
            }
          : item
      )
    );
  };

  const totalPedido = itensPedido.reduce(
    (total, item) =>
      total + Number(item.total),
    0
  );

  return {
    itensPedido,
    adicionarItem,
    atualizarItem,
    totalPedido,
  };
}