<template>
  <span
    :class="[
      'icon',
      `icon--${name}`,
      `icon--${size}`,
      { 'icon--spin': spin }
    ]"
    :style="color ? `color: ${color}` : ''"
    aria-hidden="true"
  >
    <svg v-if="iconSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" v-html="iconSvg"></svg>
    <slot v-else></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getIconSvg } from './icons';
import type { IconName } from './icons';

interface Props {
  name: IconName
  size?: 'small' | 'medium' | 'large'
  color?: string
  spin?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  color: '',
  spin: false
})

// Get the SVG string for the icon
const iconSvg = computed(() => {
  return getIconSvg(props.name)
})
</script>

<style lang="less" scoped>
@import '../../tokens/variables.less';

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  // Sizes
  &--small {
    font-size: @font-size-small;
    width: 16px;
    height: 16px;
  }

  &--medium {
    font-size: @font-size-medium;
    width: 20px;
    height: 20px;
  }

  &--large {
    font-size: @font-size-large;
    width: 24px;
    height: 24px;
  }

  // Animation
  &--spin {
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
