<template>
    <header class="header">
      <nav class="nav-container">
        <img src="/images/한울림로고.png" alt="한울림 로고" class="logo" />
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
  };
  </script>
  
  <style scoped>
  /* 🚀 네비게이션 바 스타일 (연한 주황빛 그라데이션 & 투명 효과 추가) */
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 100vw;
    background: white;
    backdrop-filter: blur(10px);
    padding: 12px 0;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  /* 🚀 네비게이션 컨테이너 */
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
  }
  
  /* 🚀 로고 컨테이너 (가운데 정렬) */
  .logo-container {
    display: flex;
    justify-content: center;
    flex: 1;
  }

  /* 🚀 로고 이미지 스타일 (작게 조정) */
  .logo {
    height: 40px;
    width: auto;
  }
  
  /* 🚀 네비게이션 링크 정렬 */
  .nav-links {
    display: flex;
    gap: 25px;
  }
  .nav-link {
    color: white;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    transition: color 0.3s ease, transform 0.2s;
  }
  .nav-link:hover {
    color: #ffd1a1; /* 🚀 연한 크림 주황색 강조 */
    transform: scale(1.1);
  }
  </style>
