import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false,
  minimum: 0.2,
  easeing: 'swing',
  speed: 1000,
  trickleRate: 0.2,
})
export default {
  data() {
    return {
      loadColor: 'red',
    }
  },
  created() {},
  mounted() {
    window.successRequest = this.successRequest
    window.failureRequest = this.failureRequest
  },
  methods: {
    start() {
      NProgress.start()
    },
    successRequest() {
      let nprogress = document.querySelector('#nprogress .bar')
      nprogress.style.cssText =
        'transform: translate3d(-0.6%, 0px, 0px); transition: all 1000ms ease 0s;background:green !important'
      NProgress.done()
    },
    failureRequest() {
      let nprogress = document.querySelector('#nprogress .bar')
      nprogress.style.cssText =
        'transform: translate3d(-0.6%, 0px, 0px); transition: all 1000ms ease 0s;background:red !important'
      NProgress.done()
    },
  },
}
