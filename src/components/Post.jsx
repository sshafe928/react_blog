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
        <h6 className="font-Cairo">DAILY OUTFITS</h6>
        <Link to={`/page/${page}`} className="font-Cactus">{truncate(title.toUpperCase(), 40)}</Link>
        <h6 className="font-Cairo">{date}</h6>
      </header>
      <section>
      <Link to={`/page/${page}`}><img src={src} alt={alt} /></Link>
      </section>
      <footer>
        <p className="font-Cactus">{truncate(desc, 80)}<Link to={`/page/${page}`} className="font-Cairo">CONTINUE READING</Link></p>
        <Link to={`/page/${page}`} className="font-Cairo">VIEW COMMENTS</Link>
      </footer>
    </div>
  )
}

export default Post