import React, { useState } from "react";
import { api } from "../../services/api";
import Modal from "react-modal";
import { Container } from "./styles";

import BtnClose from "../../assets/BtnClose.svg";

Modal.setAppElement("#root");

interface NewTransactionsModalProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
}
const NewTransactionsModal: React.FC<NewTransactionsModalProps> = ({
  onCloseModal,
  isOpenModal,
}) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseModal}
      // onAfterOpen={afterOpenModal}
      overlayClassName="customStylesModal"
      className="customStylesModalContent"
    >
      <Container>
        <img
          className="modal-close"
          src={BtnClose}
          onClick={onCloseModal}
          alt="Fechar"
        />
        <h1>Cadastrar transação</h1>
        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number" />
        <div className="modal-checkbox">
          <input placeholder="Valor" type="checkbox" />
          <input placeholder="Valor" type="checkbox" />
        </div>
        <input placeholder="Catergoia" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export { NewTransactionsModal };
