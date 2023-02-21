// const { PrismaClient } = require("@prisma/client");
// const express = require("express");
import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
const PORT = 8000;

const prisma = new PrismaClient();
app.use(express.json());

app.post("/", async (req, res) => {
  const { name, adress, TEL, email } = req.body;
  const posts = await prisma.members.create({
    data: {
      name: name,
      adress: adress,
      TEL: TEL,
      email: email,
    },
  });
  return res.json(posts);
});

app.get("/image", async (req, res) => {
  const images = await prisma.image.findMany();
  return res.json(images);
});
app.get("/image/:id", async (req, res) => {
  const id = req.params.id;
  const image = await prisma.image.findUnique({
    where: {
      id: Number(id),
    },
  });
  return res.json(image);
});

app.listen(PORT, () => {
  console.log("〜〜サーバーが起動中です〜〜");
});
