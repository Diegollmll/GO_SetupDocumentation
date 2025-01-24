export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"GO Development Documentation"} }],
  ["/guide/prerequisites.html", { loader: () => import(/* webpackChunkName: "guide_prerequisites.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/prerequisites.html.js"), meta: {"title":"Prerequisites and Software Installation"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"GO Development Guide"} }],
  ["/guide/deployment/setup.html", { loader: () => import(/* webpackChunkName: "guide_deployment_setup.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/deployment/setup.html.js"), meta: {"title":""} }],
  ["/guide/deployment/verification.html", { loader: () => import(/* webpackChunkName: "guide_deployment_verification.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/deployment/verification.html.js"), meta: {"title":""} }],
  ["/guide/installation/database.html", { loader: () => import(/* webpackChunkName: "guide_installation_database.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/installation/database.html.js"), meta: {"title":"Repostiories, Database and Application Setup"} }],
  ["/guide/installation/iis.html", { loader: () => import(/* webpackChunkName: "guide_installation_iis.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/installation/iis.html.js"), meta: {"title":"Final Configuration Steps"} }],
  ["/guide/installation/software.html", { loader: () => import(/* webpackChunkName: "guide_installation_software.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/installation/software.html.js"), meta: {"title":"Software Installation"} }],
  ["/guide/installation/windows.html", { loader: () => import(/* webpackChunkName: "guide_installation_windows.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/installation/windows.html.js"), meta: {"title":"Windows Configuration"} }],
  ["/guide/development/advanced-features.html", { loader: () => import(/* webpackChunkName: "guide_development_advanced-features.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/development/advanced-features.html.js"), meta: {"title":"Advanced Features"} }],
  ["/guide/development/best-practices.html", { loader: () => import(/* webpackChunkName: "guide_development_best-practices.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/development/best-practices.html.js"), meta: {"title":"GO Development Best Practices"} }],
  ["/guide/development/first-app.html", { loader: () => import(/* webpackChunkName: "guide_development_first-app.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/development/first-app.html.js"), meta: {"title":"Creating Your First GO Application"} }],
  ["/guide/troubleshooting/common-issues.html", { loader: () => import(/* webpackChunkName: "guide_troubleshooting_common-issues.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/troubleshooting/common-issues.html.js"), meta: {"title":"Common Installation Issues"} }],
  ["/guide/troubleshooting/error-reference.html", { loader: () => import(/* webpackChunkName: "guide_troubleshooting_error-reference.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/guide/troubleshooting/error-reference.html.js"), meta: {"title":"Error Reference Guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/PC/Documents/Go_VuePress/go-documentation/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
