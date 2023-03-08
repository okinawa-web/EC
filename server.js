const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { reactive } = require("vue");

const PORT = 8000;

async function start() {
  const app = express();
  app.use(express.json());

  //会員一覧 GET
  app.get("/member", async (req, res) => {
    console.log("test desuyo");
    const members = await prisma.member.findMany();
    res.status(200).send(members);
  });

  //会員登録 POST
  app.post("/member", async (req, res) => {
    const newMember = await prisma.member.create({
      data: {
        name: req.body.name,
        address: req.body.address,
        tel: req.body.tel,
        registerDate: req.body.registerDate,
        email: req.body.email,
      },
    });
    res.json(newMember);
  });

  //予約状況 GET
  app.get("/reserve", async (req, res) => {
    console.log("reserve テスト");
    const reserve = await prisma.reserve.findMany();
    res.status(200).send(reserve);
  });

  //予約 POST
  app.post("/reserve", async (req, res) => {
    const { reservePeople, date } = req.body;
    const memberId = 1;
    const roomId = 6; // ここを5, 6, 7のいずれかにする
    console.log(roomId);
    const reserve = await prisma.reserve.create({
      data: {
        memberId: memberId,
        reservePeople: reservePeople,
        date: date,
        roomId: roomId,
      },
    });
    return res.json(reserve);
  });

  app.get("/", async (req, res) => {
    res.send("こんにちは");
  });


  //部屋情報登録 POST
  app.post("/room", async (req, res) => {
    const roomName = "203の部屋";
    const price = 25000;
    const people = 2;
    const detail = "かなりいいお部屋";
    const room = await prisma.room.create({
      data: {
        roomName: roomName,
        price: price,
        people: people,
        detail: detail,
      },
    });
    return res.json(room);

// app.get("/image", async (req, res) => {
//   const images = await prisma.image.findMany();
//   return res.json(images);
// });
app.get("/image/:id", async (req, res) => {
  const id = req.params.id;
  const image = await prisma.image.findUnique({
    where: {
      id: Number(id),
    },
  });

  //画像取得API
  app.get("/images", async (req, res) => {
    try {
      const images = await prisma.image.findMany();
      const imagePaths = images.map((image) => image.path);
      res.send(imagePaths);
    } catch (error) {
      console.error(error);
      res.status(500).send("サーバーエラー");
    }
  });

  //部屋情報状況 GET
  app.get("/room", async (req, res) => {
    console.log("room テスト");
    const room = await prisma.room.findMany();
    res.status(200).send(room);
  });
  //サーバー起動確認
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
}

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


start().catch((err) => console.error(err));
