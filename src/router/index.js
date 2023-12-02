import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AllCourseView from '@/views/AllCourseView.vue'
import BulletinView from '@/views/BulletinView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import CourseView from '@/views/CourseView.vue'
import CourseList from '@/views/CourseListView.vue'
import MainPage from '@/views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'MainPage',
          component: MainPage,
        },
        {
          path: '/course',
          name: 'Course',
          component: AllCourseView,
          children: [
            {
              path: '',
              name: 'CourseList',
              component: CourseList,
            },
            {
              path: 'info/:id',
              name: 'Info',
              component: CourseView,
            },
            {
              path: 'info/:id/edit',
              name: 'InfoEdit',
              component: () => import('@/components/course_edit.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/bulletin',
      name: 'Bulletin',
      component: BulletinView,
      children: [
        {
          path: 'main',
          name: 'Main',
          component: () => import('@/components/bulletin.vue')
        },
        {
          path: 'edit',
          name: 'BulletinEdit',
          component: () => import('@/components/bulletin_edit.vue')
        }
      ],
    },
    { //404Error
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    }
  ],
})

export default router