import Markdown from './MarkdownRenderer'

export default ({title, when, markdown}) => (
  <div className={'post-container'}>
    <h1 className={'post-title'}>{title}</h1>
    {
      when && <p className={'post-meta'}>{when}</p>
    }
    <Markdown className={'post-markdown'} source={markdown} />
    <style jsx>
      {
        `
        :global(.post-markdown) :global(*) {
          max-width: 100%;
        }
        `
      }
    </style>
  </div>
)
