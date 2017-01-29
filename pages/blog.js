import React, { Component } from 'react'
import Link from 'next/prefetch'
import Head from 'next/head'
import Page from '../layouts/main'
import Post from '../components/Post'
import PostListItem from '../components/PostListItem'
import { posts as POSTS } from '../posts'

class Blog extends Component {
  static async getInitialProps ({pathname, query}) {
    const { slug, year } = query
    const posts = POSTS.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    const yearPost = year && posts.filter(elt => (`${new Date(elt.published_at).getFullYear()}` === year))
    const post = slug && yearPost.filter(elt => elt.slug === slug)[0]
    return {
      pathname,
      query,
      yearPost,
      posts,
      post
    }
  }

  componentDidMount () {
    // console.log(this.props)
  }

  render () {
    const { query: { slug, year }, yearPost, post, posts } = this.props
    return (
      <Page>
        <Head>
          <link rel="stylesheet" href="/static/css/gruvbox-dark.css"/>
        </Head>
          <div className={'xyz-blog'}>
            {
              !!post && !!post.markdown && (
                <Post title={post.title} when={post.published_at} markdown={post.markdown}/>
              )
            }
            {
              !post && slug && (
                <Post title={'Not found'} markdown={`Post \`${slug}\` cannot be found.`}/>
              )
            }
            {
              !slug && year && (
                <div>
                  <h1>{`Posts from ${year}`}</h1>
                  <div>
                    {
                      yearPost.length > 0
                        ? yearPost.map(({ title, published_at, slug }, idx) => (
                          <div key={idx}>
                            <PostListItem
                              title={title}
                              when={published_at}
                              slug={slug}
                            />
                          </div>
                        ))
                        : 'No posts.'
                    }
                  </div>
                </div>
              )
            }
            {
              !slug && !year && (
                <div>
                  <h1>{`All blog posts`}</h1>
                  <div>
                    {
                      posts.length > 0
                        ? posts.map(({title, published_at, slug}, idx) => (
                          <div key={idx}>
                            <PostListItem
                              title={title}
                              when={published_at}
                              slug={slug}
                            />
                          </div>
                        ))
                        : 'No posts.'
                    }
                  </div>
                </div>
              )
            }
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
          </div>
      </Page>
    )
  }
}

export default Blog
