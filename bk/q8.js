let q8 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit('multiQue', 7, 0, '', '設置する照明にこだわると、利用シーンに合わせて浴室の雰囲気を手軽に変えることができます。', '機能的な照明をご希望されますか？')">はい</button>
          <button v-on:click="$emit('multiQue', 7, 1, '', '設置する照明にこだわると、利用シーンに合わせて浴室の雰囲気を手軽に変えることができます。', '機能的な照明をご希望されますか？')">興味がある</button>
          <button v-on:click="$emit('multiQue', 7, 2, '', '設置する照明にこだわると、利用シーンに合わせて浴室の雰囲気を手軽に変えることができます。', '機能的な照明をご希望されますか？')">いいえ</button>
      </div>
  </div>
  `
  }
