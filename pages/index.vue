<template>
    <div>
        <p><input v-model="message" type="text"></p>
        <p><input v-model="message" type="text"></p>
        <!-- $dataと書くと、dataオブジェクトのreturnされた値が取得できる -->
        <pre>{{ $data }}</pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello, Vue.js!'
        }
    }
}
</script>
