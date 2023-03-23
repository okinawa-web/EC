const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const cookieParser = require("cookie-parser");
// const path = require("path");
const prisma = new PrismaClient();
const { reactive } = require("vue");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//セッションの設定
app.use(
  session({
    secret: "your_secret_key_here",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, // 1 hour
      sameSite: "none",
      secure: true,
    },
  })
);

// CORSを設定する
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

async function start() {
  const app = express();
  app.use(express.json());

  // ログインAPIのエンドポイント
  app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    let user;
    try {
      user = await prisma.member.findUnique({
        select: {
          id: true,
          name: true,
          address: true,
          registerDate: true,
          email: true,
          password: true,
          reserves: true,
        },
      });
      console.log("prisma success");
    } catch (e) {
      return res.status(401).json({ error: "Prismaとの接続に失敗しました" });
    }

    console.log(user);

    if (!user) {
      // ユーザーが存在しない場合
      return res.status(401).json({ error: "ユーザーが存在しません" });
    }

    // パスワードの比較
    if (password !== user.password) {
      // パスワードが一致しない場合
      return res.status(401).json({ error: "パスワードが違います" });
    }

    // ログイン成功
    req.session.user = user; //userをセッションに保存
    res.status(200).send(user);
    console.log("セッションの中身", user);
    console.log("セッションID", req.sessionID);
  });

  app.get("/api/TheReserve", (req, res) => {
    const sessionID = req.cookies["connect.sid"]; // connect.sidはセッションIDを表すクッキーの名前
    if (sessionID) {
      const sessionStore = req.sessionStore;
      sessionStore.get(sessionID, (error, session) => {
        if (error) {
          console.log("Error:", error);
          res.status(500).send("Internal Server Error");
        } else if (!session) {
          console.log("Session not found");
          res.status(401).send("Unauthorized");
        } else {
          console.log("Session found:", session);
          // req.session.userの値を取得
          const user = session.user;
          res.send("Welcome, " + user);
        }
      });
    } else {
      console.log("Session ID not found");
      res.status(401).send("Unauthorized");
    }
  });

  app.get("/api/loginUser", (req, res) => {
    const sessionID = req.cookies["connect.sid"]; // connect.sidはセッションIDを表すクッキーの名前
    if (sessionID) {
      const sessionStore = req.sessionStore;
      sessionStore.get(sessionID, (error, session) => {
        if (error) {
          console.log("Error:", error);
          res.status(500).send("Internal Server Error");
        } else if (!session) {
          console.log("Session not found");
          res.status(401).send("Unauthorized");
        } else {
          console.log("Session found:", session);
          // req.session.userの値を取得
          const user = session.user;
          res.send("Welcome, " + user);
        }
      });
    } else {
      console.log("Session ID not found");
      res.status(401).send("Unauthorized");
    }
  });

  // ユーザーデータを取得するAPIエンドポイント
  app.get("/api/loginUser", (req, res) => {
    const user = req.session.user;
    if (user) {
      console.log(user);
      res.json(user);
    } else {
      console.log("ログインできてません");
      console.log("別APIからのセッション", req.session.user);
    }
  });

  // サーバーの起動
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });

  // 500エラーをキャッチするミドルウェア
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "あああああInternal Server Error" });
  });

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
