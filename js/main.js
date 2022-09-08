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
    isQ2Show: false,
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
      return new Promise(resolve => {
        this.isShow = false;
        resolve();
      })
    },
    /*-------------------------
      ざっくり計算
    -------------------------*/
    roughCalc: async function () {
      let chatbox = document.querySelector('.chatbox');
      // ボタンを消す
      await setTimeout(this.btnsNoDisp, 500);

      // メッセージ１
      await this.msg(chatbox, this.noDom, 'user', 0, 'ざっくり計算です。', 500)
      // メッセージ２
      await this.msg(chatbox, this.icon, 'guide', 1, 'かしこまりました。', 2000)
      // // メッセージ３
      await this.msg(chatbox, this.noDom, 'noicon_guide', 1, 'データをもとに、あなたの相場をざっくり計算します。', 2000)
      // // メッセージ４
      await this.msg(chatbox, this.icon, 'guide', 2, '希望されるお風呂は、どのような形式ですか？', 2000)

      // 質問２表示
      await this.q2Disp();
      // // 自動スクロール
      await this.autoScroll(2000);
    },
    /*-------------------------
      しっかり計算
    -------------------------*/
    tightCalc: async function () {
      let chatbox = document.querySelector('.chatbox');
      // ボタンを消す
      setTimeout(this.btnsNoDisp, 500);

      // メッセージ１
      await this.msg(chatbox, this.noDom, 'user', 0, 'しっかり計算です。', 500);
      // メッセージ２
      await this.msg(chatbox, this.icon, 'guide', 1, 'かしこまりました。', 2000);
      // メッセージ３
      await this.msg(chatbox, this.noDom, 'noicon_guide', 1, 'マンション・アパートのお風呂リフォーム相場は', 2000);
      // メッセージ４
      await this.souba(chatbox);
      // メッセージ５
      await this.msg(chatbox, this.noDom, 'noicon_guide', 2, 'あなたの費用を、データをもとにしっかり計算します。', 5000);
      // メッセージ６
      await this.msg(chatbox, this.icon, 'guide', 2, '希望されるお風呂は、どのような形式ですか？', 2000)

      // 質問２表示
      await this.q2Disp();
      // 自動スクロール
      await this.autoScroll(2000);

    },
    // ローディングアニメーション
    loading: function (chatbox, icon, className) {
      chatbox.insertAdjacentHTML('beforeend', `
      <div class="${className}">
      ${icon}
      ${this.loadingAnimation}
      </div>
      `)
      // 自動スクロール
      let chat = document.querySelector('.chat');
      chat.scrollTop = chat.scrollHeight;
    },
    // ローディングアニメーション削除
    noLoading: function (chatbox, parent, num) {
      setTimeout(() => {
        if (parent === 'user') {
          parent = chatbox.querySelectorAll('.user');
        } else if (parent === 'guide') {
          parent = chatbox.querySelectorAll('.guide');
        } else if (parent == 'noicon_guide') {
          parent = chatbox.querySelectorAll('.noicon_guide');
        }
        chatbox.removeChild(parent[num])
      }, 1000)
    },
    // メッセージ内容
    msgHTML: function (chatbox, icon, className, msg) {
      setTimeout(() => {
        chatbox.insertAdjacentHTML('beforeend', `
        <div class="${className}">
          ${icon}
          <div class="comment">
            <p>${msg}</p>
          </div>
        </div>
        `)
      }, 1000)
    },
    // 既読をつける
    alreadyRead: function (chatbox, num) {
      setTimeout(() => {
        let user = chatbox.querySelectorAll('.user .comment p');
        user[num].insertAdjacentHTML('afterbegin', `<span class="read">既読</span>`)
      }, 2000)
    },
    // 相場表示
    souba: function (chatbox) {
      return new Promise(resolve => {
        setTimeout(() => {
          chatbox.insertAdjacentHTML('beforeend', `
          <div class="souba">
            <div class="soubabox"><img class="img1" src="../実務課題07/images/max.png"><img class="img3" src="../実務課題07/images/300.png"></div>
            <div class="soubabox"><img class="img2" src="../実務課題07/images/min.png"><img class="img4" src="../実務課題07/images/10.png"></div>
          </div>
          `)
          resolve();
        }, 1000);
        // 自動スクロール
        this.autoScroll(2000);
      })
    },
    // メッセージ入力～表示
    msg: function (chatbox, icon, className, num, msg, sec, next, qnum) {
      return new Promise(resolve => {
        let self = this;
        // ボタン押した直後なので早めに表示
          setTimeout(() => {
            // ローディング表示
            self.loading(chatbox, icon, className);
            // ローディング非表示
            self.noLoading(chatbox, className, num);
            // ユーザーメッセージの場合に既読をつける
            if (className === 'user') {
              self.alreadyRead(chatbox, num)
            }
            // メッセージ表示
            self.msgHTML(chatbox, icon, className, msg);

            // 質問３以降表示用
            if (typeof next !== 'undefined') {
              next(qnum);
              self.autoScroll(2100)
            }
            resolve();
          }, sec)
      })
    },
    // 自動スクロール
    autoScroll: function (sec) {
      setTimeout(() => {
        let chat = document.querySelector('.chat');
        chat.scrollTop = chat.scrollHeight;
      }, sec);
    },
    // 質問２を表示
    q2Disp: function () {
      setTimeout(() => {
        this.isQ2Show = true;
      }, 2000)
    }
  }
})
