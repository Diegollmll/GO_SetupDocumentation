import comp from "C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"GO Development Documentation\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Quick Navigation\",\"slug\":\"quick-navigation\",\"link\":\"#quick-navigation\",\"children\":[]},{\"level\":2,\"title\":\"Support\",\"slug\":\"support\",\"link\":\"#support\",\"children\":[]}],\"git\":{\"updatedTime\":1735883666000,\"contributors\":[{\"name\":\"Diegollmll\",\"username\":\"Diegollmll\",\"email\":\"diegowiones@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Diegollmll\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
