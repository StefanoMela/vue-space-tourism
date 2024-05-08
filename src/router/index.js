import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../pages/LandingPage.vue';
import DestinationPage from '../pages/DestinationPage.vue';
import CrewPage from '../pages/CrewPage.vue';
import TechnologyPage from '../pages/TechnologyPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingPage,
            link: '00 Home'
        },
        {
            path: '/destination',
            name: 'destination',
            component: DestinationPage,
            link: '01 Destination'
        },
        {
            path: '/crew',
            name: 'crew',
            component: CrewPage,
            link: ' 02 Crew'
        },
        {
            path: '/technology',
            name: 'technology',
            component: TechnologyPage,
            link: '03 Technology'
        },
    ]
});

export { router };