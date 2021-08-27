import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "freela",
          value: 6000,
          category: "Dev",
          date: "10/08/2021",
          type: "income",
        },
        {
          id: 2,
          title: "aluguel",
          value: 300,
          category: "divida",
          date: "11/08/2021",
          type: "outcome",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      const transaction = {
        id: Math.random(),
        ...data,
        date: new Date(),
      };
      return schema.create("transaction", transaction);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
