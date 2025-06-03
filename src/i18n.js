// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from './locales/en'; // 你可以選擇語言包的放置位置，則這邊須注意匯入的路徑
import zh from './locales/zh';

const i18n = createI18n({
  legacy: false, // 默認值是 false，啟用 Composition API
  locale: 'en',  // 默認語言
  messages: {
    en,
    zh
  }, // 語言包
});

export default i18n;
