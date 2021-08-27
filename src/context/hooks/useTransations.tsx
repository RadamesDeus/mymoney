import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

interface Transaction {
  id: number;
  title: string;
  value: number;
  category: string;
  date: string;
  type: string;
}

type TransactionInput = {
  title: string;
  value: number;
  category: string;
  type: string;
}; //Omit<"Transaction", "id" | "date">;

interface ITrasationsContxtProps {
  transactions: Transaction[];
  creterTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TrasationsContxt = createContext<ITrasationsContxtProps>(
  {} as ITrasationsContxtProps
);

export const TrasationsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function creterTransaction(transactionInput: TransactionInput) {
    // const transaction = {
    //   id: Math.random(),
    //   title,
    //   value,
    //   category,
    //   date: new Date(),
    //   type,
    // } as unknown as Transaction;
    const response = await api.post("transactions", transactionInput);
    const { transaction } = response.data;
    console.log("newtransaction", transaction);
    setTransactions([...transactions, transaction]);
  }

  return (
    <TrasationsContxt.Provider value={{ transactions, creterTransaction }}>
      {children}
    </TrasationsContxt.Provider>
  );
};

export function useTransations() {
  const { transactions, creterTransaction } = useContext(TrasationsContxt);
  return { transactions, creterTransaction };
}
