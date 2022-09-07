let q9 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit('multiQue', 8, 0, '', '湯船に浸かる人が複数いたり、利用時間がバラバラな場合は、追い焚き機能が便利です。', '追い焚き機能をご希望されますか？')">はい</button>
          <button v-on:click="$emit('multiQue', 8, 1, '', '湯船に浸かる人が複数いたり、利用時間がバラバラな場合は、追い焚き機能が便利です。', '追い焚き機能をご希望されますか？')">興味がある</button>
          <button v-on:click="$emit('multiQue', 8, 2, '', '湯船に浸かる人が複数いたり、利用時間がバラバラな場合は、追い焚き機能が便利です。', '追い焚き機能をご希望されますか？')">いいえ</button>
      </div>
  </div>
  `
  }
