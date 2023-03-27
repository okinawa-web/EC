<!-- <template>
  <h1>空室状況</h1>
  <FullCalendar :options="calendarOptions" />
</template> -->

<template>
  <h1>空室状況</h1>
  <FullCalendar :options="calendarOptions">
    <template v-slot:eventContent="arg">
      <!-- <b>{{ arg.timeText }}</b> -->
      <i>{{ arg.event.title }}</i>
    </template>
  </FullCalendar>
</template>

<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";

const calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  weekends: true,
  events: [{ title: "Meeting", start: new Date() }],
};
</script>
