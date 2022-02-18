Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  data () {
    return {
      firstName: '张',
      lastName: '衡'
    }
  },
  computed: {
    fullName() {
      return this.firstName + this.lastName
    }
  }
})
