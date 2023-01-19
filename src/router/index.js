import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutRikyu from "../views/AboutRikyu.vue";
import Rooms from "../views/Rooms.vue";
import Activity from "../views/Activity.vue";
import Acsess from "../views/Acsess.vue";
import Reserve from "../views/resrve/reserve.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/test",
      name: "test",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/test.vue"),
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
      path: "/reserve/reserve",
      name: "Reserve",
      component: Reserve,
    },
  ],
});

export default router;
