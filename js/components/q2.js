let q2 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit('simpleQue', 1, 0, 'です。', '希望されるお風呂の大きさは、どのくらいですか？')">ユニットバス</button>
          <button v-on:click="$emit('simpleQue', 1, 1, 'です。', '希望されるお風呂の大きさは、どのくらいですか？')">タイル貼り</button>
          <button v-on:click="$emit('simpleQue', 1, 2, 'です。', '希望されるお風呂の大きさは、どのくらいですか？')">わからない</button>
      </div>
  </div>
  `
}
