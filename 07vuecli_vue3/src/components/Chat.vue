<template>
  <div class="qbox">
    <Question
        v-for="n in newbox"
        v-bind:key="n"
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
  components: {
    Question,
    Pref
  },
  setup(props) {
    let noDom = '';
    let icon = `
    <div class="icon"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
    `

    let { msg } = addMsg();
    /*-------------------------
      メッセージを表示
    -------------------------*/
    let newMsg = async function (queNum, ansNum, gobi, msg1, msg2, msg3) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');

      // 最初のメッセージの場合はここをスルー
      if (ansNum !== null) {
        // ボタンを消す
        await btnsNoDisp(chatbox[queNum]);

        // メッセージ１
        await msg(chatbox[queNum], noDom, 'user', 0, `${ans[ansNum].innerHTML}${gobi}`, 500)
      }

      // メッセージ２まで
      if (msg2 === '' && msg2 === '') {
        // メッセージ２＋次の質問を表示＋自動スクロール
        await msg(chatbox[queNum], icon, 'guide', 0, msg1, 2000, () => nextBox(queNum), queNum)
        return;
      }

      // メッセージ２
      // 最初のメッセージの場合はタイムラグなしで表示
      if (queNum === '1') {
        await msg(chatbox[queNum], icon, 'guide', 0, msg1, 0)
      } else {
        await msg(chatbox[queNum], icon, 'guide', 0, msg1, 2000)
      }

      // 最初の質問が「しっかり計算」の場合
      if (queNum === '2' && ansNum === 1) {
        // メッセージ３
        await msg(chatbox[queNum], noDom, 'noicon_guide', 0, 'マンション・アパートのお風呂リフォーム相場は', 2000);
        // メッセージ４
        let { souba } = addMsg();
        await souba(chatbox[queNum]);
        // メッセージ５
        await msg(chatbox[queNum], noDom, 'noicon_guide', 1, 'あなたの費用を、データをもとにしっかり計算します。', 5000);
        // メッセージ６
        await msg(chatbox[queNum], noDom, 'noicon_guide', 2, msg3, 2000, () => nextBox(queNum))
        return;
      }
      // メッセージ３まで
      if (msg3 === '') {
        // 都道府県選択時は次の質問に行かないようにする
        if (queNum === 13) {
          await msg(chatbox[queNum], noDom, 'noicon_guide', 0, msg2, 2000)
        } else {
          await msg(chatbox[queNum], noDom, 'noicon_guide', 0, msg2, 2000, () => nextBox(queNum))
        }
        return;
      }

      // メッセージ３
      await msg(chatbox[queNum], icon, 'guide', 1, msg2, 2000)
      // メッセージ４＋次の質問を表示＋自動スクロール
      await msg(chatbox[queNum], noDom, 'noicon_guide', 0, msg3, 2000, () => nextBox(queNum))

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
        if (queNum === '12') {
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
