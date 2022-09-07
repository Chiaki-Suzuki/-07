Vue.component('chat', {
  template: `
  <div>
    <question v-if="q2box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </question>
    <question v-if="q3box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </question>
    <question v-if="q4box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </question>
    <question v-if="q5box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </question>
    <question v-if="q6box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </question>
    <question v-if="q7box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </question>
    <question v-if="q8box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </question>
    <question v-if="q9box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </question>
    <question v-if="q10box"
        v-bind:question="questions"
        v-bind:num="num"
        v-on:newMsg="newMsg">
    </question>
    <question v-if="q11box"
        v-bind:question="questions"
        v-bind:num="num"
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
      メッセージを表示
    -------------------------*/
    newMsg: function (id, queNum, ansNum, gobi, msg1, msg2, msg3) {
      let chatbox = document.querySelectorAll('.chatbox');
      let ans = document.querySelectorAll('.chatbox .quiestion button');
      // ボタンを消す
      this.btnsNoDisp(chatbox[queNum]);

      // メッセージ１
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'user', 0, `${ans[ansNum].innerHTML}${gobi}`, 500)

      // メッセージ２まで
      if (msg2 === '' && msg2 === '') {
        // メッセージ２＋次の質問を表示＋自動スクロール
        this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 0, msg1, 2500, () => this.nextQue(queNum), queNum)
        return;
      }

      // メッセージ２
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 0, msg1, 2500)

      // メッセージ３まで
      if (msg3 === '') {
        if (queNum === 11) {
          this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 0, msg2, 5000)
        } else {
          this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 0, msg2, 5000, () => this.nextQue(queNum), queNum)
        }
        return;
      }

      // メッセージ３
      this.$emit('child-msg', chatbox[queNum], this.icon, 'guide', 1, msg2, 5000)
      // メッセージ４＋次の質問を表示＋自動スクロール
      this.$emit('child-msg', chatbox[queNum], this.noDom, 'noicon_guide', 0, msg3, 7500, () => this.nextQue(queNum), queNum)
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
          return;
        }
        // 質問の表示を繰り返したい
        this.num = num;
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
