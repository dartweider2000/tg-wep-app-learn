<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="layout__content">
      <slot />
    </div>
    <TabBar class="layout__tab-bar" />
  </div>
</template>

<style scoped lang="scss">
  .layout {
    height: 100dvh;
    background: var(--tg-theme-bg-color);
    display: grid;
    grid-template: 1fr var(--tab-bar-height) / 1fr;
    // .layout__content
    &__content {
    }
    // .layout__tab-bar
    &__tab-bar {
    }
  }
</style>
