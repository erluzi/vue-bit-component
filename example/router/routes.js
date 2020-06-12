import Home from '../views/Home.vue'
import TButton from '../views/button/TButton.vue'
import TLoader from '../views/loader/TLoader.vue'
import TPrompt from '../views/prompt/TPrompt.vue'

import PageSynthesis from '../views/pageSynthesis/PageSynthesis.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/TButton', name: 'TButton', component: TButton},
  {path: '/TLoader', name: 'TLoader', component: TLoader},
  {path: '/TPrompt', name: 'TPrompt', component: TPrompt},
  {path: '/PageSynthesis', name: 'PageSynthesis', component: PageSynthesis},
]

export default routes
