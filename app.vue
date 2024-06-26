<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }},{{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  const { data: users, error } = await useFetch('https://jsonplaceholder.typicode.com/usersssssss')
  // console.log(error)
  if(error.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found'})
  }
</script>