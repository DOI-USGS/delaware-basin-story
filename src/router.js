import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Visualization',
            component: () =>
                    import('@/views/Visualization.vue')
        },
        {
            path: '/404',
            name: 'error404',
            component: () =>
                    import('@/views/customErrorPages/Error404.vue')
        },
        {
            path: '*',
            redirect: { name: 'error404' }
        }
    ]
});
