<template>
  <div class="container">
    <!-- 배경이 약간 뿌옇게 보이도록 설정 (맨 뒤로 이동) -->
      <div class="swiper-container">
        <img :src="currentImage" class="slide-image" />
    </div>
    
    <!-- 오버레이 텍스트 (가로세로 정중앙 배치, 텍스트 크기 증가, 간격 조정) -->
    <div class="overlay-text">
      <h1 class="overlay-title">Sejong University<br>Classic Guitar Club</h1>
      <h4>세종대학교 중앙 기타동아리 한울림</h4>
    </div>
  </div>

  <section class="about-section">
    <h2>About 한울림</h2>
    <p>
      한울림은 세종대학교 클래식기타 동아리로,<br>
      매년 정기 연주회와 다양한 활동을 진행하며<br>
      기타를 사랑하는 세종대 학생들이 모여 함께 음악하는 동아리입니다.
    </p>

    <p class="spacer"></p>
    <h2>한울림의 다양한 활동</h2>
    <ul class="activities-list">
      <li>🎵 정기 연주회 개최</li>
      <li>🎸 멤버들과의 합주</li>
      <li>🏕 MT 및 친목 행사</li>
      <li>🎤 버스킹 및 소규모 공연</li>
    </ul>

    
  </section>

  <div class="button-container">
    <router-link to="/practice-room" class="btn">연습실 예약하기</router-link>
    <router-link to="/teacher-selection" class="btn">사부제자 신청하기</router-link>
  </div>
  <section class="activities-section">
    
  </section>

  <!-- 버튼 컨테이너 (가로 정렬) -->
  
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
      }, 3000);
    });

    return {
      currentImage,
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.swiper-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: blur(4px); /* 블러 효과 추가 */
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -85%);
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay-title {
  font-size: 3rem; /* 텍스트 크기 증가 */
  font-weight: bold;
  margin: 5px 0; /* 텍스트 사이 간격 조정 */
}

.button-container {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.btn {
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: burlywood;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
}


.spacer {
  height: 50px;
}

.about-section, .activities-section {
  padding: 80px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.activities-list {
  list-style: none;
  padding: 0;
  font-size: 1.2rem;
}

.activities-list li {
  margin-top: 10px;
}
</style>
