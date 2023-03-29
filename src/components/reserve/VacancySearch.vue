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
import router from "../router";

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  initialDate: new Date(),
  locale: jaLocale,
  eventContent(info) {
    const { timeText, title } = info.event;
    return { html: `<div>${title}</div>` };
  },
  events: [],
});

const getRoomStatus = async () => {
  const response = await axios.get("/room-status");
  const events = response.data.events;
  calendarOptions.value.events = events;

  console.log("取得", calendarOptions.value.events);
};

onMounted(() => {
  getRoomStatus();
});

// const handleDateClick = (arg) => {
//   alert(arg.dateStr + "  空室の場合は予約ページへ移動させる");
//   router.push("/reserve");
// };
const handleDateClick = () => {
  router.push({ path: "/TheReserve" });
};

calendarOptions.value.dateClick = handleDateClick;
</script>

<style scoped>
.calendar-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
