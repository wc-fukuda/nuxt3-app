<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="counterStore.countUp">+</button>
    <button @click="counterStore.countDown">-</button>
    <button @click="counterStore.Reset">reset</button>
  </div>
</template>

<script setup>
  const counterStore = useCounterState();
  const { counter } = counterStore;
</script>