const { PrismaClient } = require("@prisma/client");
const { resolveComponentType } = require("@vue/compiler-core");
const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(cors());
const prisma = new PrismaClient();
app.use(express.json());

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
  console.log("〜〜サーバーが起動中です〜〜");
});
