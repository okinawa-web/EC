// const { PrismaClient } = require("@prisma/client");
// const express = require("express");
import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
const PORT = 8000;

const prisma = new PrismaClient();
app.use(express.json());

//Member登録（ POST ）
app.post("/", async (req, res) => {
  const { name, address, tel, registerDate, email } = req.body;
  const posts = await prisma.Member.create({
    data: {
      name: name,
      address: address,
      tel: tel,
      registerDate: registerDate,
      email: email,
    },
  });
  return res.json(posts);
});
//Member取得
app.get("/", async (req, res) => {
  const posts = await prisma.Member.findMany();
  return res.json(posts);
});
//Member指定取得
app.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const posts = await prisma.Member.findUnique({
    where: {
      id,
    },
  });
  return res.json(posts);
});

// Reserve登録（ POST ）
// app.post("/", async (req, res) => {
//   const { memberId, reservePeople, date } = req.body;
//   const posts = await prisma.Reserve.create({
//     data: {
//       memberId: memberId,
//       reservePeople: reservePeople,
//       date: date,
//     },
//   });
//   return res.json(posts);
// });

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
