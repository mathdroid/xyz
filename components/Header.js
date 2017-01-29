import { index } from '../xyz'
import Link from 'next/prefetch'
export default () => (
  <div className={'xyz-header'}>
    <Link href={'/'}>
      <a>{index.title}</a>
    </Link>
    <style jsx>
      {
        `
        .xyz-header {
          position: absolute;
          top: 0%;
          padding: 1em;
        }
        `
      }
    </style>
  </div>
)
