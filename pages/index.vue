<template>
    <div>
        <p v-if="toggle">hello</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
          // toggleの初期値をfalseに設定、trueにすると表示される
          toggle: false
        }
    }
}
</script>
