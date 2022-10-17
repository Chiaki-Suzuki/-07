<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="changeMsg">Change</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  setup() {
    let msg = ref('Hello Vue!');
    let changeMsg = () => {
      msg.value = 'こんにちは、Vue！'
    }

    return {
      msg,
      changeMsg
    }
  }
}
</script>

<style>
</style>
