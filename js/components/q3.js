Vue.component('q3', {
  template: `
  <div class="chatbox q3" v-if="q3">
      <div class="quiestion col3">
          <button v-on:click="toQ3(0)">2畳未満</button>
          <button v-on:click="toQ3(1)">2畳以上</button>
          <button v-on:click="toQ3(2)">わからない</button>
      </div>
  </div>
  `,
  props: ['q3', 'noDom', 'icon', 'loadingAnimation'],
  methods: {
    toQ3: function (num) {
      let chatbox = document.querySelector('.chatbox.q3');
      let ans = document.querySelectorAll('.chatbox.q3 .quiestion button');
      // ボタンを消す
      setTimeout(this.btnsNoDisp, 500);

      // メッセージ１
      this.$emit('child-msg', chatbox, this.noDom, 'user', 500, 0, 1500, `${ans[num].innerHTML}です。`)
      // メッセージ２
      this.$emit('child-msg', chatbox, this.icon, 'guide', 2500, 0, 4000, '浴槽まわりの希望をお伺いします。')
      // メッセージ３
      this.$emit('child-msg', chatbox, this.icon, 'guide', 5000, 1, 6500, '湯船につかる頻度が多い場合は、浴槽の形が重要です。')
      // メッセージ４
      this.$emit('child-msg', chatbox, this.noDom, 'noicon_guide', 7500, 0, 9000, '浴槽の形にこだわりはありますか？')

      // 次の質問を表示
      this.$emit('next-question', 10000)
      // 自動スクロール
      this.$emit('auto-scroll', 10000)
    },
    // ボタン非表示
    btnsNoDisp: function () {
      let chatbox = document.querySelector('.chatbox.q3');
      let btns = document.querySelector('.chatbox.q3 .quiestion')
      chatbox.removeChild(btns)
    }
  }
  })
