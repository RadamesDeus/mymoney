import React from "react";
import Logo from "../../assets/Logo.svg";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="MyMoney" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

export { Header };
