const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { reactive } = require("vue");

const PORT = 8001;

async function start() {
  const app = express();
  app.use(express.json());
  const prisma = new PrismaClient();

  app.get("/member", async (req, res) => {
    console.log("test desuyo");
    const members = await prisma.member.findMany();
    res.status(200).send(members);
  });

  app.post("/reserve", async (req, res) => {
    const { memberId, reservePeople, date } = req.body;
    const reserve = await prisma.reserve.create({
      data: {
        memberId: memberId,
        reservePeople: reservePeople,
        date: date,
      },
    });
    return res.json(reserve);
  });

  app.get("/", async (req, res) => {
    res.send("こんにちは");
  });

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
}

start().catch((err) => console.error(err));
