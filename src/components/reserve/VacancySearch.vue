<template>
  <div class="calendar-container">
    <h1>空室状況</h1>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";
import { onMounted, ref } from "vue";
import axios from "axios";

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  locale: jaLocale,
  events: [],
});

const getRoomStatus = async () => {
  const now = new Date();
  const response = await axios.get(`/room-status?date=${now.toISOString()}`);
  const data = response.data;

  if (data.status === "full") {
    calendarOptions.value.events = [
      { title: "満室", start: now.toISOString() },
    ];
  } else {
    calendarOptions.value.events = [
      { title: "空室", start: now.toISOString() },
    ];
  }
  console.log("なに", calendarOptions.value.events[0]);
};

onMounted(() => {
  getRoomStatus();
});

const handleDateClick = (arg) => {
  alert(arg.dateStr + "  空室の場合は予約ページへ移動させる");
};

calendarOptions.value.dateClick = handleDateClick;
</script>

<style scoped>
.calendar-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>

<!-- <template>
    <div class="calendar-container">
      <h1>空室状況</h1>
      <FullCalendar :options="calendarOptions" :dayCellContent="dayCellContent" />
    </div>
  </template>
  
  <script setup>
  import FullCalendar from "@fullcalendar/vue3";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import jaLocale from "@fullcalendar/core/locales/ja";
  import { onMounted } from "vue";
  
  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    locale: jaLocale,
    events: [
      { title: "出社", date: "2023-04-01" },
      { title: "出社", date: "2023-04-02" },
    ],
    dateClick: handleDateClick,
  };
  
  function handleDateClick(arg) {
    alert(arg.dateStr + "  クリックしたら詳細出したい");
  }
  
  //今日以前の背景色 (できない)
  function dayCellContent(arg) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (arg.date < today) {
      arg.el.style.backgroundColor = "#f2f2f2";
    }
  }
  
  </script>
  
  <style scoped>
  .calendar-container {
    max-width: 800px;
    margin: 0 auto;
  }
  </style> -->

<!-- <template>
  <div class="calendar-container">
    <h1>空室状況</h1>
    <FullCalendar
      :options="calendarOptions"
      :events="events"
      :dayCellContent="dayCellContent"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";
import axios from "axios";

const calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  weekends: true,
  locale: jaLocale,
};

const events = ref([]);

// function generateRandomId() {
//   const chars =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let id = "";
//   for (let i = 0; i < 10; i++) {
//     id += chars[Math.floor(Math.random() * chars.length)];
//   }
//   return id;
// }

// APIから空室状況を取得する関数
async function getRoomStatus() {
  const response = await axios.get("/room-status");
  const status = response.data.status;

  // 空室状況をFullCalendar用のデータ形式に変換する
  const event = {
    // id: generateRandomId(),
    title: status === "満室" ? "満室" : "空室",
    start: new Date(),
    allDay: true,
    backgroundColor: status === "満室" ? "#ff6666" : "#66ff66",
  };
  events.value.push(event);
  console.log("どっち", status);
  console.log("いつ", events);
  console.log("なに", event);
}

//今日以前の背景色 (できない)
function dayCellContent(arg) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (arg.date < today) {
    arg.el.style.backgroundColor = "#f2f2f2";
  }
}

onMounted(() => {
  getRoomStatus();
});

watch(events, (newEvents, oldEvents) => {
  calendarOptions.events = newEvents;
});
</script>

<style scoped>
.calendar-container {
  max-width: 800px;
  margin: 0 auto;
}
</style> -->
