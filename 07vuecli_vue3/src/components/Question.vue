<template>
  <div class="chatbox">
    <div :class="[quiestion, {col3: isCol3}]" v-if="firstShow">
      <button v-on:click="$emit('newMsg', question[num].len, 0, question[num].ending, question[num].msg1, question[num].msg2, question[num].msg3)">{{ question[num].choice1 }}</button>
      <button v-on:click="$emit('newMsg', question[num].len, 1, question[num].ending, question[num].msg1, question[num].msg2, question[num].msg3)">{{ question[num].choice2 }}</button>
      <button v-on:click="$emit('newMsg', question[num].len, 2, question[num].ending, question[num].msg1, question[num].msg2, question[num].msg3)" v-if="isCol3">{{ question[num].choice3 }}</button>
    </div>
  </div>
</template>

<script>
import question from "../assets/questions.json"

import { onMounted } from 'vue'

export default {
  name: 'Question',
  props: ['num'],
  data: () => {
    return {
      question: question
    }
  },
  setup(props, context) {
    console.log(props.num)
    // 選択肢の数によってclassを変更する
    let quiestion = 'quiestion';
    let isCol3 = true;
    if (props.num == 1) {
      isCol3 = false;
    }

    // 最初のメッセージの場合はボタンを表示させない
    let firstShow = true;
    /*-------------------------
      最初のメッセージ
    -------------------------*/
    if (props.num === 0) {
      firstShow = false;
      // メッセージ表示
      onMounted(() => {
        context.emit('newMsg', question[0].len, null, question[0].ending, question[0].msg1, question[0].msg2, question[0].msg3)
      })
    }

    return {
      quiestion,
      isCol3,
      firstShow
    }
  },
}
</script>

<style>
</style>
