<template>
    <div id="app">
        <!--  dataプロパティの値を表示 -->
        <h1>{{ message }}</h1>
        <p>{{ count }}</p>
        <!--  userオブジェクトの値を表示 -->
        <p>{{ user.name }}</p>
        <p>{{ user.age }}</p>
        <p>{{ user.prefecture }}</p>
        <!--  colors配列の値を表示 -->
        <p>{{ colors[0] }}</p>
        <!--  colors配列の値を繰り返し表示 -->
        <ul>
            <li v-for="color in colors" :key="color">{{ color }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello, Vue3!',
            count: 99,
            user: {
                name: 'John Doe',
                age: 30,
                prefecture: 'Tokyo'
            },
            colors: ['red', 'blue', 'green']
        }
    }
}
</script>
