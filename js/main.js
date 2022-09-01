let app = new Vue({
  el: '#app',
  data: {
    isShow: false,
    chatbox: '',
    comment: ''
  },
  created: function () {
    // 最初のチャット内容を表示
    let chatbox = document.querySelector('.chatbox');
    this.chatbox = chatbox;

    // デフォルトメッセージ１
    chatbox.insertAdjacentHTML('afterbegin', `
    <div class="guide">
      <div class="icon"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
      <div class="comment">
          <p>２つの方法で相場を計算することができます。</p>
      </div>
    </div>
    `)

    // デフォルトメッセージ２を表示
    setTimeout(this.q1Disp, 1500);

    // ボタン表示
    setTimeout(this.btnsDisp, 3000);
  },
  methods: {
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
      // 解答表示
      this.userMsg(chatbox, 'ざっくり計算です。', 1000);
      // 返答１
      this.guideMsg(chatbox, 'かしこまりました。', 2500);
      // 返答２
      this.noIconGuideMsg(chatbox, 'beforeend', 'データをもとに、あなたの相場をざっくり計算します。', 4000)
    },
    /*-------------------------
      しっかり計算
    -------------------------*/
    tightCalc: function () {
      let chatbox = document.querySelector('.chatbox');
      // ボタンを消す
      setTimeout(this.btnsNoDisp, 500);
      // 解答表示
      this.userMsg(chatbox, 'しっかり計算です。', 1000);
      // 返答１
      this.guideMsg(chatbox, 'かしこまりました。', 2500);
      // 返答２
      this.noIconGuideMsg(chatbox, 'beforeend', 'マンション・アパートのお風呂リフォーム相場は', 4000)
      // 返答３
      setTimeout(() => {
        chatbox.insertAdjacentHTML('beforeend', `
        <div class="souba">
          <div class="soubabox"><img src="../実務課題07/images/max.png"><img src="../実務課題07/images/300.png"></div>
          <div class="soubabox"><img src="../実務課題07/images/min.png"><img src="../実務課題07/images/10.png"></div>
        </div>
        `)
      }, 5500)
      // 返答４
      this.noIconGuideMsg(chatbox, 'beforeend', 'あなたの費用を、データをもとにしっかり計算します。', 7000)
    },
    // 案内メッセージ１
    guideMsg: function (chatbox, msg, sec) {
      setTimeout(() => {
        chatbox.insertAdjacentHTML('beforeend', `
        <div class="guide">
        <div class="icon"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
        <div class="comment">
            <p>${msg}</p>
        </div>
      </div>
        `)
      }, sec)
    },
    // 案内メッセージ２つめ以降
    noIconGuideMsg: function (parent, position, msg, sec) {
      setTimeout(() => {
        parent.insertAdjacentHTML(`${position}`, `
        <div class="noicon_guide">
        <div class="comment">
            <p>${msg}</p>
        </div>
      </div>
        `)
      }, sec)
    },
    // ユーザー解答
    userMsg: function (chatbox, msg, sec) {
      setTimeout(() => {
        chatbox.insertAdjacentHTML('beforeend', `
        <div class="user">
            <div class="comment">
                <p>${msg}</p>
            </div>
        </div>
        `)
      }, sec)
    }
  }
})
