<template>
  <Flex class="match" justify="space-between" align="center" gap="medium">
    <!-- Home Team -->
    <Flex class="match__team" direction="column" align="center" gap="small">
      <img 
        src="https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Manchester%20United.png?raw=true" 
        alt="Manchester United" 
        class="match__team-logo"
      >
      <span class="match__team-name">Manchester United</span>
    </Flex>

    <!-- Score -->
    <Flex class="match__score" direction="column" align="center" gap="small">
      <div class="match__score-numbers">
        <span class="match__score-home">2</span>
        <span class="match__score-separator">:</span>
        <span class="match__score-away">1</span>
      </div>
      <div class="match__time">75'</div>
    </Flex>

    <!-- Away Team -->
    <Flex class="match__team" direction="column" align="center" gap="small">
      <img 
        src="https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Liverpool FC.png?raw=true" 
        alt="Liverpool" 
        class="match__team-logo"
      >
      <span class="match__team-name">Liverpool</span>
    </Flex>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from 'library';
import { Match } from 'src/stores/matchesStore';

defineProps<{ match?: Match }>()
</script>

<style lang="less" scoped>
@import 'library/tokens/variables.less';

.match {
  padding: @padding-medium;
  background: @background-color;
  border-radius: @border-radius-base;
  width: 100%;

  &__team {
    flex: 1;
    
    &-logo {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }

    &-name {
      font-size: @font-size-small;
      font-weight: 500;
      color: @text-color;
    }
  }

  &__score {
    &-numbers {
      font-size: @font-size-large;
      font-weight: 600;
      color: @text-color;
    }

    &-separator {
      margin: 0 @padding-small;
    }
  }

  &__time {
    font-size: @font-size-small;
    color: @text-color-secondary;
  }
}
</style>
