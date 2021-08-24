import React from "react";
import Entradas from "../../assets/Entradas.svg";
import Saidas from "../../assets/Saidas.svg";
import TotalImg from "../../assets/Total.svg";
import { Container, Card, Titulo, Icone, Total } from "./styles";

const Summary: React.FC = () => {
  return (
    <Container>
      <Card>
        <div>
          <Titulo>Entradas</Titulo>
          <Icone src={Entradas} alt="Entrada" />
        </div>
        <Total>R$ 17.400,00</Total>
      </Card>
      <Card>
        <div>
          <Titulo>Saída</Titulo>
          <Icone src={Saidas} alt="Entrada" />
        </div>
        <Total>-R$ 1.259,00</Total>
      </Card>
      <Card>
        <div>
          <Titulo>Total</Titulo>
          <Icone src={TotalImg} alt="Entrada" />
        </div>
        <Total>R$ 16.141,00</Total>
      </Card>
    </Container>
  );
};

export { Summary };
