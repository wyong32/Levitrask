import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import CialisComparison from '../views/Drug-Comparison-List/CialisComparison.vue'
import StendraComparison from '../views/Drug-Comparison-List/StendraComparison.vue'
import ViagraComparison from '../views/Drug-Comparison-List/ViagraComparison.vue'
import NewsView from '../views/NewsView.vue'
import CialisBlogPost from '../views/Drugs-In-This-Class-List/CialisBlogPost.vue'
import StendraBlogPost from '../views/Drugs-In-This-Class-List/StendraBlogPost.vue'
import ViagraBlogPost from '../views/Drugs-In-This-Class-List/ViagraBlogPost.vue'
import BlogView from '../views/BlogView.vue'
import NewsDetails from '../views/NewsDetails.vue'
import QuestionDetails from '../views/QuestionDetails.vue'

// 导航守卫：检查是否从应用内部导航
const requireNavigationFromApp = (to, from, next) => {
  // 如果 from.name 未定义，说明是直接访问或刷新
  if (from.name === undefined) {
    // 重定向到主页
    next({ name: 'levitra' }) // 或者 next('/')
  } else {
    // 否则，允许正常导航
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'levitra',
      component: IndexView,
    },
    {
      path: '/compare/cialis',
      name: 'compare-cialis',
      component: CialisComparison,
      beforeEnter: requireNavigationFromApp, // 应用守卫
    },
    {
      path: '/compare/stendra',
      name: 'compare-stendra',
      component: StendraComparison,
      beforeEnter: requireNavigationFromApp, // 应用守卫
    },
    {
      path: '/compare/viagra',
      name: 'compare-viagra',
      component: ViagraComparison,
      beforeEnter: requireNavigationFromApp, // 应用守卫
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // News 页面通常允许直接访问，所以不加守卫
    },
    {
      path: '/drugs/cialis',
      name: 'cialis-blog', // 保持路由名称或根据需要修改
      component: CialisBlogPost,
      beforeEnter: requireNavigationFromApp, // 应用守卫
    },
    {
      path: '/drugs/stendra',
      name: 'stendra-blog',
      component: StendraBlogPost,
      beforeEnter: requireNavigationFromApp, // 应用守卫
    },
    {
      path: '/drugs/viagra',
      name: 'viagra-blog',
      component: ViagraBlogPost,
      beforeEnter: requireNavigationFromApp, // 应用守卫
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      // Blog 列表页通常允许直接访问，所以不加守卫
    },
    {
      path: '/blog/:id',
      name: 'blog-details', // Matches the name used in BlogView
      // Use dynamic import for lazy loading
      component: () => import('../views/BlogDetails.vue'),
      props: true, // Pass route params as props
    },
    {
      path: '/questions/:id',
      name: 'question-details',
      component: QuestionDetails,
      props: true,
    },
    {
      path: '/news/:id',
      name: 'news-details',
      component: NewsDetails,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
