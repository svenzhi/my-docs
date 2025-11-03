import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "weui:note-filled",
      link: "docs/README.md"
    },
    {
      text: "工具",
      icon: "icon-park:toolkit",
      prefix: "docs/tools",
      children: "structure",
    },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
