import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Cellhasher Docs",
  tagline: "Official documentation for Cellhasher",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://cellhasher.github.io",
  baseUrl: "/docs/",

  organizationName: "Cellhasher",
  projectName: "docs",

  onBrokenLinks: "throw",

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: [["docusaurus-plugin-pagefind", {}]],

  plugins: ["docusaurus-plugin-image-zoom"],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/cellhasher/docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      config: {},
    },
    image: "img/brand/home-hero.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Cellhasher Docs",
      logo: {
        alt: "Cellhasher Logo",
        src: "img/brand/logo.avif",
      },
      hideOnScroll: true,
      items: [
        {
          href: "https://cellhasher.com/",
          label: "Store",
          position: "right",
        },
        {
          href: "https://github.com/CellHasher",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Welcome",
              to: "/",
            },
            {
              label: "Set-Up (Download)",
              to: "/cellhasher-control/set-up-download",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/invite/9bGE6e4X2c",
            },
            {
              label: "X",
              href: "https://x.com/CellHasher",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Store",
              href: "https://cellhasher.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/CellHasher",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cellhasher.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
