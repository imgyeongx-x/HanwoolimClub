import { createRouter, createWebHistory } from "vue-router";
import HanwoolimHome from "../views/HanwoolimHome.vue";
import PracticeRoom from "../views/PracticeRoom.vue";
import TeacherSelection from "../views/TeacherSelection.vue";

const routes = [
  { path: "/", component: HanwoolimHome },
  { path: "/practice-room", component: PracticeRoom },
  { path: "/teacher-selection", component: TeacherSelection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
