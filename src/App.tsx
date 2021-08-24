import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionsModal } from "./components/NewTransactionsModal";
import { GlobalStyle } from "./styles/global";
export function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header onOpenModal={openModal} />
      <Dashboard />
      <NewTransactionsModal
        isOpenModal={modalIsOpen}
        onCloseModal={closeModal}
      />
      <GlobalStyle />
    </>
  );
}
