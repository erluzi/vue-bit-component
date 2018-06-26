import Home from '../views/Home.vue';
import TButton from '../views/button/TButton.vue';
import TLoader from '../views/loader/TLoader.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/TButton', name: 'TButton', component: TButton},
    {path: '/TLoader', name: 'TLoader', component: TLoader},
];

export default routes;