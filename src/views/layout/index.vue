<template>
	<a-layout class="h-screen">
		<a-layout-sider
			breakpoint="lg"
			collapsed-width="0"
			@collapse="onCollapse"
			@breakpoint="onBreakpoint"
			class="pt-14"
		>
			<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
				<a-menu-item key="1">
					<span class="nav-text">nav 1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<span class="nav-text">nav 2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<span class="nav-text">nav 3</span>
				</a-menu-item>
				<a-menu-item key="4">
					<span class="nav-text">nav 4</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header :style="{ background: '#fff', padding: 0 }" />
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div
					:style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
				>
					content
				</div>
			</a-layout-content>
			<a-layout-footer style="text-align: center">
				前端性能监控平台 ©2022 Created by WEB x FAMILY 前端家家酒
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const selectedKeys = ref<string[]>(['4']);

const onCollapse = (collapsed: boolean, type: string) => {
	console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
	console.log(broken);
};
</script>
<style lang="scss">
.site-layout-sub-header-background {
	background: #fff;
}

.site-layout-background {
	background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
	background: #141414;
}
</style>
