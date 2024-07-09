<template>
    <div>
      <ol>
        <!-- 単数形 in 複数形とすることで配列だと認識しやすくなる -->
        <!-- key="color" は、v-for でループする要素に一意のキーを指定しておく必要がある -->
        <li v-for="color in colors" :key="color">{{ color }}</li>
      </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {
          colors: ['red', 'blue', 'green', 'yellow', 'purple']
        }
    }
}
</script>
