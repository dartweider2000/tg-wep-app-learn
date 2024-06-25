import "@types/telegram-web-app/index.d.ts";

export default defineNuxtPlugin(() => {
  const tg = window.Telegram.WebApp;

  return {
    provide: {
      tg,
    },
  };
});

declare module "#app" {
  interface NuxtApp {
    $tg: WebApp;
  }
}
