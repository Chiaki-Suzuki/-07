let q3 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit('doubleQue', 2, 0, 'です。', '浴槽まわりの希望をお伺いします。', '湯船につかる頻度が多い場合は、浴槽の形が重要です。', '浴槽の形にこだわりはありますか？')">2畳未満</button>
          <button v-on:click="$emit('doubleQue', 2, 1, 'です。', '浴槽まわりの希望をお伺いします。', '湯船につかる頻度が多い場合は、浴槽の形が重要です。', '浴槽の形にこだわりはありますか？')">2畳以上</button>
          <button v-on:click="$emit('doubleQue', 2, 2, 'です。', '浴槽まわりの希望をお伺いします。', '湯船につかる頻度が多い場合は、浴槽の形が重要です。', '浴槽の形にこだわりはありますか？')">わからない</button>
      </div>
  </div>
  `
}
