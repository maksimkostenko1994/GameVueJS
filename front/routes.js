import FinishedQuests    from './modules/finishedQuestsLeafs/FinishedQuests.vue'
import MainPageInfo      from './modules/mainPageInfo/MainPageInfo.vue'
import GeneralQuestsInfo from './modules/generalQuestsInfo/GeneralQuestsInfo.vue'

import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/finishedQuests',
      component: FinishedQuests
    },
    {
      path: '/',
      component: MainPageInfo
    },
    {
      path: '/quests/:alias',
      component: GeneralQuestsInfo
    }
  ]
})
