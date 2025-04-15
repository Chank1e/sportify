import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppWindowStore = defineStore('appWindow', () => {
  const isDragging = ref(false)

  function setDragging(value: boolean) {
    isDragging.value = value
  }

  return {
    isDragging,
    setDragging
  }
})
