<template>
    <Button
		    variant="text"
		    size="small"
		    class="drag-button"
		    @mousedown.native="startDragging"
		    squared
    >
      <Icon
        name="drag-indicator"
        color="#2563eb"
      />
    </Button>
</template>

<script setup lang="ts">
import { Button, Icon } from 'library'
import useDragButton from './useDragButton'

const { startDragging } = useDragButton()

</script>
