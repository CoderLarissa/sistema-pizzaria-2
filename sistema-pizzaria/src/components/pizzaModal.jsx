import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

function PizzaModal({
  show,
  handleClose,
  handleSave,
  pizzaSelecionada,
}) {
  const [pizza, setPizza] = useState({
    nome: "",
    descricao: "",
    preco: "",
  });

  useEffect(() => {
    if (pizzaSelecionada) {
      setPizza(pizzaSelecionada);
    } else {
      setPizza({
        nome: "",
        descricao: "",
        preco: "",
      });
    }
  }, [pizzaSelecionada, show]);

  const enviar = (e) => {
    e.preventDefault();

    if (
      !pizza.nome.trim() ||
      !pizza.descricao.trim() ||
      !pizza.preco
    ) {
      alert(
        "Todos os campos são obrigatórios."
      );
      return;
    }

    handleSave({
      ...pizza,
      preco: Number(pizza.preco),
    });

    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {pizzaSelecionada
            ? "Editar Pizza"
            : "Cadastrar Pizza"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={enviar}>
        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label>
              Nome
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Nome da pizza"
              value={pizza.nome}
              onChange={(e) =>
                setPizza({
                  ...pizza,
                  nome: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Descrição
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Descrição da pizza"
              value={pizza.descricao}
              onChange={(e) =>
                setPizza({
                  ...pizza,
                  descricao:
                    e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Preço
            </Form.Label>

            <Form.Control
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={pizza.preco}
              onChange={(e) =>
                setPizza({
                  ...pizza,
                  preco:
                    e.target.value,
                })
              }
            />
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Cancelar
          </Button>

          <Button
            variant="success"
            type="submit"
          >
            {pizzaSelecionada
              ? "Salvar Alterações"
              : "Cadastrar"}
          </Button>

        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default PizzaModal;