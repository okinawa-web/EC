const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { reactive } = require("vue");

const PORT = 8000;

async function start() {
  const app = express();
  app.use(express.json());


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

  //サーバー起動確認
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}OKOK`);
  });
}

start().catch((err) => console.error(err));
