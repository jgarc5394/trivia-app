<!-- eslint-disable prettier/prettier -->
<script setup>
    import MainScore from '@/components/MainScore.vue'
</script>

<template>
  <main>
    <div class="card">
      <RouterView />
    </div>
  </main> 
  <MainScore />
</template>

<style lang="postcss" scoped>
  main {
    @apply flex h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-200 to-red-600;
    & .card {
      @apply flex h-5/6 min-h-fit w-11/12 flex-col items-center gap-16 overflow-auto rounded-lg bg-white p-8 shadow-lg;
    }
  }
</style>