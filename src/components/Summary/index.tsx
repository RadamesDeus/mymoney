import React from "react";
import Entradas from "../../assets/Entradas.svg";
import Saidas from "../../assets/Saidas.svg";
import TotalImg from "../../assets/Total.svg";
import { useTransations } from "../../context/hooks/useTransations";

import { Container, Card, Titulo, Icone, Total } from "./styles";

const Summary: React.FC = () => {
  const { transactions } = useTransations();
  const total = transactions.reduce(
    (totals, transaction) => {
      if (transaction.type === "income") totals.Entradas += transaction.value;
      if (transaction.type === "outcome") totals.Saida += transaction.value;
      totals.Saldo = totals.Entradas - totals.Saida;
      return totals;
    },
    {
      Entradas: 0,
      Saida: 0,
      Saldo: 0,
    }
  );

  return (
    <Container>
      <Card>
        <div>
          <Titulo>Entradas</Titulo>
          <Icone src={Entradas} alt="Entrada" />
        </div>
        <Total>
          {new Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total.Entradas)}
        </Total>
      </Card>
      <Card>
        <div>
          <Titulo>Saída</Titulo>
          <Icone src={Saidas} alt="Entrada" />
        </div>
        <Total>
          -
          {new Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total.Saida)}
        </Total>
      </Card>
      <Card>
        <div>
          <Titulo>Total</Titulo>
          <Icone src={TotalImg} alt="Entrada" />
        </div>
        <Total>
          {new Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total.Saldo)}
        </Total>
      </Card>
    </Container>
  );
};

export { Summary };
