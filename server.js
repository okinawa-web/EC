// const express = require("express");
// const app = express();

// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// CORSを設定する
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
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

// テスト用のユーザーデータベース
const users = [
  {
    id: 1,
    name: "キジマイクリ",
    address: "茨城",
    tel: "09011112222",
    registerDate: "2023-03-08 07:32:53.585",
    email: "ikuri@test.com",
    password: "$2b$10$9X9jR/B8ArB6AnpPwrJKNupSSKnwKC/Yg51nZUVf1SG/c69vQkWn6", // "ikuri"のbcryptハッシュ値
  },
  {
    id: 2,
    name: "ハマオカミユウ",
    address: "埼玉",
    tel: "09088883333",
    registerDate: "2023-03-08 07:33:27.722",
    email: "miyu@test.com",
    password: "$2b$10$9X9jR/B8ArB6AnpPwrJKNupSSKnwKC/Yg51nZUVf1SG/c69vQkWn6", // "hamaoka"のbcryptハッシュ値
  },
];
// ログインAPIのエンドポイント
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  let user;
  try {
    user = await prisma.member.findUnique({
      where: {
        email: username,
      },
      select: { name: true, email: true, password: true },
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
  res.status(200).send(user);
  // return res.json({ id: user.id, name: user.name, token: "dummy_token" });
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
