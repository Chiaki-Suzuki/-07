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
    <pref v-if="prefShow"
        v-bind:question="questions"
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
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 500, 0, 1500, `${ans[ansNum].innerHTML}${gobi}`)
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
    multiQue: function (queNum, ansNum, gobi, msg, question) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');
      // ボタンを消す
      this.btnsNoDisp(chatbox[queNum]);

      // メッセージ１
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 500, 0, 1500, `${ans[ansNum].innerHTML}${gobi}`)
      // メッセージ２
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 2500, 0, 4000, msg)
      // メッセージ３
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 5000, 0, 6500, question)

      // 最後の場合は実行しない
      if (queNum === 11) {
        return;
      } else {
        // 次の質問を表示
        this.nextQue(queNum, 7500)
        // 自動スクロール
        this.$emit('auto-scroll', 7500)
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
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 500, 0, 1500, `${ans[ansNum].innerHTML}${gobi}`)
      // メッセージ２
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 2500, 0, 4000, question1)
      // メッセージ３
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 5000, 1, 6500, msg1)
      // メッセージ４
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 7500, 0, 9000, question2)

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
        if (num === '1') {
          this.q3box = true;
        } else if (num === '2') {
          this.q4box = true;
        } else if (num === '3') {
          this.q5box = true;
        } else if (num === '4') {
          this.q6box = true;
        } else if (num === '5') {
          this.q7box = true;
        } else if (num === '6') {
          this.q8box = true;
        } else if (num === '7') {
          this.q9box = true;
        } else if (num === '8') {
          this.q10box = true;
        } else if (num === '9') {
          this.q11box = true;
        } else if (num === '10') {
          this.prefShow = true;
        }
        // 質問の表示を繰り返したい
        this.num = num;
      }, sec)
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
