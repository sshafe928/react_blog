import {Link} from 'react-router-dom'

const Post = ({title, date, image, page, desc}) => {
  function truncate(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
  return str;
}
  return (
    <div className='bg-white py-6 shadow-lg text-center w-2/5 mb-8 relative'>
      <header >
        <h6 className="font-Cairo uppercase text-sm text-gray-500">Daily Outfits</h6>
        <Link to={`/page/${page}`} className="font-Cactus text-xl text-gray-900 uppercase">{truncate(title, 40)}</Link>
        <h6 className="font-Cairo text-sm text-gray-500 my-1">{date}</h6>
      </header>

      <section className="mb-4">
        <Link to={`/page/${page}`}>
          <img src={image} alt={title} className="w-full h-96 object-cover" />
        </Link>
      </section>

      <footer className="text-gray-700 relative flex flex-col">
        <p className="font-Cairo px-4">{truncate(desc, 80)} <Link to={`/page/${page}`}>CONTINUE READING</Link></p>
        <Link to={`/page/${page}`} className="font-Cairo ml-auto mr-2">VIEW COMMENTS</Link>
      </footer>
    </div>
  )
}

export default Post