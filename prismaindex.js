const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.members.create({
    data: {
      name: "hamaoka",
      adress: "TOTTORI",
      TEL: "08011112222",
      email: "hamaoka@test.com",
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
