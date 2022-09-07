let q7 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit('multiQue', 6, 0, '', 'ゆったりお湯に浸かりながら、最大24インチの大迫力の画面でテレビを楽しむこともできます。', 'お風呂にテレビの設置を希望されますか？')">はい</button>
          <button v-on:click="$emit('multiQue', 6, 1, '', 'ゆったりお湯に浸かりながら、最大24インチの大迫力の画面でテレビを楽しむこともできます。', 'お風呂にテレビの設置を希望されますか？')">興味がある</button>
          <button v-on:click="$emit('multiQue', 6, 2, '', 'ゆったりお湯に浸かりながら、最大24インチの大迫力の画面でテレビを楽しむこともできます。', 'お風呂にテレビの設置を希望されますか？')">いいえ</button>
      </div>
  </div>
  `
  }
