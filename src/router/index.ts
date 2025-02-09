import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            redirect: "/"
        },
        {
            path: "/",
            name: "layout",
            component: () => import("../layouts/Layout.vue"),
            children: [
                {
                    path: "/home",
                    name: "home",
                    component: () => import("../views/Home.vue"),
                    children: [
                        {
                            path: "boardlist",
                            name: "boardlist",
                            component: () => import("../views/BoardList.vue")
                        },
                        {
                            path: "boardwrite",
                            name: "boardwrite",
                            component: () => import("../views/BoardWrite.vue")
                        },
                        {
                            path: "boarddetail/:title",
                            name: "boarddetail",
                            component: () => import("../views/BoardDetail.vue")
                        },
                    ]
                },
                {
                    path: "/hashtag",
                    name: "hashtag",
                    component: () => import("../views/Hashtag.vue")
                },
                {
                    path: "/login",
                    name: "login",
                    component: () => import("../views/Login.vue")
                }
            ]
        }
    ]
});