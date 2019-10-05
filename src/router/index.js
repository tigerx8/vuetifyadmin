import Vue from "vue"
import Router from "vue-router"
import { publicRoute, protectedRoute } from "./config"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
const routes = publicRoute.concat(protectedRoute)

Vue.use(Router)
const router = new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: routes
})
// router gards
router.beforeEach((to, from, next) => {
  NProgress.start()
  //auth route is authenticated
  next()
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
