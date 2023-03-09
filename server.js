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
// app.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const posts = await prisma.Member.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });
//   return res.json(posts);
// });

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

// app.get("/image", async (req, res) => {
//   const images = await prisma.image.findMany();
//   return res.json(images);
// });
//指定した画像の取得
app.get("/image/:id", async (req, res) => {
  const id = parseInt(req.params.id); // parseInt() 関数を使用して数値に変換する
  if (isNaN(id)) {
    return res.status(400).send("idが数値ではない!");
  }
  const image = await prisma.image.findUnique({
    where: {
      id: id, // 整数値として渡す
    },
  });
  return res.json(image);
});

//画像取得API
app.get("/image", async (req, res) => {
  try {
    const images = await prisma.image.findMany();
    const imagePaths = images.map((image) => image.path);
    res.send(imagePaths);
  } catch (error) {
    console.error(error);
    res.status(500).send("サーバーエラー");
  }
});

app.listen(PORT, () => {
  console.log("〜〜サーバーが起動中です〜〜");
});
