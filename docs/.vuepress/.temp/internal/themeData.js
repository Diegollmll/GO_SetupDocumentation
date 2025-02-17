export const themeData = JSON.parse("{\"logo\":\"https://www.generativeobjects.com/images/logo-generative-objevts.png?crc=3880192056\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Guide\",\"link\":\"/guide/\"},{\"text\":\"Support\",\"link\":\"https://www.generativeobjects.com/\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"Getting Started\",\"collapsible\":false,\"children\":[\"/guide/README.md\",\"/guide/prerequisites.md\"]},{\"text\":\"Installation\",\"collapsible\":false,\"children\":[\"/guide/installation/software.md\",\"/guide/installation/windows.md\",\"/guide/installation/database.md\",\"/guide/installation/iis.md\"]},{\"text\":\"Development\",\"collapsible\":false,\"children\":[\"/guide/development/first-app.md\",\"/guide/development/best-practices.md\"]},{\"text\":\"Troubleshooting\",\"collapsible\":false,\"children\":[\"/guide/troubleshooting/common-issues.md\",\"/guide/troubleshooting/error-reference.md\"]}]},\"repo\":\"https://github.com/generative-objects-org\",\"docsDir\":\"docs\",\"editLink\":true,\"editLinkPattern\":\"https://www.generativeobjects.com/\",\"lastUpdated\":true,\"contributors\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
