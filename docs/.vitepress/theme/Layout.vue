<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import HeroBrand from "./components/HeroBrand.vue";
import HeroCarousel from "./components/HeroCarousel.vue";
import HomeFeatures from "./components/HomeFeatures.vue";
import HomeShowcase from "./components/HomeShowcase.vue";

const Layout = DefaultTheme.Layout;
</script>

<template>
  <Layout>
    <template #home-hero-info-before>
      <HeroBrand />
    </template>
    <template #home-hero-image>
      <HeroCarousel />
    </template>
    <template #home-features-before>
      <HomeFeatures />
    </template>
    <template #home-features-after>
      <HomeShowcase />
    </template>
  </Layout>
</template>
