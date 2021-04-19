import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PostDetail from '../views/PostDetail.vue'
import CreatePost from '@/views/CreatePost.vue'
import ColumnDetail from '@/views/ColumnDetail.vue'
import Signup from '@/views/Signup.vue'
export default [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: PostDetail
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: CreatePost
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
]
