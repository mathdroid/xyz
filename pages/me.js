import Page from '../layouts/main'
import Post from '../components/Post'
import { me } from '../xyz'

export default () => (
  <Page>
    <div className={'xyz-blog'}>
      <Post title={me.title} when={me.published_at} markdown={me.markdown} />
    </div>
    <style jsx>{`
      :global(.xyz-blog) {
        max-width: 48em;
        margin: 0 auto;
        line-height: 2;
        padding: 1em;
      }
      :global(blockquote) {
        border-left-style: solid;
        border-left-width: 0.5em;
        border-left-color: #16161d;
        padding-left: 1em;
        margin-left: -1.5em;
        color: #999;
      }
      :global(.xyz-blog) :global(p) {
        margin-top: 5px;
        margin-bottom: 5px;
      }
    `}</style>
  </Page>
)
