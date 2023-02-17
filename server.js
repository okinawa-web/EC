const { PrismaClient } = require("@prisma/client");
const express = require("express");
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

app.listen(PORT, () => {
  console.log("〜〜サーバーが起動中です〜〜");
});
