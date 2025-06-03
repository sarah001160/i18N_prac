# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

安裝

npm create vite@latest

npm install vue-router

建立檔案、設定(待補筆記)

npm i unplugin-auto-import -D

到 vite.config.js 做設定(待補筆記)

npm install sass

## 嘗試 多國語系練習 i18N

npm install vue-i18n

什麼? i18N 不會幫你翻譯內容耶...他只是幫你管理翻譯好的文本，等你要看不同語系的時候再去操作，他再幫你切換。內文翻譯靠人類提供。

每個語系各別存檔。可存在 src/locales/{語言名稱}.js
新增字典檔(手動輸入)
把 json 檔放在 /public/locales/{語言名稱}/translation.json

參考文章:https://hackmd.io/@-i6_zNcHTyKr0pJcgPSVRw/B14YYqeIp

在模板中使用翻譯： 在你的 Vue 組件中，使用 $t 函數來顯示翻譯

```
  <p>{{ $t('message.hello') }}</p>
```

----
## 安裝 vue-i18
```npm install vue-i18```

## 設定
- ```main.js``` 註冊 i18n
- locale 資料夾內放翻譯過的文件，像是 en.js、zh.js、jp.js
- 在 rc 資料夾內建立 i18n.js 檔案，裏頭建立 I18n
- 在組件內使用切換語系 usei18n

#### main.js 註冊 i18n
```js
// main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import i18n from './i18n';

const app = createApp(App);
app.use(router);
app.use(i18n);// 註冊
app.mount('#app');

```

#### src/i18n.js 建立 I18n
```js
// src/i18n.js
import { createI18n } from 'vue-i18n';
// 你可以選擇語言包的放置位置，這邊匯入時要注意路徑
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

```

#### 在組件內使用切換語系 useI18n
```js
// Lan.vue
<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

function switchToChinese() {
  locale.value = 'zh';  // 切換到中文
}
function switchToEnglish() {
  locale.value = 'en';  // 切換到英文
}

</script>
<template>
  <div class="pink">
    <h1>切換語系練習</h1>
    <p>{{ $t('message.hello') }}</p>
    
    <!-- 在模板中使用翻譯： 在你的 Vue 組件中，使用 $t 函數來顯示翻譯 -->
    <button @click="switchToChinese()">chinese</button>
    <button @click="switchToEnglish()">English</button>
  </div>
</template>

```