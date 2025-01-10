import {Link} from 'react-router-dom'

const Post = ({title, date, src, alt, page}) => {
  function truncate(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
  return str;
}
  return (
    <div className='bg-white'>
      <header>
        <h6>DAILY OUTFITS</h6>
        <Link to={`/page/${page}`}>{truncate(title.toUpperCase(), 40)}</Link>
        <h6>{date}</h6>
      </header>
      <section>
      <Link to={`/page/${page}`}><img src={src} alt={alt} /></Link>
      </section>
      <footer>
        <p>{truncate(desc, 80)}<Link to={`/page/${page}`}>CONTINUE READING</Link></p>
        <Link to={`/page/${page}`}>VIEW COMMENTS</Link>
      </footer>
    </div>
  )
}

export default Post