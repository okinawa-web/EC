const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { reactive } = require("vue");
const prisma = new PrismaClient();
const app = express();
const PORT = 8001;

app.use(express.json());

app.get("/member", async (req, res) => {
  const posts = await prisma.member.findMany();
  res.json(posts);
});

app.get("/", async (req, res) => {
  // const posts = await prisma.member.findMany();
  res.send("こんにちは");
});

// app.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const post = await prisma.member.findUnique({
//     where: {
//       id: Number(id),
//     }
//   });
//   res.json(post);
// });


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});

// app.post("/", async (req, res) => {
//   const { id, name, address, tel, registerDate, email } = req.body;
//   const posts = await prisma.member.create({
//     data: {
//       id: id,
//       name: name,
//       address: address,
//       tel: tel,
//       registerDate: registerDate,
//       email: email,
//     },
//   });
//   return res.json(posts);
// });

// app.listen(PORT, () => {
//   console.log("☆☆サーバー起動中☆☆");
// });
