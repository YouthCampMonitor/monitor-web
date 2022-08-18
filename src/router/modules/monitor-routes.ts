export default [
	{
		path: '/',
		name: 'main',
		redirect: "/home",
		component: () => import('@/views/layout/index.vue'),
		children: [
			{
				path: 'home',
				name: 'home',
				component: () => import('@/views/main/index.vue')
			},
			{
				path:'page1',
				name:'page1',
				component: () => import('../../views/page1/page1.vue')
			},
			{
				path:'page2',
				name:'page2',
				component: () => import('../../views/page2/page2.vue')
			}
		]
	}
]
