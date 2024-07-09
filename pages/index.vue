<template>
    <div>
      <ul>
        <!-- valueでオブジェクトの値を取得 -->
        <li v-for="value in user" :key="value">{{ value }}</li>
      </ul>
      <ul>
        <!-- keyでオブジェクトのキーも取得できる -->
        <!-- 第一引数にvalue, 第二引数にkeyを指定することで、キーと値を取得できる -->
        <li v-for="(value, key) in user" :key="value">{{ key }}: {{ value }}</li>
      </ul>
      <ul>
        <!-- 任意の変数名を指定することも可能 -->
        <li v-for="(v, k) in user" :key="v">{{ v }}: {{ k }}</li>
      </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
          user: {
            // key: value の形でデータを記述
            firstName: 'John',
            lastName: 'Doe',
            age: 25
          }
        }
    }
}
</script>
