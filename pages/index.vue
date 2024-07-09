<template>
    <div>
        <button v-on:click="onclick">クリック</button>
        <p>{{ now }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
          // 初期値を設定する
          now: 'ここに現在時刻が表示されます'
        }
    },
    methods: {
      onclick: function() {
        // console.log('クリックされました')

        // 現在時刻を取得してnowに代入する
        this.now = new Date().toLocaleString()
        // thisはnowを持っているオブジェクトを指す
        console.log(this)
      }
    }
}
</script>
