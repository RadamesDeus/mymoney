import React from "react";
import Logo from "../../assets/Logo.svg";

import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onOpenModal }) => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="MyMoney" />
        <button onClick={onOpenModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export { Header };
