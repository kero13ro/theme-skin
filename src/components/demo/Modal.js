import { ref, h } from 'vue'

export default {
  props: {
  },
  setup(props) {
    const count = ref(1)

    // 返回渲染函数
    return () => h('div', count.value)
  }
}