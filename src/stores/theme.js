import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
// import s11 from "../template/s11/config"
// import s12 from "../template/s12/config"
// import s13 from "../template/s13/config"

// const bb = require("../template/s11/config")

// console.log(bb.colors)

export const useThemeStore = defineStore('theme',() => {
  const res = reactive({
    templateId: 's11',
    skin: 'red',
  })

  // const conf = res.templateId === 12 ? s12.colors : s13.colors;
  // console.log(res)
  // return {
  //   skin: res.skin,
  //   templateId: res.templateId,
  //   conf,
  // }

  return res
})
// export const useThemeStore = defineStore('theme',{
//   state: () => {
//     return { 
//       templateId: 12,
//       skin: 'red',
//       cong: aa.colors,
//      }
//   },
// })
