import { createRouter, createWebHistory } from 'vue-router'
import monitorRoutes from './modules/monitor-routes'

// 创建vueRouter实例
const router = createRouter({
	history: createWebHistory(),
	routes: monitorRoutes
})

export default router
