Vue.component('q4', {
  template: `
  <div class="chatbox q4" v-if="q4">
      <div class="quiestion col3">
          <button v-on:click="toQ4(0)">広さ重視</button>
          <button v-on:click="toQ4(1)">節水重視</button>
          <button v-on:click="toQ4(2)">特になし</button>
      </div>
  </div>
  `,
  props: ['q4', 'noDom', 'icon', 'loadingAnimation'],
  methods: {
    toQ4: function (num) {
      let chatbox = document.querySelector('.chatbox.q4');
      let ans = document.querySelectorAll('.chatbox.q4 .quiestion button');
      // ボタンを消す
      setTimeout(this.btnsNoDisp, 500);

      // メッセージ１
      this.$emit('child-msg', chatbox, this.noDom, 'user', 500, 0, 1500, `${ans[num].innerHTML}です。`)
      // メッセージ２
      this.$emit('child-msg', chatbox, this.icon, 'guide', 2500, 0, 4000, 'お湯の冷めにくい、保温効果のある浴槽をご希望されますか？')

      // 次の質問を表示
      this.$emit('next-question', 5000)
      // 自動スクロール
      this.$emit('auto-scroll', 5000)
    },
    // ボタン非表示
    btnsNoDisp: function () {
      let chatbox = document.querySelector('.chatbox.q4');
      let btns = document.querySelector('.chatbox.q4 .quiestion')
      chatbox.removeChild(btns)
    }
  }
  })
