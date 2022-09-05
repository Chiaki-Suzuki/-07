Vue.component('chat', {
  template: `
  <div>
    <q2 v-if="q2box"
        v-on:simpleQue="simpleQue">
    </q2>
    <q3 v-if="q3box"
        v-on:multiQue="multiQue">
    </q3>
    <q4 v-if="q4box"
        v-on:simpleQue="simpleQue">
    </q4>
  </div>
  `,
  components: {
    'q2': q2,
    'q3': q3,
    'q4': q4,
  },
  props: ['q2box', 'noDom', 'icon', 'loadingAnimation'],
  data: function () {
    return {
      q3box: false,
      q4box: false,
    }
  },
  methods: {
    /*-------------------------
      質問のみ
    -------------------------*/
    simpleQue: function (queNum, ansNum, question) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');
      // ボタンを消す
      this.btnsNoDisp(chatbox[queNum]);

      // メッセージ１
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 500, 0, 1500, `${ans[ansNum].innerHTML}です。`)
      // メッセージ２
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 2500, 0, 4000, question)

      // 次の質問を表示
      this.nextQue(queNum, 5000)
      // 自動スクロール
      this.$emit('auto-scroll', 5000)
    },
    /*-------------------------
      メッセージ＋質問
    -------------------------*/
    multiQue: function (queNum, ansNum, msg1, msg2, question) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');
      // ボタンを消す
      this.btnsNoDisp(chatbox[queNum]);

      // メッセージ１
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 500, 0, 1500, `${ans[ansNum].innerHTML}です。`)
      // メッセージ２
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 2500, 0, 4000, msg1)
      // メッセージ３
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 5000, 1, 6500, msg2)
      // メッセージ４
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 7500, 0, 9000, question)

      // 次の質問を表示
      this.nextQue(queNum, 10000)
      // 自動スクロール
      this.$emit('auto-scroll', 10000)
    },
    /*-------------------------
      ボタン非表示
    -------------------------*/
    btnsNoDisp: function (parent) {
      setTimeout(() => {
        let btns = document.querySelector('.chatbox .quiestion')
        parent.removeChild(btns)
      }, 500)
    },
    /*-------------------------
      次の質問を表示
    -------------------------*/
    nextQue: function (num, sec) {
      setTimeout(() => {
        if (num === 1) {
          this.q3box = true;
        } else if (num === 2) {
          this.q4box = true;
        }
      }, sec)
    }
  }
  })
