import MainPage from "@/pages/MainPage"
import PostPage from "@/pages/PostPage"
import AboutPage from "@/pages/AboutPage"
import PostIdPage from "@/pages/PostIdPage"
import PostPageWithStore from "@/pages/PostPageWithStore"
import PostPageCompositionApi from "@/pages/PostPageCompositionApi"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
