<template>
  <div
    :class="[
      'flex',
      `flex-direction-${direction}`,
      `flex-justify-${justify}`,
      `flex-align-${align}`,
      { 'flex-wrap': wrap },
      { 'flex-gap': gap }
    ]"
    :style="gap ? `gap: ${gap}px` : ''"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  wrap?: boolean
  gap?: number
}

withDefaults(defineProps<Props>(), {
  direction: 'row',
  justify: 'start',
  align: 'start',
  wrap: false,
  gap: 0
})
</script>

<style lang="less" scoped>
@import 'library/tokens/variables.less';

.flex {
  display: flex;

  // Direction
  &-direction-row {
    flex-direction: row;
  }

  &-direction-column {
    flex-direction: column;
  }

  &-direction-row-reverse {
    flex-direction: row-reverse;
  }

  &-direction-column-reverse {
    flex-direction: column-reverse;
  }

  // Justify
  &-justify-start {
    justify-content: flex-start;
  }

  &-justify-end {
    justify-content: flex-end;
  }

  &-justify-center {
    justify-content: center;
  }

  &-justify-between {
    justify-content: space-between;
  }

  &-justify-around {
    justify-content: space-around;
  }

  &-justify-evenly {
    justify-content: space-evenly;
  }

  // Align
  &-align-start {
    align-items: flex-start;
  }

  &-align-end {
    align-items: flex-end;
  }

  &-align-center {
    align-items: center;
  }

  &-align-stretch {
    align-items: stretch;
  }

  &-align-baseline {
    align-items: baseline;
  }

  // Wrap
  &.flex-wrap {
    flex-wrap: wrap;
  }
}
</style>
