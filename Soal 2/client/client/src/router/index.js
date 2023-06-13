import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import AddUserView from "../views/AddUserView.vue"
import EditUserView from "../views/EditUserView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path:"/",
      name:"home",
      component: HomeView
    },
    {
      path:"/add-user",
      name:"addUser",
      component: AddUserView
    },
    {
      path:"/edit-user/:id",
      name:"editUser",
      component: EditUserView
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.access_token
  if(to.name == "login" && isLogin){
    next("/")
  }
  else if(to.name == "home" && !isLogin){
    next("/login")
  }
  else{
    next()
  }
})

export default router
