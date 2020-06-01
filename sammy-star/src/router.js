import Vue from 'vue'
import Router from 'vue-router';
import Index from './views/index.vue';
import CourseDetail from './views/courses/course-detail.vue';
import ThemeDetail from './views/themes/theme-detail.vue';
import PageNotFound from './views/page-not-found.vue';

import Addition from './views/themes/addition.vue';

const parseProps = r => ({ id: parseInt(r.params.id) });

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/Index',
    },
    {
      path: '/Index',
      name: 'index',
      component: Index,
    },
    {
      path: '/course/:courseId',
      name: 'course-detail',
      component: CourseDetail,
      props: parseProps,
      children: [
        {
          path: '/theme',
          name: 'theme-detail',
          component: ThemeDetail,
          props: parseProps,
        },
      ],
    },
    {
      path: '/addition',
      name: 'addition',
      component: Addition,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/about.vue'),
    },
    {
      path: '*',
      component: PageNotFound
    },
  ]
})
