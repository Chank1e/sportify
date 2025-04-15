<template>
  <nav class="navigation">
    <Flex :gap="16" :align="'center'">
      <slot name="left"></slot>
      <Flex :gap="8" :justify="'center'" class="navigation-items">
        <slot></slot>
      </Flex>
      <slot name="right"></slot>
    </Flex>
  </nav>
</template>

<script setup lang="ts">
import { Flex } from 'library'
</script>

<style lang="less" scoped>
@import 'library/tokens/variables.less';

.navigation {
  padding: @spacing-unit * 2 @spacing-unit * 4;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: @border-radius-base;
  margin-bottom: @spacing-unit * 4;
  
  .navigation-items {
    flex: 1;
  }
}
</style> 