<script setup lang="ts"></script>

<template>
  <div class="main-page">
    <button class="main-page__button" style="cursor: pointer">Кнопка</button>
  </div>
</template>

<style scoped lang="scss">
  .main-page {
    color: var(--tg-theme-text-color);
    // .main-page__button
    &__button {
      @apply w-full p-[20px] cursor-pointer bg-[--tg-theme-button-color] text-[--tg-theme-text-color] relative z-[99999999999999999999999999999];
      pointer-events: all;
      visibility: visible;
      opacity: 1;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
