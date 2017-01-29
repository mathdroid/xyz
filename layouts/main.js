import Meta from '../components/Meta'
import Link from 'next/prefetch'
import Head from 'next/head'
import { index } from '../xyz'

export default ({ children }) => (
  <div className="main">
    <Head>
      <script dangerouslySetInnerHTML={{__html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-60788487-1', 'auto');
      ga('send', 'pageview');`}} />
    </Head>
    <div className="logo">
      <Link href="/"><a>{index.title}</a></Link>
      {' '}
      {
        index.source && (
          <span>
            (<a href={index.source} target="_blank">src</a>)
          </span>
        )
      }
    </div>

    { children }

    { /* global styles and meta tags */ }
    <Meta />

    { /* local styles */ }
    <style jsx>{`
      .main {
        padding: 25px 50px;
      }

      .logo {
        position: fixed;
        padding-left: 1em;
        background-color: rgba(255,255,255,0.75)
      }

      a {
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }

        .logo {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>
)
