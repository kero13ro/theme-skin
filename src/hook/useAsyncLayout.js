import { ref, nextTick, watch } from 'vue'
import { useThemeStore } from "@/stores/theme.js";

export default function () {
  const theme = useThemeStore();
  const { isShow, render } = forceRender();

  let AsyncLayout = defineAsyncComponent(() =>
    import(`../template/${theme.templateId}/Layout.vue`)
  );

  watch(theme, () => {
    AsyncLayout = defineAsyncComponent(() =>
      import(`../template/${theme.templateId}/Layout.vue`)
    );
    render();
  });

  return {
    AsyncLayout,
    isShow,
  }
}