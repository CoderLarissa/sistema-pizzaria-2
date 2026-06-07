import { useEffect, useState } from "react";

export default function useClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => { 
    const clientesSalvos = JSON.parse(sessionStorage.getItem("Clientes")) || [];
    setClientes(clientesSalvos);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("Clientes", JSON.stringify(clientes));
  }, [clientes]);

  const adicionarCliente = (cliente) => {
    const novoCliente = {
      ...cliente,
      id: Date.now(),
    };
    setClientes((prev) => [...prev, novoCliente]);
    
  };

  const editarCliente = (clienteAtualizado) => {
    setClientes((prev) => prev.map((cliente) => cliente.id === clienteAtualizado.id? clienteAtualizado : cliente));
  };

  const excluirCliente = (id) => {
    const confirmou = window.confirm("Deseja excluir este cliente?");
    if (!confirmou) return;
    setClientes((prev) => prev.filter((cliente) => cliente.id !== id));
  };

  return {clientes, adicionarCliente, editarCliente, excluirCliente};
}