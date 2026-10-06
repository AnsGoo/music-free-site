<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<template>
  <div class="mf-hero-brand">
    <img
      class="mf-hero-brand__mark"
      :src="withBase('/logo.svg')"
      alt=""
      width="56"
      height="56"
      decoding="async"
    />
    <span class="mf-hero-brand__text">Music Free</span>
  </div>
</template>
