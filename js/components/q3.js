Vue.component('q3', {
  template: `
  <div class="chatbox" v-if="q3">
      <div class="quiestion col3">
          <button>ユニットバス</button>
          <button>タイル貼り</button>
          <button>わからない</button>
      </div>
  </div>
  `,
  props: ['q3'],
  data: function () {
    return {
      // isShow: ''
    }
  },
  methods: {
  }
  })
