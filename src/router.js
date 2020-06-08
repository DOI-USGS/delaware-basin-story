import Vue from "vue";
import Router from "vue-router";
import Visualization from "./components/Visualization";

Vue.use(Router);
function lazyLoad(view){
    return() => import(`@/views/${view}.vue`)
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Visualization',
            component: Visualization
        },
        {
            path: "/404",
            name: "Error404",
            component: lazyLoad('Error404')
        },
        {
            path: "*",
            redirect: { name: "Error404" }
        }
    ]
});


