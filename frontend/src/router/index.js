import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Contact from '../views/Contact.vue'
import Chat from '../views/Chat.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chats',
    name: 'Chats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Chats.vue')
  },
  {
    path: '/:contactName',
    name: 'contact',
    component: Contact,
    props: true,
    children: [
      {
        path: 'chat',
        name: 'Chat',
        component: Chat,
      },
      {
        path: '',
        name: 'contactView',
        component: ContactView,
        props: true,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
