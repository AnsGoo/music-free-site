<script setup lang="ts">
import { computed } from "vue";
import { useData, withBase } from "vitepress";

const props = defineProps<{
  name: "library" | "scraper" | "plugin";
}>();

const { isDark } = useData();

const src = computed(() => {
  const suffix = isDark.value ? "-dark" : "";
  return withBase(`/icons/feature-${props.name}${suffix}.svg`);
});
</script>

<template>
  <div class="mf-feature-icon" aria-hidden="true">
    <img :src="src" alt="" width="32" height="32" decoding="async" />
  </div>
</template>
