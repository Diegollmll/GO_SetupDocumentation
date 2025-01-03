import comp from "C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"GO Development Guide\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Getting Started\",\"slug\":\"getting-started\",\"link\":\"#getting-started\",\"children\":[]},{\"level\":2,\"title\":\"Need Help?\",\"slug\":\"need-help\",\"link\":\"#need-help\",\"children\":[]}],\"git\":{\"updatedTime\":1735883666000,\"contributors\":[{\"name\":\"Diegollmll\",\"username\":\"Diegollmll\",\"email\":\"diegowiones@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Diegollmll\"}]},\"filePathRelative\":\"guide/README.md\"}")
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
