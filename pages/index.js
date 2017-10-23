import Link from "next/link";
import Head from "next/head";
import { index } from "../xyz";
import Header from "../components/Header";
import Page from "../layouts/main";
import Markdown from "../components/MarkdownRenderer";

export default () => (
  <Page>
    <Head>
      <title>{index.title}</title>
    </Head>
    <div className={"xyz-index"}>
      {index &&
        index.description && (
          <Markdown className={"xyz-description"} source={index.description} />
        )}
      {index &&
        index.links && (
          <nav className={"xyz-index-links"}>
            {index.links.map(({ href, element }, idx) => (
              <Link prefetch key={idx} href={href}>
                <a className={"xyz-index-link"}>{element}</a>
              </Link>
            ))}
          </nav>
        )}
    </div>
    <style jsx>
      {`
        .xyz-index {
          max-width: 48em;
          margin: 0 auto;
          line-height: 2;
          padding: 1em;
          text-align: center;
          justify-content: center;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
        }
        .xyz-index-links {
          margin: 1em;
          text-align: center;
        }
        .xyz-index-link {
          margin: 0 15px;
        }
        :global(.xyz-description) {
          text-align: center;
        }
      `}
    </style>
  </Page>
);
