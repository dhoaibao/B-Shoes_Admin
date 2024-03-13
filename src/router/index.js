import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Login.vue")
    },

    {
        path: "/product",
        name: "product",
        component: () => import("@/views/Product.vue")
    },

    {
        path: "/account",
        name: "account",
        component: () => import("@/views/Account.vue")
    },

    {
        path: "/order",
        name: "order",
        component: () => import("@/views/Order.vue")
    },

    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue")
    },

    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register.vue")
    },

    {
        path: "/productdetail/:id",
        name: "productdetail",
        component: () => import("@/views/ProductDetail.vue")
    },

    {
        path: "/addproduct",
        name: "addproduct",
        component: () => import("@/views/AddProduct.vue")
    },

    {
        path: "/editproduct/:id",
        name: "editproduct",
        component: () => import("@/views/EditProduct.vue")
    },

    {
        path: "/editaccount/:id",
        name: "editaccount",
        component: () => import("@/views/EditAccount.vue")
    },

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;  