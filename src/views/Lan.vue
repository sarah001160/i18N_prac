<script setup>
const text = ref('i18N');
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

function switchToChinese() {
  locale.value = 'zh';  // 切換到中文
}
function switchToEnglish() {
  locale.value = 'en';  // 切換到英文
}
// 在模板中使用翻譯： 在你的 Vue 組件中，使用 $t 函數來顯示翻譯
</script>
<template>
  <div class="pink">
    This is Lan.vue
    {{ text }}練習!!
    <p>{{ $t('message.hello') }}</p>
    <button @click="switchToChinese()">chinese</button>
    <button @click="switchToEnglish()">English</button>
  </div>
</template>
<style lang="sass" scoped>
.pink
  background: pink
  width: 100%
  padding: 0.5em
button
  padding: 0.5em
  margin: 5px
</style>