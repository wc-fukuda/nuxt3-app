<template>
  <div>
    {{ title }}
    <button @click="titleState.changeTitle('Hello Nuxt3!')">chengeTitle</button>
  </div>
</template>

<script setup>
  const titleState = useTitle()
  const { title } = titleState
</script>