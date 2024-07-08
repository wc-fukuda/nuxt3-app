<template>
  <h1>TODO</h1>
  <form @submit.prevent="addTask">
    <input v-model="newTask" name="addTask" autocomplete="off" type="text">
    <button>Add</button>
  </form>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="$event => deleteTask(index)">Delete</button>
    </li>
  </ul>
  <button @click="clearTask">All Clear</button>
</template>

<script setup>
  // cookieに保持するための記述
  const tasks = useCookie(
    // 第一引数 key
    'tasks',
    // 第二引数 options
    {
      default: () => []
    }
  )

  // 新しいタスクを追加するための記述
  const newTask = ref('')
  function addTask() {
    if(newTask.value.length >= 1){
      tasks.value.push(newTask.value)
    }
    newTask.value = ''
  }

  // タスクを削除するための記述
  function deleteTask(index) {
    tasks.value.splice(index, 1)
  }

  // 全てのタスクを削除するための記述
  function clearTask() {
    tasks.value = []
  }
</script>