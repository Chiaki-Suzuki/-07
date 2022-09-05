let q4 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit('simpleQue', 3, 0, 'です。', 'お湯の冷めにくい、保温効果のある浴槽をご希望されますか？')">広さ重視</button>
          <button v-on:click="$emit('simpleQue', 3, 1, 'です。', 'お湯の冷めにくい、保温効果のある浴槽をご希望されますか？')">節水重視</button>
          <button v-on:click="$emit('simpleQue', 3, 2, 'です。', 'お湯の冷めにくい、保温効果のある浴槽をご希望されますか？')">特になし</button>
      </div>
  </div>
  `
  }
