import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter()
import Generator from './components/generator/index.vue'
import GeneratorList from './components/generator-list/index.vue'
router.map({
  '/': {
    name: 'home',
    component: GeneratorList
  },
  '/generator/:id': {
    name: 'generator',
    component: Generator
  }
})

Vue.http.options.root = '/api'
Vue.http.interceptors.push((request, next) => {
  NProgress.start()
  next((response) => {
    NProgress.done()
  })
})

router.start(App, 'app')
