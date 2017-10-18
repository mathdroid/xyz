import Head from "next/head";
import { index } from "../xyz";

export default ({ mainHue }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    {/* global styles */}
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font: 16px Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          serif;
        /*background-color: hsl(${(mainHue + 180) % 360}, 5%, 15%);*/
        background-color: rgba(0,0,0,0.05);
        color: rgba(0,0,0,0.75);
      }

      a {
        color: ${`hsl(${mainHue}, 50%, 60%)` || index.accent || "#22BAD9"};
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        text-decoration:none;
      }

      a:hover {
        color: #fff;
        background: ${`hsl(${mainHue}, 50%, 60%)` || index.accent || "#22BAD9"};
        text-decoration: none;
      }
      p {
        padding-bottom: 1em;
      }
    `}</style>
  </div>
);
