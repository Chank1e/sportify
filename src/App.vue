<script setup lang="ts">
import DefaultLayout from "components/layouts/DefaultLayout.vue";
import DragButton from 'components/tauri/drag-button/DragButton.vue';
import SettingsButton from 'components/tauri/settings-button/SettingsButton.vue';
import { Flex } from 'library';
</script>

<template>
	<DefaultLayout>
		<div class="app">
			<header class="header">
				<Flex justify="between" align="center">
					<DragButton/>
					<div style="border-radius: 10px; background: rgba(255,255,255,0.1); padding: 0 8px; height: 20px; line-height:20px;">
						<span style="color: white; font-weight: 500">
							42:32
						</span>
					</div>
					<SettingsButton />
				</Flex>
			</header>
			<main class="main">
				<router-view></router-view>
			</main>
		</div>
	</DefaultLayout>
</template>

<style lang="less" scoped>
@import 'library/tokens/variables.less';

.header {
	margin-bottom: @spacing-unit * 4;
}
</style>
