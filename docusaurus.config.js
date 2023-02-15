// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "COMPSCI 326",
  tagline: "Web Programming",
  url: "https://umass-cs-326.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "umass-cs-326", // Usually your GitHub org/user name.
  projectName: "umass-cs-326.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    "./src/plugins/webpack_mod",
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Announcements",
          blogDescription: "Announcements",
          blogSidebarTitle: "Recent Announcements",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Home",
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          { to: "/blog", label: "Announcements", position: "left" },
          { to: "/docs/intro", label: "Material", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Material",
            items: [
              {
                label: "Syllabus",
                to: "docs/information/syllabus",
              },
              {
                label: "Schedule",
                to: "docs/information/schedule",
              },
              {
                label: "Lectures",
                to: "docs/lectures/course-intro",
              },
            ],
          },
          {
            title: "Assignments",
            items: [
              {
                label: "Exercises",
                to: "docs/information/schedule/#exercises",
              },
              {
                label: "Homework",
                to: "docs/information/schedule/#homework",
              },
              {
                label: "Project",
                to: "docs/information/schedule/#project",
              },
            ],
          },
          {
            title: "Learning Systems",
            items: [
              {
                label: "Moodle",
                href: "https://umass.moonami.com",
              },
              {
                label: "GitHub Classroom",
                href: "https://github.com/facebook/docusaurus",
              },
              {
                label: "Piazza",
                href: "https://piazza.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} COMPSCI 326`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
