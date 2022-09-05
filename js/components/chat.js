Vue.component('chat', {
  template: `
  <div class="chatbox q2" v-if="q2">
      <div class="quiestion col3">
          <button v-on:click="toQ3(0)">ユニットバス</button>
          <button v-on:click="toQ3(1)">タイル貼り</button>
          <button v-on:click="toQ3(2)">わからない</button>
      </div>
  </div>
  `,
  props: ['q2', 'noDom', 'icon', 'loadingAnimation'],
  data: function () {
    return {
      isQ3Show: false
    }
  },
  methods: {
    toQ3: function (num) {
      let chatbox = document.querySelector('.chatbox.q2');
      let ans = document.querySelectorAll('.chatbox.q2 .quiestion button');
      // ボタンを消す
      setTimeout(this.btnsNoDisp, 500);

      // メッセージ１
      this.$emit('child-msg', chatbox, this.noDom, 'user', 500, 1, 1500, `${ans[num].innerHTML}です。`)
      // メッセージ２
      this.$emit('child-msg', chatbox, this.icon, 'guide', 2500, 3, 4000, '希望されるお風呂の大きさは、どのくらいですか？')

      setTimeout(() => {
        this.isQ3Show = true;
        console.log(this.isQ3Show)
      }, 5000)
    },
    // ボタン非表示
    btnsNoDisp: function () {
      let chatbox = document.querySelector('.chatbox.q2');
      let btns = document.querySelector('.chatbox.q2 .quiestion')
      chatbox.removeChild(btns)
    }
  }
  })
