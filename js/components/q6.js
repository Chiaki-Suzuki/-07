let q6 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit('multiQue', 5, 0, '', 'お風呂に埋込み型のオーディオを設置すると、音の広がりがよく、また見た目もスッキリします。', 'お風呂にオーディオの設置を希望されますか？')">はい</button>
          <button v-on:click="$emit('multiQue', 5, 1, '', 'お風呂に埋込み型のオーディオを設置すると、音の広がりがよく、また見た目もスッキリします。', 'お風呂にオーディオの設置を希望されますか？')">興味がある</button>
          <button v-on:click="$emit('multiQue', 5, 2, '', 'お風呂に埋込み型のオーディオを設置すると、音の広がりがよく、また見た目もスッキリします。', 'お風呂にオーディオの設置を希望されますか？')">いいえ</button>
      </div>
  </div>
  `
  }
