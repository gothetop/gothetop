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
                    component: Detail,
                    // 第一种写法：将路由收到的所有 params 参数作为props传给路由组件  这个配置只能和param传参打配合
                    //props: true,

                    // 第二种写法：可以决定自己想要什么
                    // 当写成函数式的时候，该函数可以接受一个参数，这个参数就是route对象，包含着我们想要的各种信息
                    props(route){
                        return route.query
                    }

                    // 第三种写法：对象写法  写死了，这个第三种写法很少用
                    // props: {
                    //     a: 100,
                    //     b:200,
                    //     c:300
                    // }
                }
            ]
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path:'/',
            // 重定向，让指定的路径重新定向到另一个路径
            // 这里是让进入网站后直接定向到home页面
            redirect: 'home',
        }
    ]
})

export default router;

