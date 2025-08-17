import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Mandate from '../views/Mandate.vue'
// import MissionVision from '../views/MissionVision.vue'
// import OrgChart from '../views/OrgChart.vue'
// import ServicePledge from '../views/ServicePledge.vue'
// import Announcements from '../views/Announcements.vue'
// import News from '../views/News.vue'
// import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/mandate', name: 'Mandate', component: Mandate },
  // { path: '/mission-vision', name: 'MissionVision', component: MissionVision },
  // { path: '/org-chart', name: 'OrgChart', component: OrgChart },
  // { path: '/service-pledge', name: 'ServicePledge', component: ServicePledge },
  // { path: '/announcements', name: 'Announcements', component: Announcements },
  // { path: '/news', name: 'News', component: News },
  // { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
