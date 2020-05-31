import Vue from 'vue'
import Router from 'vue-router';
import Index from './views/index.vue';
// import Heroes from './views/heroes.vue';
import HeroDetail from './views/hero-detail.vue';
import PageNotFound from './views/page-not-found.vue';

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
      path: '/heroes/:id',
      name: 'hero-detail',
      component: HeroDetail,
      props: parseProps,
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
