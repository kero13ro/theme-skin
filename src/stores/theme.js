import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme',() => {
  const res = reactive({
    templateId: 's11',
    skin: '',
    colors: {},
    fontFamily: {},
  })

  return res
})
