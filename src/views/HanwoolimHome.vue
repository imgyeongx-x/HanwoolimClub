<template>
  <div class="relative w-full min-h-screen flex items-center justify-center text-center">
    <!-- 배경이 약간 뿌옇게 보이도록 설정 (맨 뒤로 이동) -->
    <div class="absolute inset-0 -z-10">
      <div class="swiper-container">
        <img :src="currentImage" class="slide-image" />
      </div>
    </div>

    <div class="custom-box">
  <h1 class="text-4xl font-bold text-black">
    세종대 클래식기타 동아리 한울림입니다 히히
  </h1>
</div>


    <!-- 오버레이 텍스트 (높이 300px 고정, 테두리 & 배경 추가) -->
    <div class="absolute flex items-center justify-center max-h-[300px] w-full border-4 border-red-500 bg-white bg-opacity-50 p-4">
      <h1 class="text-4xl font-bold mt-10 text-black">
        세종대 클래식기타 동아리 한울림입니다 히히
      </h1>
    </div>
  </div>


    <div class="h-screen absolute inset-0 flex items-center justify-center">
      <h1 class="text-4xl font-bold mt-100">
        Sejong University
      </h1>
      <h1 class="text-4xl font-bold text-black">
        Guitar Club
      </h1>
      <h2>세종대학교 중앙 클래식기타 동아리 한울림</h2>
    </div>
  
    <section class="spacer"></section>


  <!-- 추가 정보 섹션 -->
  <section class="about-section">

    
    <!-- 버튼 컨테이너 (가로 정렬) -->
    <div class="relative z-10 mt-6 flex justify-center gap-6">
      <router-link to="/practice-room" class="btn">연습실 예약하기</router-link>
      <router-link to="/teacher-selection" class="btn">사부제자 신청하기</router-link>
    </div>
    <h2 class="text-3xl font-bold text-center">About 한울림</h2>
    <p class="text-lg text-center max-w-2xl mt-4">
      한울림은 세종대학교 클래식기타 동아리로, 매년 정기 연주회와 다양한 활동을 진행하며 기타를 사랑하는 사람들이 모여 함께 음악을 즐기는 공간입니다.
    </p>
  </section>

  <section class="activities-section">
    <h2 class="text-3xl font-bold text-center">한울림의 다양한 활동</h2>
    <ul class="activities-list mt-4">
      <li>🎵 정기 연주회 개최</li>
      <li>🎸 멤버들과의 합주</li>
      <li>🏕 MT 및 친목 행사</li>
      <li>🎤 버스킹 및 소규모 공연</li>
    </ul>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const images = [
      "/images/가을연주회합주.jpg",
      "/images/가을연주회단체사진.jpg",
      "/images/봄연주회단체사진.jpg",
      "/images/봄연주회합주.jpg",
      "/images/가을연주회엠티.jpg",
    ];
    const currentImage = ref(images[0]);
    let index = 0;

    onMounted(() => {
      setInterval(() => {
        index = (index + 1) % images.length;
        currentImage.value = images[index];
      }, 1000);
    });

    return {
      currentImage,
    };
  },
};
</script>

<style scoped>
/* Swiper 컨테이너 크기 설정 (맨 뒤로 배치) */
.swiper-container {
  width: 100%;
  height: 100vh; /* 전체 화면을 덮음 */
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -10; /* 맨 뒤로 이동 */
}

/* 슬라이드 이미지 스타일 */
.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(4px); /* 🚀 배경을 뿌옇게 처리 */
  transition: opacity 0.5s ease-in-out;
}

.custom-box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.5); /* 반투명 배경 */
  border: 4px solid red; /* 빨간색 테두리 */
  top: 50%;
  transform: translateY(-50%); /* 세로 중앙 정렬 */
}


/* 스크롤 여백 */
.spacer {
  height: 350px; /* 사진과 추가 정보 사이의 공간 */
}

/* 추가 정보 섹션 스타일 */
.about-section, .activities-section {
  padding: 80px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}
.activities-list {
  list-style: none;
  padding: 0;
  text-align: center;
  font-size: 1.2rem;
}
.activities-list li {
  margin-top: 10px;
}

/* 버튼 스타일 */
.btn {
  display: inline-block;
  padding: 20px 40px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: rgba(255, 120, 60, 0.6);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
  text-align: center;
  width: 200px;
}

.btn:hover {
  background-color: rgba(255, 120, 60, 0.8);
}
</style>
