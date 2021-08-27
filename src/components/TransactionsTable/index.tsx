import React, { useEffect } from "react";
import { useTransations } from "../../context/hooks/useTransations";

import { Container } from "./styles";

const TransactionsTable: React.FC = () => {
  const { transactions } = useTransations();

  useEffect(() => {
    console.log("transactions", transactions);
  }, [transactions]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulos</th>
            <th>Preço</th>
            <th>Categorias</th>
            <th>Datas</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className={item.type}>
                {item.type === "outcome" && "- "}
                {new Intl.NumberFormat("pr-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.value)}
              </td>
              <td>{item.category}</td>
              <td>
                {new Intl.DateTimeFormat("pr-BR").format(new Date(item.date))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export { TransactionsTable };
