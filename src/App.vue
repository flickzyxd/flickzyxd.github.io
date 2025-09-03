<template>
  <div class="header-line"></div>
  <div class="content-wrapper">
    <div class="aisxght-text animate-element">aisxght</div>
    <div class="social-links">
      <a href="https://github.com/flickzyxd" target="_blank" class="github-link animate-element">GitHub</a>
      <a href="https://t.me/AIsxght" target="_blank" class="telegram-link animate-element">Telegram</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const animateElements = document.querySelectorAll('.animate-element')

  animateElements.forEach((element, index) => {
    const el = element as HTMLElement
    // Устанавливаем задержку для каждого элемента
    setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 300 + index * 200) // Задержка: 300ms + 200ms за каждый следующий элемент
  })
})
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  background: #121212;
}

.header-line {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #4682B4;
  z-index: 100;
  opacity: 0;
  animation: slideInLeft 0.6s ease-out 0.2s forwards;
}

.content-wrapper {
  margin-top: 30px;
  padding: 20px;
}

.animate-element {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.aisxght-text {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 1px;
  text-shadow:
      0 0 5px rgba(0, 255, 255, 0.7),
      0 0 10px rgba(0, 255, 255, 0.5),
      0 0 20px rgba(0, 255, 255, 0.3);
  background: linear-gradient(45deg, #ff00cc, #3377ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  margin: 0 0 15px 0;
  padding: 5px 10px;
  font-family: 'Arial', sans-serif;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.social-links {
  display: flex;
  gap: 20px;
  margin-top: 15px;
}

.github-link, .telegram-link {
  font-size: 24px;
  font-weight: 700;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.github-link:hover {
  color: #888888;
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.1);
}

.telegram-link:hover {
  color: #0088cc;
  transform: scale(1.05);
  text-shadow: 0 0 10px rgba(0, 136, 204, 0.3);
  background-color: rgba(0, 136, 204, 0.1);
}

/* Анимации */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Плавное появление всей страницы */
body {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>