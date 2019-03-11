import AddWebsite   from "./pages/AddWebsite.vue";
import Analytics    from "./pages/Analytics.vue";
import Competitors  from "./pages/Competitors.vue";
import Keywords     from "./pages/Keywords.vue";
import FinishSetup  from "./pages/FinishSetup.vue";


export const routes = [
    { path: '/step1', component: AddWebsite },
    { path: '/step2', component: Analytics },
    { path: '', component: Competitors },
    { path: '/step4', component: Keywords },
    { path: '/step5', component: FinishSetup },
    { path: '*', redirect: '/'}
]