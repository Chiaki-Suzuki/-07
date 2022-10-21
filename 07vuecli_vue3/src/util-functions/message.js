export let addMsg = () => {
  let loadingAnimation = `
  <div class="comment">
    <div class="spinner-box">
      <div class="pulse-container">
        <span class="pulse-bubble pulse-bubble-1"></span>
        <span class="pulse-bubble pulse-bubble-2"></span>
        <span class="pulse-bubble pulse-bubble-3"></span>
      </div>
    </div>
  </div>
  `

  /*-------------------------
    メッセージ表示
  -------------------------*/
  let msg = function (chatbox, icon, className, num, msg, sec, next, qnum) {
    return new Promise(resolve => {
      // ボタン押した直後なので早めに表示
      setTimeout(() => {
        // ローディング表示
        loading(chatbox, icon, className);
        // ローディング非表示
        noLoading(chatbox, className, num);
        // ユーザーメッセージの場合に既読をつける
        if (className === 'user') {
          alreadyRead(chatbox, num)
        }
        // メッセージ表示
        msgHTML(chatbox, icon, className, msg);

        // 質問３以降表示用
        if (typeof next !== 'undefined') {
          next(qnum);
          autoScroll(2100)
        }
        resolve();
      }, sec)
    })
  }

  // ローディングアニメーション
  let loading = function (chatbox, icon, className) {
    chatbox.insertAdjacentHTML('beforeend', `
    <div class="${className}">
    ${icon}
    ${loadingAnimation}
    </div>
    `)
    // 自動スクロール
    let chat = document.querySelector('.chat');
    chat.scrollTop = chat.scrollHeight;
  }

  // ローディングアニメーション削除
  let noLoading = function (chatbox, parent, num) {
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
  }

  // メッセージ内容
  let msgHTML = function (chatbox, icon, className, msg) {
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
  }

  // 既読をつける
  let alreadyRead = function (chatbox, num) {
    setTimeout(() => {
      let user = chatbox.querySelectorAll('.user .comment p');
      user[num].insertAdjacentHTML('afterbegin', `<span class="read">既読</span>`)
    }, 2000)
  }

  // 自動スクロール
  let autoScroll = function (sec) {
    setTimeout(() => {
      let chat = document.querySelector('.chat');
      chat.scrollTop = chat.scrollHeight;
    }, sec);
  }

  /*-------------------------
    相場表示
  -------------------------*/
  let souba = function (chatbox) {
    return new Promise(resolve => {
      setTimeout(() => {
        chatbox.insertAdjacentHTML('beforeend', `
        <div class="souba">
          <div class="soubabox"><img class="img1" src="./images/max.png"><img class="img3" src="./images/300.png"></div>
          <div class="soubabox"><img class="img2" src="./images/min.png"><img class="img4" src="./images/10.png"></div>
        </div>
        `)
        resolve();
      }, 1000);
      // 自動スクロール
      autoScroll(2000);
    })
  }

  return { msg, souba }
}
