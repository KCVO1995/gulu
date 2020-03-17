module.exports = {
  title: "轱辘 UI",
  description: "一个好用的 UI 框架",
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "入门",
        children: ["/install/", "/get-started/"]
      },
      {
        title: "组件",
        children: [
          "/components/button.md",
          "/components/input.md",
          "/components/grid.md",
          "/components/layout.md",
          "/components/toast.md",
          "/components/tabs.md",
          "/components/popover.md",
          "/components/collapse.md",
        ]
      }
    ]
  },
}