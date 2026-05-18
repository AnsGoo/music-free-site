<script setup lang="ts">
import { computed, toValue } from "vue";
import { useData, withBase } from "vitepress";
import HomeFeatureIcon from "./HomeFeatureIcon.vue";

export type FeatureIconKey = "library" | "scraper" | "plugin";

export type MfFeature = {
  iconKey: FeatureIconKey;
  title: string;
  details: string;
  link?: string;
  linkText?: string;
};

const { frontmatter } = useData();

const features = computed(
  () => (toValue(frontmatter).mfFeatures ?? []) as MfFeature[],
);
</script>

<template>
  <section v-if="features.length" class="mf-features">
    <div class="mf-features-grid">
      <component
        :is="feature.link ? 'a' : 'article'"
        v-for="feature in features"
        :key="feature.title"
        class="mf-feature-card"
        :href="feature.link ? withBase(feature.link) : undefined"
      >
        <HomeFeatureIcon :name="feature.iconKey" />
        <h3 class="mf-feature-title">{{ feature.title }}</h3>
        <p class="mf-feature-details">{{ feature.details }}</p>
        <span v-if="feature.link && feature.linkText" class="mf-feature-link">
          {{ feature.linkText }}
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <path
              d="M5 3.5 10.5 8 5 12.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </component>
    </div>
  </section>
</template>
