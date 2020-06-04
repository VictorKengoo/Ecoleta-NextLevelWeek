import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");

  //JSON

  response.json(["Victor", "Diego", "Cleiton"]);
});

app.listen(3333);
