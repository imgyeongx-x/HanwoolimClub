<template>
  <div class="app-container">
    <AppHeader />
    <main class="content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { createRouter, createWebHistory } from "vue-router";
import HanwoolimHome from "@/views/HanwoolimHome.vue";
import PracticeRoom from "@/views/PracticeRoom.vue";
import TeacherSelection from "@/views/TeacherSelection.vue";

const routes = [
  { path: "/", component: HanwoolimHome },
  { path: "/practice-room", component: PracticeRoom },
  { path: "/teacher-selection", component: TeacherSelection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  router,
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

/* 🚀 전체 프로젝트 글씨체 적용 */
html, body, * {
  font-family: 'Noto Sans KR', sans-serif !important;
}


/* 🚀 전체 레이아웃 스타일 */
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 모든 요소 가로 중앙 정렬 */
  justify-content: flex-start;
  min-height: 100vh; /* 전체 화면 높이 */
  text-align: center;
  width: 100%;
  max-width: 100vw; /* 🚀 가로 폭 제한 */
  overflow-x: hidden; /* 🚀 가로 스크롤 제거 */
}

/* 🚀 Main 영역 */
.content {
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 80px 20px 20px; /* Header 높이만큼 위쪽 패딩 추가 */
  flex: 1; /* Footer를 아래로 밀어내기 */
}
</style>
