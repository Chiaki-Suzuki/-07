<template>
  <div class="qbox">
    <Question
        v-for="n in newbox"
        v-bind:key="n"
        v-if="q2box"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </Question>
    <Pref
        v-if="prefShow"
        v-on:newMsg="newMsg">
    </Pref>
  </div>
</template>

<script>
import Question from "../components/Question.vue"
import Pref from "../components/Pref.vue"

import { ref } from 'vue'

import { addMsg } from '../util-functions/message'

export default {
  name: 'Chat',
  props: ['q2box', 'noDom', 'icon', 'loadingAnimation'],
  components: {
    Question,
    Pref
  },
  setup(props) {
    let { msg } = addMsg();
    /*-------------------------
      メッセージを表示
    -------------------------*/
    let newMsg = function (queNum, ansNum, gobi, msg1, msg2, msg3) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');

      // ボタンを消す
      btnsNoDisp(chatbox[queNum]);

      // メッセージ１
      msg(chatbox[queNum], props.noDom, 'user', 0, `${ans[ansNum].innerHTML}${gobi}`, 500)

      // メッセージ２まで
      if (msg2 === '' && msg2 === '') {
        // メッセージ２＋次の質問を表示＋自動スクロール
        msg(chatbox[queNum], props.icon, 'guide', 0, msg1, 2500, () => nextBox(queNum), queNum)
        return;
      }

      // メッセージ２
      msg(chatbox[queNum], props.icon, 'guide', 0, msg1, 2500)

      // メッセージ３まで
      if (msg3 === '') {
        if (queNum === 11) {
          msg(chatbox[queNum], props.noDom, 'noicon_guide', 0, msg2, 5000)
        } else {
          msg(chatbox[queNum], props.noDom, 'noicon_guide', 0, msg2, 5000, () => nextBox(queNum))
        }
        return;
      }

      // メッセージ３
      msg(chatbox[queNum], props.icon, 'guide', 1, msg2, 5000)
      // メッセージ４＋次の質問を表示＋自動スクロール
      msg(chatbox[queNum], props.noDom, 'noicon_guide', 0, msg3, 7500, () => nextBox(queNum))
    }
    /*-------------------------
      ボタン非表示
    -------------------------*/
    let btnsNoDisp = function (parent) {
      setTimeout(() => {
        let btns = document.querySelector('.chatbox .quiestion')
        parent.removeChild(btns)
      }, 500)
    }
    /*-------------------------
      次の質問を表示
    -------------------------*/
    let newbox = ref(1);
    let num = ref(0)

    let prefShow = ref(false)
    let nextBox = function (queNum) {
      setTimeout(() => {
        // 都道府県のボタン表示
        if (queNum === '10') {
          prefShow.value = true;
          return;
        }
        newbox.value++;

        num.value = queNum++;
      }, 2000)
    }

    return {
      newMsg,
      newbox,
      num,
      prefShow
    }
  }
}
</script>

<style>
</style>
