import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  logo: (
    <>
      <svg
        width="48"
        height="29"
        viewBox="0 0 63 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M46.9565 5.0801L42.0443 10.0458L47.6338 15.6344L53.2232 21.223L58.1117 16.3356C60.8003 13.6476 63 11.3949 63 11.3296C63 11.2642 60.4954 8.71406 57.4344 5.66257L51.8688 0.114502L46.9565 5.0801ZM4.90823 10.0632L0 14.981L14.3981 29.4331L28.7961 43.8854L33.7655 38.915L38.7347 33.9446L24.3348 19.5451C16.4149 11.6253 9.90822 5.14547 9.87559 5.14547C9.84296 5.14547 7.60764 7.35841 4.90823 10.0632ZM28.576 10.0632L23.6597 14.981L32.5129 23.9129L41.3659 32.8447L46.3525 27.8592L51.3389 22.8738L42.4753 14.0096C37.6004 9.13434 33.5849 5.14547 33.552 5.14547C33.5192 5.14547 31.28 7.35841 28.576 10.0632Z"
          fill="url(#paint0_linear_512_13479)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_512_13479"
            x1="-4.69387e-07"
            y1="21.9999"
            x2="63"
            y2="21.9999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B51DA6" />
            <stop offset="0.50702" stop-color="#7924BA" />
            <stop offset="0.971875" stop-color="#265EC7" />
          </linearGradient>
        </defs>
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>WeaveDB</span>
    </>
  ),
  project: {
    link: "https://twitter.com/weave_db",
    icon: (
      <svg width="25" height="20" viewBox="0 0 25 20" fill="none">
        <path
          d="M8.05016 19.75C17.1045 19.75 22.0583 12.2468 22.0583 5.74192C22.0583 5.53098 22.0536 5.31536 22.0442 5.10442C23.0079 4.40752 23.8395 3.54432 24.5 2.55536C23.6025 2.95466 22.6496 3.21544 21.6739 3.3288C22.7013 2.71297 23.4705 1.74553 23.8391 0.605828C22.8726 1.17862 21.8156 1.58267 20.7134 1.80067C19.9708 1.01162 18.989 0.489177 17.9197 0.314112C16.8504 0.139047 15.7532 0.321111 14.7977 0.832157C13.8423 1.3432 13.0818 2.15477 12.6338 3.14137C12.1859 4.12798 12.0754 5.23468 12.3195 6.29036C10.3625 6.19215 8.44794 5.68377 6.69998 4.79816C4.95203 3.91255 3.40969 2.6695 2.17297 1.14958C1.5444 2.2333 1.35206 3.51571 1.63503 4.73615C1.918 5.9566 2.65506 7.02351 3.69641 7.72005C2.91463 7.69523 2.14998 7.48474 1.46563 7.10598V7.16692C1.46492 8.30421 1.8581 9.40665 2.57831 10.2868C3.29852 11.167 4.30132 11.7706 5.41625 11.995C4.69206 12.1932 3.93198 12.2221 3.19484 12.0794C3.50945 13.0575 4.12157 13.913 4.94577 14.5264C5.76997 15.1398 6.76512 15.4807 7.79234 15.5013C6.04842 16.8712 3.89417 17.6142 1.67656 17.6107C1.28329 17.6101 0.890399 17.586 0.5 17.5385C2.75286 18.9838 5.37353 19.7514 8.05016 19.75Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  chat: {
    link: "https://discord.com/invite/YMe3eqf69M",
  },
  docsRepositoryBase: "https://github.com/drumfeet/nextra-test/blob/main",
  primaryHue: 300,
  footer: {
    component: <></>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – WeaveDB",
      description: "NoSQL Database as a Smart Contract",
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:url" content="https://docs.weavedb.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="WeaveDB Documentation" />
      <meta
        property="og:description"
        content="NoSQL Database as a Smart Contract"
      />
      <meta
        property="og:image"
        content="https://weavedb.dev/twitterImage.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="WeaveDB Documentation" />
      <meta
        name="twitter:description"
        content="NoSQL Database as a Smart Contract"
      />
      <meta
        name="twitter:image"
        content="https://weavedb.dev/twitterImage.png"
      />
    </>
  ),
}

export default config
