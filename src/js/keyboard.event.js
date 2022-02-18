Vue.config.productionTip = false
const vm = new Vue({
  el: '#app',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    handleKeyUp (event) {
      console.log(event.key)
    }
  }
})
