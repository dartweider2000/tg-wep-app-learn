<script setup lang="ts"></script>

<template>
  <div class="tab-bar">
    <NuxtLink class="tab-bar__link"> Дом </NuxtLink>
    <NuxtLink class="tab-bar__link"> Лента </NuxtLink>
  </div>
</template>

<style lang="scss">
  .tab-bar {
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    background: var(--tg-theme-bg-color);
    border: 1px solid var(--tg-theme-text-color);
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    // .tab-bar__link
    &__link {
      color: var(--tg-theme-text-color);
      @apply cursor-not-allowed;
    }
  }
</style>
