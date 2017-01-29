import React, { createElement } from 'react'
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
import Link from 'next/prefetch'

export default ({source, className}) => (
  <div>
    <ReactMarkdown
      className={className}
      source={source}
      renderers={{
        link: Link,
        code: (props) => {
          return <span><code>`{props.children}`</code></span>
        },
        code_block: (props) => {
          let className = props.language && 'language-' + props.language
          let code = createElement('code', { className: className }, props.literal)
          return (
            <Highlight className={className}>
              {props.literal}
            </Highlight>
          )
        },
        heading: function (props) {
          const Heading = `h${props.level}`
          return (
            <Heading key={props.nodeKey} data-sourcepos={props['data-sourcepos']} className={'xyz-heading'}>
              <span id={props.children}>
                <a href={`#${props.children}`}>{'#'.repeat(props.level)}</a>
              </span>
              {' '}
              {props.children}
            </Heading>
          )
        },
      }} />
      <style jsx>
        {
          `
          :global(.xyz-heading) {
            margin-top: 1em;
            margin-bottom: 1em;
          }
          :global(.xyz-heading) :global(span) {
            position: absolute;
            margin-left: -60px;
            text-align: right;
            width: 50px;
          `
        }
      </style>
  </div>
)
