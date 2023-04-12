import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@views/PostsView.vue')
    },
    {
      path: '/post/:id',
      name: 'post.details',
      component: () => import('@components/posts/Detail.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@views/CategoriesView.vue')
    },
    {
      path: '/authors',
      name: 'authors',
      component: () => import('@views/AuthorsView.vue')
    }
  ]
})

export default router
