import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import ProjectsIndex from "./pages/projects/Index.vue";
import ProjectsShow from "./pages/projects/Show.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/projects",
            name: "projects.index",
            component: ProjectsIndex
        },
        {
            path: "/projects/:id",
            name: "projects.show",
            component: ProjectsShow
        },
    ]
});

export { router };