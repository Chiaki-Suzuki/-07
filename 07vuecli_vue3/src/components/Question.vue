<template>
  <div class="chatbox">
    <div class="quiestion col3">
      <button v-on:click="$emit('newMsg', question[num].len, 0, question[num].ending, question[num].msg1, question[num].msg2, question[num].msg3)">{{ question[num].choice1 }}</button>
      <button v-on:click="$emit('newMsg', question[num].len, 1, question[num].ending, question[num].msg1, question[num].msg2, question[num].msg3)">{{ question[num].choice2 }}</button>
      <button v-on:click="$emit('newMsg', question[num].len, 2, question[num].ending, question[num].msg1, question[num].msg2, question[num].msg3)">{{ question[num].choice3 }}</button>
    </div>
  </div>
</template>

<script>
import question from "../assets/questions.json"

export default {
  name: 'Question',
  props: ['num'],
  data: () => {
    return {
      question: question
    }
  },
  setup(props) {
    console.log(props.num)
  },
}
</script>

<style>
</style>
