<template>
	<div class="default-layout" :class="{ 'default-layout__dragging': isDragging }">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { useAppWindowStore } from '@/stores/appWindowStore.ts';
import { storeToRefs } from 'pinia';

const appWindowStore = useAppWindowStore();

const {isDragging} = storeToRefs(appWindowStore);
</script>

<style lang="less" scoped>
@import 'library/tokens/variables.less';

.default-layout {
	background: rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(8px);
	border-radius: @border-radius-large;
	padding: @spacing-unit * 4;
	display: flex;
	flex-direction: column;
	transition: @transition-base;
	opacity: 0.75;

	&:hover {
		background: rgba(0, 0, 0, 0.25);
		opacity: 1;
	}

	&__dragging {
		background:red;
	}
}
</style>
