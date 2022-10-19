<template>
  <div>
    <h1 ref="hello">{{ msg }}</h1>
    <button @click="changeMsg">Change</button>
    {{ hoge }}
  </div>
</template>

<script>
import { ref, onMounted, h, defineComponent } from 'vue'
import { test } from '../util-functions/test'

export default {
  name: 'HelloWorld',
  setup(props, context) {
    let msg = ref('Hello Vue!');
    let changeMsg = () => {
      msg.value = 'こんにちは、Vue！'
    }

    let hello = ref(null)

    let render = () => h('div', 'hello');
    let hoge = defineComponent({ render })

    onMounted(() => {
      // console.log(hoge)

      let { testFunc } = test()
      testFunc()
    })

    return {
      msg,
      changeMsg,
      hello,
      hoge,
    }
  }
}
</script>

<style>
</style>
