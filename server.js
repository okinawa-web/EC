const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const cookieParser = require("cookie-parser");
// const path = require("path");

const prisma = new PrismaClient();

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

// // /api/usersエンドポイントにGETリクエストを送信すると、全てのユーザーのリストを返します。
app.get("/api/users", (req, res) => {
  const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
  res.send(users);
});

// //会員一覧 GET
app.get("/member", async (req, res) => {
  console.log("test desuyo");
  const members = await prisma.member.findMany();
  res.status(200).send(members);
});

// ログインAPIのエンドポイント
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  let user;
  try {
    user = await prisma.member.findUnique({
      where: {
        email: username,
      },
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
