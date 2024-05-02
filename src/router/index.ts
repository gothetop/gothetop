import {createRouter, createWebHistory} from "vue-router";
import Home from '@/views/home.vue';
import News from '@/views/news.vue';
import About from '@/views/about.vue';
import Detail from '@/views/detail.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'news',
            path: '/news',
            component: News,
            children: [
                {
                    name: "detail",
                    path: 'detail',
                    component: Detail
                }
            ]
        },
        {
            name: 'about',
            path: '/about',
            component: About
        }
    ]
})

export default router;

