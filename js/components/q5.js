let q5 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit('simpleQue', 4, 0, '', 'リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？')">はい</button>
          <button v-on:click="$emit('simpleQue', 4, 1, '', 'リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？')">興味がある</button>
          <button v-on:click="$emit('simpleQue', 4, 2, '', 'リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？')">いいえ</button>
      </div>
  </div>
  `
  }
