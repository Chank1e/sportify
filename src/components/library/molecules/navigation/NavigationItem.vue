<template>
  <Button
    :variant="isActive ? 'primary' : 'text'"
    :size="size"
    class="navigation-item"
    :class="{ 'is-active': isActive }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import { Button } from 'library'

interface Props {
  isActive?: boolean
  size?: 'small' | 'medium' | 'large'
}

withDefaults(defineProps<Props>(), {
  isActive: false,
  size: 'medium'
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<style lang="less" scoped>
@import 'library/tokens/variables.less';

.navigation-item {
  position: relative;
  transition: @transition-base;
  
  &.is-active {
    font-weight: @font-weight-bold;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: @primary-color;
      border-radius: 1px;
    }
  }
}
</style> 