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
                    path: "/boardlist",
                    name: "boardlist",
                    component: () => import("../views/BoardList.vue")
                }
            ]
        }
    ]
});