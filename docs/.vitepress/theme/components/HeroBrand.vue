<script setup lang="ts">
import { computed } from "vue";
import { useData, withBase } from "vitepress";

const { isDark } = useData();

const src = computed(() =>
  withBase(isDark.value ? "/brand-wordmark-dark.svg" : "/brand-wordmark.svg"),
);
</script>

<template>
  <div class="mf-hero-brand">
    <img :src="src" alt="Music Free" width="320" height="58" />
  </div>
</template>
