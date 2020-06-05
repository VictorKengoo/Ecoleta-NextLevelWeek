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

import express from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");

  const serializedItems = items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: "http://localhost:3333/uploads/" + item.image,
    };
  });

  return response.json(serializedItems);
});

routes.post("/points", async (request, response) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
  } = request.body;

  const ids = await knex("points").insert({
    image: "image-fake",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });

  const pointItems = items.map((item_id: number) => {
    return {
      item_id,
      point_id: ids[0],
    };
  });

  await knex("point_items").insert(pointItems);

  return response.json({ success: true });
});

export default routes;
