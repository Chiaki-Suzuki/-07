<template>
  <div id="app">
    <div class="container">
      <div class="chat">
        <div class="chatbox" ref="chatbox">
          <div class="quiestion" v-if="isShow">
            <button v-on:click="roughCalc">ざっくり計算</button>
            <button v-on:click="tightCalc">しっかり計算</button>
          </div>
        </div>
        <Chat
          v-on:child-msg="msg"
          v-on:auto-scroll="autoScroll"
          v-bind:q2box="isQ2Show"
          v-bind:no-dom="noDom"
          v-bind:icon="icon"
          v-bind:loading-animation="loadingAnimation">
          </Chat>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from "./components/Chat.vue";

export default {
  name: 'App',
  components: {
    Chat
  },
  data: () => {
    return {
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
    }
  },
  mounted: function () {
    // 最初のチャット内容を表示
    let chatbox = this.$refs.chatbox

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
      let chatbox = this.$refs.chatbox
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
      let chatbox = this.$refs.chatbox
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
      let chatbox = this.$refs.chatbox
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
            <div class="soubabox"><img class="img1" src="/images/max.png"><img class="img3" src="/images/300.png"></div>
            <div class="soubabox"><img class="img2" src="/images/min.png"><img class="img4" src="/images/10.png"></div>
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
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/*-------------------------
  初期化
-------------------------*/
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  background-color: #eee;
}

ul, ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/*-------------------------
  グローバル
-------------------------*/
.container {
  width: 800px;
  margin: 0 auto;
}

/*-------------------------
  チャット
-------------------------*/
.chat {
  scroll-behavior: smooth;
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  margin: 60px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.chat::-webkit-scrollbar {
  width: 15px;
}

.chat::-webkit-scrollbar-track {
  display: none;
}

.chat::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border: 3px solid #fff;
  border-radius: 50em;
}

.guide {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 0 20px 0;
}

.icon {
  font-size: 4rem;
  color: #00bcd4;
}

.comment {
  width: calc(100% - 40px);
}

.comment p{
  position: relative;
  display: table;
  padding: 8px;
  margin: 10px 0 0 20px;
  border-radius: 10px;
  background-color: #eee;
}

.guide .comment p::before,
.noicon_guide .comment p::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -15px;
  margin-top: -10px;
  border: 8px solid transparent;
  border-right: 10px solid #eee;
}

.noicon_guide {
  width: 80%;
  margin: -10px 0 30px 0;
}

.noicon_guide .comment {
  margin-left: 40px;
  width: calc(100% - 40px);
}

.user {
  width: 80%;
  margin: 0 0 20px auto;
}

.user .comment {
  width: 100%;
  overflow: hidden;
}

.user .comment p {
  float: right;
  margin: 0 20px 0 0;
  background-color: #8bc34a;
  color: #fff;
}

.user .comment p::after{
  content: "";
  right: -15px;
  border: 8px solid transparent;
  border-left: 10px solid #8bc34a;
  position: absolute;
  margin: 5px 0 0 0;
}

.read {
  position: absolute;
  left: -33px;
  bottom: 0;
  color: #333;
  font-size: 1.3rem;
}

.quiestion {
  width: 50%;
  margin: 0 auto 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.quiestion button {
  width: 48%;
  height: 100px;
  font-weight: bold;
  color: #333;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 0 5px #eee;
  transition: .3s;
  outline: none;
}

.quiestion.col3 button{
  width: 30%;
}

.quiestion.col4 {
  width: 70%;
  justify-content: normal;
}
.quiestion.col4 button{
  width: calc((100% - 45px) / 4);
  margin: 0 0 15px 15px;
}

.quiestion.col4 button:nth-of-type(4n+1) {
  margin-left: 0;
}

.quiestion button:hover {
  background-color: #ffc107;
  border: 1px solid #ffc107;
  color: #fff;
  box-shadow: 0 0 8px #ffc107;
}

.souba {
  width: 50%;
  margin: 0 auto 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
}

.soubabox {
  width: 45%;
}

.souba img{
  text-align: center;
  display: block;
  max-width: 100%;
  margin: 0 auto;
}

.souba img:first-of-type{
  width: 80px;
}

/*-------------------------
  画像描画アニメーション
-------------------------*/
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.img1 {
  animation: fadeIn 1s ease 1s 1 normal backwards;
}
.img2 {
  animation: fadeIn 1s ease 3s 1 normal backwards;
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.img3 {
  animation: fadeSlideIn 1s ease 2s 1 normal backwards;
}
.img4 {
  animation: fadeSlideIn 1s ease 4s 1 normal backwards;
}

/*-------------------------
  チャット入力中
-------------------------*/
@keyframes pulse {
  from {
    opacity: 1;
    transform: translateY(3px);
  }
  to {
    opacity: .35;
    transform: translateY(-3px);
  }
}

.spinner-box {
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  position: relative;
}

.guide .spinner-box,
.noicon_guide .spinner-box {
  background-color: #eee;
  margin: 10px 0 0 20px;
}

.guide .spinner-box::before,
.noicon_guide .spinner-box::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -15px;
  margin-top: -10px;
  border: 8px solid transparent;
  border-right: 10px solid #eee;
}

.user .spinner-box {
  background-color: #8bc34a;
  float: right;
  margin: 0px 20px 0 0;
}

.user .spinner-box::after{
  content: "";
  right: -15px;
  border: 8px solid transparent;
  border-left: 10px solid #8bc34a;
  position: absolute;
}

.pulse-container {
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pulse-bubble {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.guide .pulse-bubble,
.noicon_guide .pulse-bubble{
  background-color: #aaa;
}

.user .pulse-bubble {
  background-color: #fff;
}

.pulse-bubble-1 {
    animation: pulse .4s ease 0s infinite alternate;
}
.pulse-bubble-2 {
    animation: pulse .4s ease .2s infinite alternate;
}
.pulse-bubble-3 {
    animation: pulse .4s ease .4s infinite alternate;
}
</style>
