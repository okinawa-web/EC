<template>
  <div class="calendar-container">
    <h1 class="FreeRoom">空室状況</h1>
    <FullCalendar :options="calendarOptions" class="calendar" />
  </div>
</template>

<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

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

const router = useRouter();

const handleDateClick = (info) => {
  const clickedDate = info.dateStr;
  const clickedEvent = calendarOptions.value.events.find(
    (event) => event.start === clickedDate
  );
  if (clickedEvent && clickedEvent.title === "空室") {
    router.push({ path: "/TheReserve", query: { date: clickedDate } });
  } else {
    alert("指定した日付は満室のため予約できません");
  }
  console.log("いつ", clickedDate);
};

calendarOptions.value.dateClick = handleDateClick;
</script>

<style scoped>
.calendar-container {
  max-width: 800px;
  margin: 0 auto;
}

.FreeRoom {
  font-size: 20px;
  margin-top: 36px;
}

.calendar {
  font-size: 12px;
}
</style>
