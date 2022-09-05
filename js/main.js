let app = new Vue({
  el: '#app',
  data: {
    isShow: false,
    noDom: '',
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
    isQ2Show: false
  },
  created: function () {
    // 最初のチャット内容を表示
    let chatbox = document.querySelector('.chatbox');

    // デフォルトメッセージ１
    chatbox.insertAdjacentHTML('afterbegin', `
    <div class="guide">
      <div class="icon"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
      <div class="comment">
          <p>２つの方法で相場を計算することができます。</p>
      </div>
    </div>
    `)

    // デフォルトメッセージ２ローディングを表示
    setTimeout(this.q1Loading, 1000);

    // デフォルトメッセージ２ローディングを削除
    setTimeout(this.q1NoLoading, 2000);

    // デフォルトメッセージ２を表示
    setTimeout(this.q1Disp, 2000);

    // ボタン表示
    setTimeout(this.btnsDisp, 3000);
  },
  methods: {
    // デフォルトメッセージ２ローディング
    q1Loading: function () {
      let guide = document.querySelectorAll('.chatbox .guide')
      guide[0].insertAdjacentHTML('afterend', `
      <div class="noicon_guide">
        ${this.loadingAnimation}
      </div>
      `)
    },
    // デフォルトメッセージ２ローディング削除
    q1NoLoading: function () {
      let chatbox = document.querySelector('.chatbox');
      let noiconGuide = document.querySelector('.chatbox .noicon_guide')
      chatbox.removeChild(noiconGuide)
    },
    // デフォルトメッセージ２
    q1Disp: function () {
      let guide = document.querySelectorAll('.chatbox .guide')
      guide[0].insertAdjacentHTML('afterend', `
      <div class="noicon_guide">
        <div class="comment">
          <p>どちらがご希望に近いですか？</p>
        </div>
      </div>
      `)
    },
    // ボタン表示
    btnsDisp: function () {
      this.isShow = true;
    },
    // ボタン非表示
    btnsNoDisp: function () {
      this.isShow = false;
    },
    /*-------------------------
      ざっくり計算
    -------------------------*/
    roughCalc: function () {
      let chatbox = document.querySelector('.chatbox');
      // ボタンを消す
      setTimeout(this.btnsNoDisp, 500);

      // メッセージ１
      this.msg(chatbox, this.noDom, 'user', 500, 0, 1500, 'ざっくり計算です。')
      // メッセージ２
      this.msg(chatbox, this.icon, 'guide', 2500, 1, 4000, 'かしこまりました。')
      // メッセージ３
      this.msg(chatbox, this.noDom, 'noicon_guide', 5000, 1, 6500, 'データをもとに、あなたの相場をざっくり計算します。')
      // メッセージ４
      this.msg(chatbox, this.icon, 'guide', 7500, 2, 9000, '希望されるお風呂は、どのような形式ですか？')

      // 質問２表示
      this.nextQuestion(10000);
      // 自動スクロール
      this.autoScroll(10000);
    },
    /*-------------------------
      しっかり計算
    -------------------------*/
    tightCalc: function () {
      let chatbox = document.querySelector('.chatbox');
      // ボタンを消す
      setTimeout(this.btnsNoDisp, 500);

      // メッセージ１
      this.msg(chatbox, this.noDom, 'user', 500, 0, 1500, 'しっかり計算です。');
      // メッセージ２
      this.msg(chatbox, this.icon, 'guide', 2500, 1, 4000, 'かしこまりました。');
      // メッセージ３
      this.msg(chatbox, this.noDom, 'noicon_guide', 5000, 1, 6500, 'マンション・アパートのお風呂リフォーム相場は');
      // メッセージ４
      this.souba(chatbox, 7500);
      // メッセージ５
      this.msg(chatbox, this.noDom, 'noicon_guide', 13500, 2, 15000, 'あなたの費用を、データをもとにしっかり計算します。');
      // メッセージ６
      this.msg(chatbox, this.icon, 'guide', 16000, 2, 17500, '希望されるお風呂は、どのような形式ですか？')

      // 質問２表示
      this.nextQuestion(18500);
      // 自動スクロール
      this.autoScroll(18500);

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
      }, sec)
    },
    // 相場表示
    souba: function (chatbox, sec) {
      setTimeout(() => {
        chatbox.insertAdjacentHTML('beforeend', `
        <div class="souba">
        <div class="soubabox"><img class="img1" src="../実務課題07/images/max.png"><img class="img3" src="../実務課題07/images/300.png"></div>
        <div class="soubabox"><img class="img2" src="../実務課題07/images/min.png"><img class="img4" src="../実務課題07/images/10.png"></div>
        </div>
        `)
      }, sec);
      // 自動スクロール
      this.autoScroll(7600);
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
    // 次の質問を表示
    nextQuestion: function (sec) {
      setTimeout(() => {
        this.isQ2Show = true;
      }, sec)
    },
    // 自動スクロール
    autoScroll: function (sec) {
      setTimeout(() => {
        let chat = document.querySelector('.chat');
        chat.scrollTop = chat.scrollHeight;
      }, sec);
    }
  }
})
