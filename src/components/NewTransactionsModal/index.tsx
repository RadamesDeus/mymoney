import React, { FormEvent, useState } from "react";

import Modal from "react-modal";
import { Container, TypeButtom, TypeTransactions } from "./styles";

import BtnClose from "../../assets/BtnClose.svg";
import Saidas from "../../assets/Saidas.svg";
import Entradas from "../../assets/Entradas.svg";

import { useTransations } from "../../context/hooks/useTransations";

Modal.setAppElement("#root");

interface NewTransactionsModalProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
}

enum TypeTransaction {
  none = "",
  typeIn = "income",
  typeout = "outcome",
}

const NewTransactionsModal: React.FC<NewTransactionsModalProps> = ({
  onCloseModal,
  isOpenModal,
}) => {
  const { creterTransaction } = useTransations();

  const [type, setType] = useState<TypeTransaction>(TypeTransaction.none);
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  async function HandlecreateNewTransactionsModalProps(event: FormEvent) {
    event.preventDefault();
    await creterTransaction({ category, title, type, value });
    onCloseModal();
    setType(TypeTransaction.none);
    setValue(0);
    setTitle("");
    setCategory("");
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseModal}
      overlayClassName="customStylesModal"
      className="customStylesModalContent"
    >
      <Container onSubmit={HandlecreateNewTransactionsModalProps}>
        <img
          className="modal-close"
          src={BtnClose}
          onClick={onCloseModal}
          alt="Fechar"
        />
        <h1>Cadastrar transação</h1>

        <input
          placeholder="Titulo"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />

        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(evt) => setValue(Number(evt.target.value))}
        />

        <TypeTransactions>
          <TypeButtom
            isActive={type === TypeTransaction.typeIn}
            className="type-in"
            type="button"
            onClick={() => setType(TypeTransaction.typeIn)}
          >
            <img src={Entradas} alt="Entrada" />
            <span>Entrada</span>
          </TypeButtom>
          <TypeButtom
            isActive={type === TypeTransaction.typeout}
            className="type-out"
            type="button"
            onClick={() => setType(TypeTransaction.typeout)}
          >
            <img src={Saidas} alt="Saidas" />
            <span>Saída</span>
          </TypeButtom>
        </TypeTransactions>

        <input
          placeholder="Catergoria"
          value={category}
          onChange={(evt) => setCategory(evt.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export { NewTransactionsModal };
