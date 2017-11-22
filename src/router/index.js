import Vue from 'vue'
import Router from 'vue-router'
import HeadBar from '@/components/HeadBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HeadBar',
      component: HeadBar
    }
  ]
})
