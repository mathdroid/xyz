import Link from 'next/prefetch'
export default ({title, when, slug}) => {
  const year = new Date(when).getFullYear()
  const date = new Date(when).toDateString()
  const href = `/blog?slug=${slug}&year=${year}`
  const as = `/blog/${year}/${slug}`
  return (
    <div className={'post'}>
      <div className={'date'}>{date}</div>
      <div className={'title'}><Link href={href} as={as}><a>{title}</a></Link></div>
      <style jsx>{`
      .post {
        margin-bottom: 10px;
        display: table;
      }

      .date {
        display: table-cell;
        width: 140px;
        margin-right: 30px;
        color: #999;
      }
      .title {
        display: table-cell;
      }

      a {
        text-decoration: none;
      }
    `}</style>
    </div>
  )
}
