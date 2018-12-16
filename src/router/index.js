import Vue from 'vue'
import Router from 'vue-router'
import transfer from '@/components/transfer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'transfer',
      component: transfer
    }
  ]
})
