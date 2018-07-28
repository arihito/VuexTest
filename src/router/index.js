import Vue from 'vue'
import Router from 'vue-router'
import EditForm from '@/components/EditForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditForm',
      component: EditForm
    }
  ]
})
