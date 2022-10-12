Vue.component('chat', {
  template: `
  <div class="qbox">
    <question
        v-for="n in newbox"
        v-bind:key="n"
        v-if="q2box"
        v-bind:question="questions"
        v-bind:num="num"
        v-bind:newbox="newbox"
        v-on:newMsg="newMsg">
    </question>
    <pref v-if="prefShow && typeof questions !== 'undefined'"
        v-bind:region="region"
        v-bind:prefId="prefId"
        v-on:prefSelect="prefSelect"
        v-on:newMsg="newMsg">
    </pref>
  </div>
  `,
  components: {
    'question': question,
    'pref': pref
  },
  props: ['q2box', 'noDom', 'icon', 'loadingAnimation'],
  data: function () {
    return {
      questions: [],
      newbox: 1,
      num: 0,
      prefShow: false,
      region: true,
      prefId: ''
    }
  },
  /*-------------------------
    質問を読み込む
  -------------------------*/
  created: async function () {
    const res = await fetch('../js/questions.json');
    const items = await res.json();
    this.questions = items;
  },
  methods: {
    /*-------------------------
      メッセージを表示
    -------------------------*/
    newMsg: function (queNum, ansNum, gobi, msg1, msg2, msg3) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');

      // ボタンを消す
      this.btnsNoDisp(chatbox[queNum]);

      // メッセージ１
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 0, `${ans[ansNum].innerHTML}${gobi}`, 500)

      // メッセージ２まで
      if (msg2 === '' && msg2 === '') {
        // メッセージ２＋次の質問を表示＋自動スクロール
        this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 0, msg1, 2500, () => this.nextBox(queNum), queNum)
        return;
      }

      // メッセージ２
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 0, msg1, 2500)

      // メッセージ３まで
      if (msg3 === '') {
        if (queNum === 11) {
          this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 0, msg2, 5000)
        } else {
          this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 0, msg2, 5000, () => this.nextBox())
        }
        return;
      }

      // メッセージ３
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 1, msg2, 5000)
      // メッセージ４＋次の質問を表示＋自動スクロール
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 0, msg3, 7500, () => this.nextBox())
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
    nextBox: function (num) {
      setTimeout(() => {
        // 都道府県のボタン表示
        if (num === '10') {
          this.prefShow = true;
          return;
        }
        this.newbox++;
        this.num++;
      }, 2000)
    },
    /*-------------------------
      都道府県
    -------------------------*/
    prefSelect: function (num) {
      this.region = false;
      this.prefId = num;
    }
  }
  })
