Vue.component('chat', {
  template: `
  <div>
    <q2 v-if="q2box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:simpleQue="simpleQue">
    </q2>
    <q2 v-if="q3box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:doubleQue="doubleQue">
    </q2>
    <q2 v-if="q4box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:simpleQue="simpleQue">
    </q2>
    <q2 v-if="q5box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:simpleQue="simpleQue">
    </q2>
    <q2 v-if="q6box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:multiQue="multiQue">
    </q2>
    <q2 v-if="q7box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:multiQue="multiQue">
    </q2>
    <q2 v-if="q8box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:multiQue="multiQue">
    </q2>
    <q2 v-if="q9box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:multiQue="multiQue">
    </q2>
    <q2 v-if="q10box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:simpleQue="simpleQue">
    </q2>
    <q2 v-if="q11box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:simpleQue="simpleQue">
    </q2>
    <pref v-if="prefShow && typeof questions !== 'undefined'"
        v-bind:region="region"
        v-bind:prefId="prefId"
        v-on:prefSelect="prefSelect"
        v-on:multiQue="multiQue">
    </pref>
  </div>
  `,
  components: {
    'q2': q2,
    'pref': pref
  },
  props: ['q2box', 'noDom', 'icon', 'loadingAnimation'],
  data: function () {
    return {
      questions: [],
      num: 0,
      q3box: false,
      q4box: false,
      q5box: false,
      q6box: false,
      q7box: false,
      q8box: false,
      q9box: false,
      q10box: false,
      q11box: false,
      prefShow: false,
      region: true,
      prefId: ''
    }
  },
  /*-------------------------
    質問を読み込む
  -------------------------*/
  created: async function () {
    const res = await fetch('../実務課題07/js/questions.json');
    const items = await res.json();
    this.questions = items;
  },
  methods: {
    /*-------------------------
      質問のみ
    -------------------------*/
    simpleQue: function (queNum, ansNum, gobi, question) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');
      // ボタンを消す
      this.btnsNoDisp(chatbox[queNum]);

      // メッセージ１
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 0, `${ans[ansNum].innerHTML}${gobi}`, 500)
      // メッセージ２＋次の質問を表示＋自動スクロール
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 0, question, 2500, () => this.nextQue(queNum), queNum)
    },
    /*-------------------------
      メッセージ＋質問
    -------------------------*/
    multiQue: function (queNum, ansNum, gobi, msg, question) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');
      // ボタンを消す
      this.btnsNoDisp(chatbox[queNum]);

      // メッセージ１
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 0, `${ans[ansNum].innerHTML}${gobi}`, 500)
      // メッセージ２
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 0, msg, 2500)
      // メッセージ３＋次の質問を表示＋自動スクロール
      // 最後の場合は次の質問は実行しない
      if (queNum === 11) {
        this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 0, question, 5000)
      } else {
        this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 0, question, 5000, () => this.nextQue(queNum), queNum)
      }
    },
    /*-------------------------
      質問＋メッセージ＋質問
    -------------------------*/
    doubleQue: function (queNum, ansNum, gobi, question1, msg1, question2) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');
      // ボタンを消す
      this.btnsNoDisp(chatbox[queNum]);

      // メッセージ１
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 0, `${ans[ansNum].innerHTML}${gobi}`, 500)
      // メッセージ２
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 0, question1, 2500)
      // メッセージ３
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 1, msg1, 5000)
      // メッセージ４＋次の質問を表示＋自動スクロール
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 0, question2, 7500, () => this.nextQue(queNum), queNum)
    },
    /*-------------------------
      ボタン非表示
    -------------------------*/
    btnsNoDisp: function (parent) {
      return new Promise(resolve => {
        setTimeout(() => {
          let btns = document.querySelector('.chatbox .quiestion')
          parent.removeChild(btns)
          resolve();
        }, 500)
      })
    },
    /*-------------------------
      次の質問を表示
    -------------------------*/
    nextQue: function (num, sec) {
      return new Promise(resolve => {
        let self = this;
        setTimeout(() => {
          if (num === '1') {
            self.q3box = true;
          } else if (num === '2') {
            self.q4box = true;
          } else if (num === '3') {
            self.q5box = true;
          } else if (num === '4') {
            self.q6box = true;
          } else if (num === '5') {
            self.q7box = true;
          } else if (num === '6') {
            self.q8box = true;
          } else if (num === '7') {
            self.q9box = true;
          } else if (num === '8') {
            self.q10box = true;
          } else if (num === '9') {
            self.q11box = true;
          } else if (num === '10') {
            self.prefShow = true;
            return;
          }
          // 質問の表示を繰り返したい
          self.num = num;
        }, 2000)
        resolve();
      })
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
