<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { withBase } from "vitepress";

const slides = [
  { src: "/img/music.png", alt: "音乐库与播放" },
  { src: "/img/sources.png", alt: "媒体源" },
  { src: "/img/remote-seach.png", alt: "远程搜索" },
  { src: "/img/plugin-store.png", alt: "插件商店" },
  { src: "/img/scraper-song.png", alt: "单曲刮削" },
  { src: "/img/playlist.png", alt: "歌单管理" },
];

const INTERVAL = 5000;
const current = ref(0);
const paused = ref(false);
let timer: ReturnType<typeof setInterval> | undefined;

const counter = computed(
  () => `${String(current.value + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`,
);

function resetTimer() {
  if (timer) clearInterval(timer);
  if (paused.value) return;
  timer = setInterval(next, INTERVAL);
}

function goTo(index: number) {
  current.value = (index + slides.length) % slides.length;
  resetTimer();
}

function next() {
  goTo(current.value + 1);
}

function prev() {
  goTo(current.value - 1);
}

onMounted(() => {
  resetTimer();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <div
    class="mf-hero-carousel"
    role="region"
    aria-label="产品界面轮播"
    aria-roledescription="carousel"
    :aria-live="paused ? 'polite' : 'off'"
    @mouseenter="paused = true"
    @mouseleave="paused = false; resetTimer()"
    @focusin="paused = true"
    @focusout="paused = false; resetTimer()"
  >
    <div class="mf-hero-carousel-glow" aria-hidden="true" />

    <div class="mf-hero-carousel-frame">
      <div class="mf-hero-carousel-track" aria-hidden="true">
        <img
          v-for="(slide, i) in slides"
          :key="slide.src"
          :src="withBase(slide.src)"
          :alt="slide.alt"
          class="mf-hero-carousel-slide"
          :class="{ active: i === current }"
          width="960"
          height="540"
          decoding="async"
          :loading="i === 0 ? 'eager' : 'lazy'"
        />
      </div>

      <div class="mf-hero-carousel-shine" aria-hidden="true" />
      <div class="mf-hero-carousel-vignette" aria-hidden="true" />

      <button
        type="button"
        class="mf-hero-carousel-nav mf-hero-carousel-nav--prev"
        aria-label="上一张"
        @click="prev"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M14.5 6.5 9 12l5.5 5.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        class="mf-hero-carousel-nav mf-hero-carousel-nav--next"
        aria-label="下一张"
        @click="next"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M9.5 6.5 15 12l-5.5 5.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="mf-hero-carousel-footer">
        <p class="mf-hero-carousel-caption">{{ slides[current].alt }}</p>
        <div class="mf-hero-carousel-controls">
          <span class="mf-hero-carousel-counter" aria-hidden="true">{{ counter }}</span>
          <div class="mf-hero-carousel-dots" role="tablist" aria-label="切换截图">
            <button
              v-for="(slide, i) in slides"
              :key="slide.src"
              type="button"
              role="tab"
              class="mf-hero-carousel-dot"
              :class="{ active: i === current }"
              :aria-selected="i === current"
              :aria-label="slide.alt"
              @click="goTo(i)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
