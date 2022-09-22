<template>
  <div class="chatbox">
      <div class="quiestion col4" v-if="region">
          <button v-on:click="$emit('prefSelect', 0)">北海道・東北</button>
          <button v-on:click="$emit('prefSelect', 1)">関東</button>
          <button v-on:click="$emit('prefSelect', 2)">北陸・甲信越</button>
          <button v-on:click="$emit('prefSelect', 3)">東海</button>
          <button v-on:click="$emit('prefSelect', 4)">関西</button>
          <button v-on:click="$emit('prefSelect', 5)">中国</button>
          <button v-on:click="$emit('prefSelect', 6)">四国</button>
          <button v-on:click="$emit('prefSelect', 7)">九州・沖縄</button>
      </div>
      <div class="quiestion col4" v-if="prefId === 0">
          <button v-on:click="$emit('newMsg', 11, 0, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">北海道</button>
          <button v-on:click="$emit('newMsg', 11, 1, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">青森県</button>
          <button v-on:click="$emit('newMsg', 11, 2, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">岩手県</button>
          <button v-on:click="$emit('newMsg', 11, 3, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">秋田県</button>
          <button v-on:click="$emit('newMsg', 11, 4, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">宮城県</button>
          <button v-on:click="$emit('newMsg', 11, 5, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">山形県</button>
          <button v-on:click="$emit('newMsg', 11, 6, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">福島県</button>
      </div>
      <div class="quiestion col4" v-if="prefId === 1">
          <button v-on:click="$emit('newMsg', 11, 0, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">茨城県</button>
          <button v-on:click="$emit('newMsg', 11, 1, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">栃木県</button>
          <button v-on:click="$emit('newMsg', 11, 2, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">群馬県</button>
          <button v-on:click="$emit('newMsg', 11, 3, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">埼玉県</button>
          <button v-on:click="$emit('newMsg', 11, 4, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">千葉県</button>
          <button v-on:click="$emit('newMsg', 11, 5, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">東京都</button>
          <button v-on:click="$emit('newMsg', 11, 6, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">神奈川県</button>
      </div>
      <div class="quiestion col4" v-if="prefId === 2">
          <button v-on:click="$emit('newMsg', 11, 0, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">新潟県</button>
          <button v-on:click="$emit('newMsg', 11, 1, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">富山県</button>
          <button v-on:click="$emit('newMsg', 11, 2, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">石川県</button>
          <button v-on:click="$emit('newMsg', 11, 3, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">福井県</button>
          <button v-on:click="$emit('newMsg', 11, 4, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">山梨県</button>
          <button v-on:click="$emit('newMsg', 11, 5, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">長野県</button>
      </div>
      <div class="quiestion col4" v-if="prefId === 3">
          <button v-on:click="$emit('newMsg', 11, 0, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">岐阜県</button>
          <button v-on:click="$emit('newMsg', 11, 1, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">静岡県</button>
          <button v-on:click="$emit('newMsg', 11, 2, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">愛知県</button>
          <button v-on:click="$emit('newMsg', 11, 3, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">三重県</button>
      </div>
      <div class="quiestion col4" v-if="prefId === 4">
          <button v-on:click="$emit('newMsg', 11, 0, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">滋賀県</button>
          <button v-on:click="$emit('newMsg', 11, 1, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">京都府</button>
          <button v-on:click="$emit('newMsg', 11, 2, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">大阪府</button>
          <button v-on:click="$emit('newMsg', 11, 3, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">兵庫県</button>
          <button v-on:click="$emit('newMsg', 11, 4, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">奈良県</button>
          <button v-on:click="$emit('newMsg', 11, 5, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">和歌山県</button>
      </div>
      <div class="quiestion col4" v-if="prefId === 5">
          <button v-on:click="$emit('newMsg', 11, 0, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">鳥取県</button>
          <button v-on:click="$emit('newMsg', 11, 1, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">島根県</button>
          <button v-on:click="$emit('newMsg', 11, 2, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">岡山県</button>
          <button v-on:click="$emit('newMsg', 11, 3, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">広島県</button>
          <button v-on:click="$emit('newMsg', 11, 4, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">山口県</button>
      </div>
      <div class="quiestion col4" v-if="prefId === 6">
          <button v-on:click="$emit('newMsg', 11, 0, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">徳島県</button>
          <button v-on:click="$emit('newMsg', 11, 1, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">香川県</button>
          <button v-on:click="$emit('newMsg', 11, 2, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">愛媛県</button>
          <button v-on:click="$emit('newMsg', 11, 3, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">高知県</button>
      </div>
      <div class="quiestion col4" v-if="prefId === 7">
          <button v-on:click="$emit('newMsg', 11, 0, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">福岡県</button>
          <button v-on:click="$emit('newMsg', 11, 1, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">佐賀県</button>
          <button v-on:click="$emit('newMsg', 11, 2, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">長崎県</button>
          <button v-on:click="$emit('newMsg', 11, 3, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">熊本県</button>
          <button v-on:click="$emit('newMsg', 11, 4, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">大分県</button>
          <button v-on:click="$emit('newMsg', 11, 5, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">宮崎県</button>
          <button v-on:click="$emit('newMsg', 11, 6, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">鹿児島県</button>
          <button v-on:click="$emit('newMsg', 11, 7, 'です。', 'ご回答ありがとうございました。', '現在、いただいた条件にて算定しております。結果の送付までしばらくお待ちください。', '')">沖縄県</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: ['region', 'prefId']
}
</script>

<style>
</style>
