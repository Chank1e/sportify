<template>
  <Flex class="match">
    <div class="match__team">
      <img src="https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Manchester%20United.png?raw=true" alt="some" class="match__team-logo">
      <span class="match__team-name">MU</span>
    </div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from 'library';
import { Match } from 'src/stores/matchesStore';


defineProps<{ match?: Match }>()
</script>
