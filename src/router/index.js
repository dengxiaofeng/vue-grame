import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Recommend=((resolve)=>{
    import('components/recommend/recommend').then((recommend)=>{
        resolve(recommend)
    })
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: Recommend
    }
  ]
})
