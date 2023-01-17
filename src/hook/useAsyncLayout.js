import { ref, nextTick, watch, defineAsyncComponent, shallowRef } from 'vue'
import { useThemeStore } from "@/stores/theme.js";

export default function () {
  const theme = useThemeStore();
  const AsyncLayout = shallowRef()
  const Layouts = import.meta.glob("../template/*/Layout.vue");

  watch(
    () => theme.templateId,
    () => {
      AsyncLayout.value = defineAsyncComponent(Layouts[`../template/${theme.templateId}/Layout.vue`])
    },
    { immediate: true }
  );

  return {
    AsyncLayout,
  }
}