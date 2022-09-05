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
  props: ['q2'],
  data: function () {
    return {
      noDOM: '',
      icon: `
      <div class="icon"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
      `,
      loadingAnimation: `
      <div class="comment">
        <div class="spinner-box">
          <div class="pulse-container">
            <span class="pulse-bubble pulse-bubble-1"></span>
            <span class="pulse-bubble pulse-bubble-2"></span>
            <span class="pulse-bubble pulse-bubble-3"></span>
          </div>
        </div>
      </div>
      `,
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
      this.msg(chatbox, this.noDOM, 'user', 500, 1, 1500, `${ans[num].innerHTML}です。`)
      // メッセージ２
      this.msg(chatbox, this.icon, 'guide', 2500, 3, 4000, '希望されるお風呂の大きさは、どのくらいですか？')

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
    },
    // メッセージ入力～表示
    msg: function (chatbox, icon, className, loadingSec, num, msgSec, msg) {
      // ローディング表示
      this.loading(chatbox, icon, className, loadingSec);
      // ローディング非表示
      this.noLoading(chatbox, className, num, msgSec);
      // ユーザーメッセージの場合に既読をつける
      if (className === 'user') {
        this.alreadyRead(num, (msgSec + 1000))
      };
      // メッセージ表示
      this.msgHTML(chatbox, icon, className, msg, msgSec);
    },
    // メッセージ内容
    msgHTML: function (chatbox, icon, className, msg, sec) {
      setTimeout(() => {
        chatbox.insertAdjacentHTML('beforeend', `
        <div class="${className}">
            ${icon}
            <div class="comment">
                <p>${msg}</p>
            </div>
        </div>
        `)
      }, sec)
    },
    // 既読をつける
    alreadyRead: function (num, sec) {
      setTimeout(() => {
        let user = document.querySelectorAll('.user .comment p');
        user[num].insertAdjacentHTML('afterbegin', `<span class="read">既読</span>`)
      }, sec)
    },
    // ローディングアニメーション
    loading: function (chatbox, icon, className, sec) {
      setTimeout(() => {
        chatbox.insertAdjacentHTML('beforeend', `
        <div class="${className}">
            ${icon}
            ${this.loadingAnimation}
        </div>
        `)
        // 自動スクロール
        let chat = document.querySelector('.chat');
        chat.scrollTop = chat.scrollHeight;
      }, sec)
    },
    // ローディングアニメーション削除
    noLoading: function (chatbox, parent, num, sec) {
      setTimeout(() => {
        if (parent === 'user') {
          parent = document.querySelectorAll('.user');
        } else if (parent === 'guide') {
          parent = document.querySelectorAll('.guide');
        } else if (parent == 'noicon_guide') {
          parent = document.querySelectorAll('.noicon_guide');
        }
        chatbox.removeChild(parent[num])
        // parent[num].style.display = 'none';
      }, sec)
    },
  }
  })
