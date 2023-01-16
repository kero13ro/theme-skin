import { ref, nextTick, watch, defineAsyncComponent } from 'vue'
import useForceRender from "@/hook/useForceRender.js";
import { useThemeStore } from "@/stores/theme.js";

export default function () {
  const theme = useThemeStore();
  const { isShow, render } = useForceRender();

  let AsyncLayout = defineAsyncComponent(() =>
    import(`@/template/${theme.templateId}/Layout.vue`)
  );

  watch(theme, () => {
    AsyncLayout = defineAsyncComponent(() =>
      import(`@/template/${theme.templateId}/Layout.vue`)
    );
    render();
  });

  return {
    AsyncLayout,
    isShow,
  }
}