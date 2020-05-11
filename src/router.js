import Vue from 'vue';
import Router from 'vue-router';

const MainGame = () => import(/* webpackChunkName: "MainGame" */"./views/MainGame.vue");

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: MainGame }
  ],
});