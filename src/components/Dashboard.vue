<script setup>
import { useThemeStore } from "@/stores/theme.js";
import { useColorMode } from '@vueuse/core'

const theme = useThemeStore();

const themeMap = {
  s11: ["red", "blue"],
  s12: ["gold", "black"],
  s13: ["black", "water"],
};

const mode = useColorMode({
  attribute: 'theme',
  emitAuto: true,
})

const handleSkin = (skin) => {
  theme.skin = skin;
  mode.value = skin;
}

const handleTemp = (temp) => {
  theme.templateId = temp
  handleSkin(themeMap[theme.templateId][0])
}

</script>

<template>
  <div id="Dashboard">
    <el-radio-group
      class="mb8"
      :model-value="theme.templateId"
      @update:modelValue="handleTemp"
    >
      <el-radio-button label="s11" />
      <el-radio-button label="s12" />
      <el-radio-button label="s13" />
    </el-radio-group>
    <br />
    <el-radio-group
      :model-value="theme.skin"
      @update:modelValue="handleSkin"
      size="large"
    >
      <template v-for="skin in themeMap[theme.templateId]">
        <el-radio-button :label="skin" />
      </template>
    </el-radio-group>
  </div>
</template>

<style lang="scss">
#Dashboard {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(#000000, 0.2);
}
</style>
