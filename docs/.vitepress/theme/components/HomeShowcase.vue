<script setup lang="ts">
import { computed, toValue } from "vue";
import { useData, withBase } from "vitepress";

export type MfShowcaseItem = {
  img: string;
  alt: string;
  title: string;
  details: string;
  link: string;
  linkText: string;
};

export type MfShowcase = {
  title?: string;
  lead?: string;
  items: MfShowcaseItem[];
};

const { frontmatter } = useData();

const showcase = computed(() => {
  const raw = toValue(frontmatter).mfShowcase as MfShowcase | undefined;
  return {
    title: raw?.title ?? "功能掠影",
    lead:
      raw?.lead ??
      "从曲库管理到插件扩展，一览 MusicFree 的核心界面与典型使用场景。",
    items: raw?.items ?? [],
  };
});
</script>

<template>
  <section v-if="showcase.items.length" class="mf-showcase">
    <h2>{{ showcase.title }}</h2>
    <p v-if="showcase.lead" class="mf-lead">{{ showcase.lead }}</p>
    <div class="mf-cards">
      <a
        v-for="item in showcase.items"
        :key="item.title"
        class="mf-card"
        :href="withBase(item.link)"
      >
        <div class="mf-card-media">
          <img
            :src="withBase(item.img)"
            :alt="item.alt"
            width="960"
            height="540"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="mf-card-body">
          <h3>{{ item.title }}</h3>
          <p>{{ item.details }}</p>
          <span class="mf-card-cta">
            {{ item.linkText }}
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
        </div>
      </a>
    </div>
  </section>
</template>
