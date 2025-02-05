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
                    component: () => import("../views/Home.vue")
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