import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path:'/',
        name:'po',
        component : () => import ("@/PoPage.vue")
    },
    {
        path:'/',
        name:'pr',
        component : () => import ("@/PrPage.vue")
    },
    {
        path:'/pr/create',
        name:'pr.create',
        component : () => import ("@/pr/create.vue")
    }
];
const router = createRouter({
    detail : createWebHistory(),
    routes,
});
export default router;