import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  // base: "/my-docs/",


  lang: "zh-CN",
  title: "itsven",
  description: "itsven blog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

