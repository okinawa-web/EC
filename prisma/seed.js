import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const imageFile = await prisma.image.createMany({
    data: [
      {
        pageId: 1,
        path: "gs://okinawa-vue.appspot.com/HAMAJIMAlogo.jpg",
      },
      {
        pageId: 2,
        path: "gs://okinawa-vue.appspot.com/logo.png",
      },
      {
        pageId: 3,
        path: "gs://okinawa-vue.appspot.com/umi.jpg",
      },
      {
        pageId: 3,
        path: "gs://okinawa-vue.appspot.com/yuuhi.jpg",
      },
      {
        pageId: 4,
        path: "gs://okinawa-vue.appspot.com/checkin.jpg",
      },
      {
        pageId: 4,
        path: "gs://okinawa-vue.appspot.com/terasu.jpg",
      },
      {
        pageId: 4,
        path: "gs://okinawa-vue.appspot.com/sisahana.jpg",
      },
      {
        pageId: 4,
        path: "gs://okinawa-vue.appspot.com/bbq.jpg",
      },
      {
        pageId: 4,
        path: "gs://okinawa-vue.appspot.com/sakana.jpg",
      },
      {
        pageId: 4,
        path: "gs://okinawa-vue.appspot.com/soba.jpg",
      },
      {
        pageId: 4,
        path: "gs://okinawa-vue.appspot.com/div.jpg",
      },
      {
        pageId: 4,
        path: "gs://okinawa-vue.appspot.com/jangul.jpg",
      },
      {
        pageId: 4,
        path: "gs://okinawa-vue.appspot.com/sup1.jpg",
      },
      {
        pageId: 5,
        path: "gs://okinawa-vue.appspot.com/room.jpg",
      },
      {
        pageId: 5,
        path: "gs://okinawa-vue.appspot.com/room1.jpg",
      },
      {
        pageId: 5,
        path: "gs://okinawa-vue.appspot.com/room2.jpg",
      },
      {
        pageId: 5,
        path: "gs://okinawa-vue.appspot.com/room3.jpg",
      },
      {
        pageId: 5,
        path: "gs://okinawa-vue.appspot.com/room4.jpg",
      },
      {
        pageId: 6,
        path: "gs://okinawa-vue.appspot.com/toilet.jpg",
      },
      {
        pageId: 6,
        path: "gs://okinawa-vue.appspot.com/kinko.jpg",
      },
      {
        pageId: 6,
        path: "gs://okinawa-vue.appspot.com/sentakuki.webp",
      },
      {
        pageId: 6,
        path: "gs://okinawa-vue.appspot.com/kaithudentou.jpeg",
      },
      {
        pageId: 6,
        path: "gs://okinawa-vue.appspot.com/interfon.webp",
      },
      {
        pageId: 6,
        path: "gs://okinawa-vue.appspot.com/sutimuairon.webp",
      },
      {
        pageId: 6,
        path: "gs://okinawa-vue.appspot.com/soujiki.jpg",
      },
      {
        pageId: 6,
        path: "gs://okinawa-vue.appspot.com/surippa.jpeg",
      },
      {
        pageId: 6,
        path: "gs://okinawa-vue.appspot.com/watersaba.jpeg",
      },
      {
        pageId: 7,
        path: "gs://okinawa-vue.appspot.com/amenityset.jpeg",
      },
      {
        pageId: 7,
        path: "gs://okinawa-vue.appspot.com/skincare.jpeg",
      },
      {
        pageId: 7,
        path: "gs://okinawa-vue.appspot.com/syanpu.jpeg",
      },
      {
        pageId: 7,
        path: "gs://okinawa-vue.appspot.com/dryya.jpeg",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/coffemeka.jpeg",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/renji.jpeg",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/suihanki.jpeg",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/hotprete.jpeg",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/houtyo.jpeg",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/nabe.jpeg",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/sara.jpeg",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/grass.jpeg",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/drinkIcon.png",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/carIcon.png",
      },
      {
        pageId: 8,
        path: "gs://okinawa-vue.appspot.com/bbqIcon.jpeg",
      },
      {
        pageId: 9,
        path: "gs://okinawa-vue.appspot.com/beach1.jpg",
      },
      {
        pageId: 9,
        path: "gs://okinawa-vue.appspot.com/beach3.webp",
      },
      {
        pageId: 9,
        path: "gs://okinawa-vue.appspot.com/bridge1.jpg",
      },
      {
        pageId: 9,
        path: "gs://okinawa-vue.appspot.com/bridge2.jpeg",
      },
      {
        pageId: 9,
        path: "gs://okinawa-vue.appspot.com/mang5.jpg",
      },
      {
        pageId: 9,
        path: "gs://okinawa-vue.appspot.com/mang3.jpg",
      },
      {
        pageId: 10,
        path: "gs://okinawa-vue.appspot.com/map.jpg",
      },
      {
        pageId: 10,
        path: "gs://okinawa-vue.appspot.com/access.jpg",
      },
    ],
  });
  // console.log({ imageFile });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // eslint-disable-next-line no-undef
    process.exit(1);
  });
