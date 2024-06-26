<template>
  <div>
    <p>{{ users[0].id }}{{ users[0].name }}</p>
    <p>{{ users }}</p>
  </div>
</template>

<script setup>
  const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>