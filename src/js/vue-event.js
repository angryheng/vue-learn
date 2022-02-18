const vm = new Vue({
  el: '#app',
  data: {
    title: 'Hello Vue!'
  },
  methods: {
    changeTitle(ev) {
      console.log(ev)
      this.title = 'Changed!';
    },
    changeTitle2(title, ev) {
      console.log(ev, title)
      this.title = title;
    },
    eventPreventDefault() {
      // ev.preventDefault();
      console.log('Refused Jump to Google')
    },
    alertFn() {
      alert('StopPropagation')
    },
    consoleFn(str) {
      console.log(str)
    },
    scrollFn() {
      for (let i = 0; i < 100000; i++) {
        console.log('#')
      }
    }
  }
})
