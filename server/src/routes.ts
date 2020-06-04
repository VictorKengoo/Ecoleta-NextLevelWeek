import express from "express";

const routes = express.Router();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade  estamos acessndo do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com Id = 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros opcionais que vem na própria rota, para filtro, paginação
// Request Body: Parâmetros para criação/ atualização de informações

routes.get("/", (request, response) => {
  return response.json({ message: "Olá" });
});

/*app.get("/users", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  return response.json(filteredUsers);
});

app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post("/users", (request, response) => {
  const data = request.body;

  const user = {
    name: data.name,
    email: data.email,
  };

  return response.json(user);
});*/

export default routes;
