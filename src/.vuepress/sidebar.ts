import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "目录",
      prefix: "/",
      link: "/",
    },
    {
      text: "文档",
      prefix: "posts/docs",
      children: "structure",
      collapsible: true,
    }
  ],
});
