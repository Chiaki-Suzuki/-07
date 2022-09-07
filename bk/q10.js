let q10 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit('simpleQue', 9, 0, '', 'リビングの家族を呼び出したり会話ができるインターフォンの設置を希望しますか？')">はい</button>
          <button v-on:click="$emit('simpleQue', 9, 1, '', 'リビングの家族を呼び出したり会話ができるインターフォンの設置を希望しますか？')">興味がある</button>
          <button v-on:click="$emit('simpleQue', 9, 2, '', 'リビングの家族を呼び出したり会話ができるインターフォンの設置を希望しますか？')">いいえ</button>
      </div>
  </div>
  `
  }
