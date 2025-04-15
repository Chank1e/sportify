<template>
  <button
    :class="[
      'base-button',
      `base-button--${variant}`,
      `base-button--${size}`,
      { 'base-button--full-width': fullWidth },
      { 'base-button--squared': squared }
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  disabled?: boolean
  squared?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  fullWidth: false,
  disabled: false,
  squared: false
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<style lang="less" scoped>
@import 'library/tokens/variables.less';

.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: @border-radius-base;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  outline: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  // Variants
  &--primary {
    background-color: @primary-color;
    color: white;

    &:hover:not(:disabled) {
      background-color: darken(@primary-color, 10%);
    }
    
    &:active:not(:disabled) {
      background-color: darken(@primary-color, 20%);
      transform: translateY(1px);
    }
  }

  &--secondary {
    background-color: @secondary-color;
    color: white;

    &:hover:not(:disabled) {
      background-color: darken(@secondary-color, 10%);
    }
    
    &:active:not(:disabled) {
      background-color: darken(@secondary-color, 20%);
      transform: translateY(1px);
    }
  }

  &--text {
    background-color: transparent;
    color: @text-color;

    &:hover:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.05);
    }
    
    &:active:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.1);
      transform: translateY(1px);
    }
  }

  // Sizes
  &--small {
    padding: @padding-small;
    font-size: @font-size-small;
  }

  &--medium {
    padding: @padding-medium;
    font-size: @font-size-medium;
  }

  &--large {
    padding: @padding-large;
    font-size: @font-size-large;
  }

  // Full width modifier
  &--full-width {
    width: 100%;
  }

  // Squared modifier
  &--squared {
    aspect-ratio: 1;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
