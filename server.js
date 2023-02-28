const { PrismaClient } = require("@prisma/client");
const { resolveComponentType } = require("@vue/compiler-core");
const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

// app.use(cors());
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());

// app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});


// # 👇️ your domain below, e.g. http://localhost:3000
// Access-Control-Allow-Origin: http://example.com

// Access-Control-Allow-Methods: POST, PUT, PATCH, GET, DELETE, OPTIONS

// Access-Control-Allow-Headers: Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization

const PORTT = 3456;

app.listen(PORTT, function () {
  console.log(`CORS-enabled web server listening on port ${PORTT}`);
});

//Member登録（ POST ）
// app.post("/", async (req, res) => {
//   const { name, address, tel, registerDate, email } = req.body;
//   const posts = await prisma.Member.create({
//     data: {
//       name: name,
//       address: address,
//       tel: tel,
//       registerDate: registerDate,
//       email: email,
//     },
//   });
//   return res.json(posts);
// });

// let cors = require("cors");
app.use(cors());

// Reserve登録（ POST ）
app.post("/", async (req, res) => {
  const { memberId, reservePeople, date } = req.body;
  const posts = await prisma.Reserve.create({
    data: {
      memberId: memberId,
      reservePeople: reservePeople,
      date: date,
    },
  });
  return res.json(posts);
});

//Memberデータ取得
app.get("/member", async (req, res) => {
  const member = await prisma.member.findMany();
  return res.json(member);
});

//Memberデータ書き込み

//起動チェック localhost:8000
app.get("/", (req, res) => res.send("HELLO WORLD"));

//起動チェック ターミナル
app.listen(PORT, () => {
  console.log(`〜〜サーバーが起動中です〜〜${PORT}`);
});
