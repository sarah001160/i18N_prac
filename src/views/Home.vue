<script>
</script>
<template>
  <div class="container">
    <p>
      什麼? i18N 不會幫你翻譯內容耶...他只是幫你管理翻譯好的文本，等你要看不同語系的時候再去操作，他再幫你切換...
      我有點傻眼哈哈，我一直以為 i18N 會自動翻譯(這是個迷思)。結果 i18N 並不會自動幫你翻譯內文，內文翻譯靠人類提供。
    </p>
    <RouterLink to="/lan">go to Lan.vue</RouterLink>
    <RouterView />
  </div>
</template>
<style scoped lang="sass">
.container
  padding: 1.5em

</style>