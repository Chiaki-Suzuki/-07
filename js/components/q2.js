let q2 = {
  template: `
  <div class="chatbox">
      <div class="quiestion col3">
          <button v-on:click="$emit(question[num].function, question[num].id, 0, question[num].ending, question[num].msg1)">{{ question[num].choice1 }}</button>
          <button v-on:click="$emit(question[num].function, question[num].id, 1, question[num].ending, question[num].msg1)">{{ question[num].choice2 }}</button>
          <button v-on:click="$emit(question[num].function, question[num].id, 2, question[num].ending, question[num].msg1)">{{ question[num].choice3 }}</button>
      </div>
  </div>
  `,
  props: ['question', 'num']
}
