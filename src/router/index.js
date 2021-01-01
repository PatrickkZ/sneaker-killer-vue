import Vue from 'vue'
import Router from 'vue-router'

import Layout from "@/components/Layout";
import SneakerMain from "@/components/content/SneakerMain";
import PersonalCenter from "@/components/content/PersonalCenter";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/sneaker-killer',
            name: 'HomePage',
            component: Layout,
            redirect: '/sneaker-killer/home',
            children: [
                {
                    path: 'home',
                    name: 'Main',
                    component: SneakerMain
                },
                {
                    path: 'center',
                    name: 'PersonalCenter',
                    component: PersonalCenter
                }
            ]
        }
    ]
})
