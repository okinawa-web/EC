const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const cookieParser = require("cookie-parser");
// const path = require("path");
// const sessionStore = require('./sessionStore');

const prisma = new PrismaClient();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-session-id"
  );
  next();
});

//セッションの設定
app.use(
  session({
    // name: "ikuri.sid",
    secret: "your_secret_key_here",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000, // 1 hour
      sameSite: "none",
      secure: true,
    },
  })
);
// CORSを設定する
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization", "x-session-id"],
  exposedHeaders: ["x-session-id"],
};

app.use(cors(corsOptions));

app.get("/test", (req, res) => {
  console.log(req.headers);
  res.send("test");
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
  // res.status(200).send( req.session.user);
  res.status(200).send({ user: user, session_id: req.sessionID });

  // // セッションストレージに保存する
  // req.sessionStorage.setItem("user", JSON.stringify(user));
  req.session.loggedIn = true;
  console.log("セッションの中身", user);
  console.log("セッションID", req.sessionID);
  // res.json({ message: 'Logged in' });
});


app.get("/api/session", (req, res) => {
  const sessionStore = req.sessionStore;
  const sessionId = req.headers["x-session-id"];
  console.log("セッションID！！！！！！:", sessionId);
  const session = sessionStore.sessions[sessionId];
  if (session) {
    // セッションが有効であるため、何か処理を実行する
    console.log("セッション有効");
    res.status(200).json(session);
  } else {
    // セッションが無効であるため、エラーを返すなどの処理を実行する
    console.log("セッション無効");
    res.status(404).send("セッションが見つかりません");
  }
});


app.get("/api/TheReserve", (req, res) => {
  const user = req.session.user; // 認証トークンをセッションから取得
  if (!user) {
    console.log("User not found");
    res.status(401).send("Unauthorized");
  } else {
    console.log("User found:", user);
    // ユーザー情報を返す
    res.send("Welcome, " + user.name);
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
      password: req.body.password,
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
// app.post("/reserve", async (req, res) => {
//   const { reservePeople, date } = req.body;
//   const memberId = 2;
//   const roomId = 3; // ここを5, 6, 7のいずれかにする
//   console.log(roomId);
//   const reserve = await prisma.reserve.create({
//     data: {
//       memberId: memberId,
//       reservePeople: reservePeople,
//       date: date,
//       roomId: roomId,
//     },
//   });
//   return res.json(reserve);
// });

// app.get("/", async (req, res) => {
//   res.send("こんにちは");
// });

//部屋情報状況 GET
app.get("/room", async (req, res) => {
  console.log("room テスト");
  const room = await prisma.room.findMany();
  res.status(200).send(room);
});

//部屋情報登録 POST
app.post("/room", async (req, res) => {
  const roomName = "203の部屋";
  const price = 25000;
  const people = 2;
  const detail = "一番いいお部屋";
  const room = await prisma.room.create({
    data: {
      roomName: roomName,
      price: price,
      people: people,
      detail: detail,
    },
  });
  return res.json(room);
});

//空室状況確認  (現在時刻以降の予約状況を取得して空室判断)
  app.get("/room-status", async (req, res) => {
    const now = new Date();
    const endOfMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0,
      23,
      59,
      59
    );
    endOfMonth.setDate(endOfMonth.getDate() + 30); // 30日後の日付
    const reserve = await prisma.reserve.findMany({
      where: {
        date: {
          gte: now,
          lte: endOfMonth,
        },
      },
    });
    const events = reserve.map((r) => ({
      title: "満室",
      start: r.date.toISOString(),
    }));
    const dates = new Set();
    for (let d = now; d <= endOfMonth; d.setDate(d.getDate() + 1)) {
      dates.add(d.toISOString().slice(0, 10));
    }
    for (let event of events) {
      dates.delete(event.start.slice(0, 10));
    }
    const availableEvents = [...dates].map((d) => ({
      title: "空室",
      start: d,
    }));
    const allEvents = events.concat(availableEvents);
    res.json({ events: allEvents });
  });

  //指定した画像の取得
  app.get("/image/:id", async (req, res) => {
    const id = parseInt(req.params.id); // parseInt() 関数を使用して数値に変換する
    if (isNaN(id)) {
      return res.status(400).send("idが数値ではない!");
    }
    const image = await prisma.image.findUnique({
      where: {
        id: id,
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

// サーバーの起動
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// 500エラーをキャッチするミドルウェア
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "あああああInternal Server Error" });
});
