import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Reserve from "../views/resrve/TheReserve.vue";
import AboutRikyu from "../views/AboutRikyu.vue";
import Rooms from "../views/Rooms.vue";
import Room from "../views/Room.vue";
import GuestRoom from "../views/GuestRoom.vue";
import Facility from "../views/Facility.vue";
import Activity from "../views/Activity.vue";
import Acsess from "../views/Acsess.vue";
import Question from "../views/Question.vue";
import News from "../views/News.vue";
import MemberRegistration from "../views/resrve/MemberRegistration.vue";
import TheReserve from "../views/resrve/TheReserve.vue";
import Reservecomfirm from "../views/resrve/Reserve_comfirm.vue";
import Reservecansel from "../views/resrve/Reserve_cansel.vue";
import Login from "../views/resrve/Login.vue";
import LoginReset from "../views/resrve/LogionReset.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/reserve",
      name: "Reserve",
      component: Reserve,
    },
    {
      path: "/aboutRikyu",
      name: "AboutRikyu",
      component: AboutRikyu,
    },
    {
      path: "/rooms",
      name: "Rooms",
      component: Rooms,
    },
    {
      path: "/room",
      name: "Room",
      component: Room,
    },
    {
      path: "/guestRoom",
      name: "GuestRoom",
      component: GuestRoom,
    },
    {
      path: "/facility",
      name: "Facility",
      component: Facility,
    },
    {
      path: "/activity",
      name: "Activity",
      component: Activity,
    },
    {
      path: "/acsess",
      name: "Acsess",
      component: Acsess,
    },
    {
      path: "/question",
      name: "Question",
      component: Question,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/MemberRegistration",
      name: "MemberRegistration",
      component: MemberRegistration,
    },
    {
      path: "/TheReserve",
      name: "TheReserve",
      component: TheReserve,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/loginreset",
      name: "LoginReset",
      component: LoginReset,
    },
    {
      path: "/cansel",
      name: "Reservecansel",
      component: Reservecansel,
    },
    {
      path: "/comfirm",
      name: "Reservecomfirm",
      component: Reservecomfirm,
    },

    //テスト用
    {
      path: "/test",
      name: "test",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TheTest.vue"),
    },
  ],
});

export default router;
