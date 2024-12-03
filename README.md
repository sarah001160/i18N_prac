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

欸 那我可以用 i18N 翻譯會議記錄耶，就順便把我的筆記全部記在一起。但介面我想做成對照組。
公司章程也是可以翻譯~自己覺得啦。規劃一下，然後把它做出來吧。
