// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from './locales/en';
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
