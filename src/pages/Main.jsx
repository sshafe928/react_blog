import Footer from '../components/footer'
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import Post from '../components/Post';
import { outfits } from '../pages/data'


function Main() {
  const [showPosts, setShowPosts] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(outfits);

  const togglePosts = () => {
    setShowPosts(!showPosts)
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const filtered = outfits.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery]); // Trigger filtering when searchQuery changes

  return (
  <>
  <div className="bg-gray-200">
    <Navbar onSearch={handleSearch}/>
    <img className="absolute left-12 max-w-40 top-28" src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736804643/Screenshot__64_-removebg-preview_mzgu51.png" alt="Star man" />
    <div className="flex justify-center text-4xl">
      <h1 class="p-20 font-Cactus">Bare & Beautiful</h1>
    </div>
    {/* Polaroid Boxes */}
    <div className="flex justify-center gap-16 py-8 px-8 pb-24">
        <div className="relative w-96 h-96 bg-white shadow-lg border-[15px] border-white overflow-hidden">
          <img src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736801834/a5031e26-01c9-4e30-a3b5-c33198ad7eff_hzca4r.jpg" alt="Polaroid" className="w-full h-full object-cover" />
          <button className="  hover:animate-wiggle font-Cairo absolute w-4/5 bottom-36 left-1/2 transform -translate-x-1/2 px-4 py-4 bg-white text-black bg-opacity-80 focus:outline-none" onClick={togglePosts}> OUTFIT JOURNAL </button>
        </div>

        <div className="relative w-96 h-96 bg-white shadow-lg border-[15px] border-white overflow-hidden">
          <img src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736801834/Shirt_Design_N51107_Trending_Today_d7rm27.jpg" alt="Polaroid" className="w-full h-full object-cover" />
          <a href="/shop"><button className="font-Cairo absolute w-4/5 bottom-36 left-1/2 transform -translate-x-1/2 px-4 py-4 bg-white text-black bg-opacity-80 focus:outline-none"> SHOP OUTFITS </button></a>
        </div>

        <div className="relative w-96 h-96 bg-white shadow-lg border-[15px] border-white overflow-hidden">
          <img src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736801834/Want_To_Build_a_Capsule_Wardrobe_in_2023__Start_Here_prol2t.jpg" alt="Polaroid" className="w-full h-full object-cover" />
          <a href="#footer"><button className="font-Cairo absolute w-4/5 bottom-36 left-1/2 transform -translate-x-1/2 px-4 py-4 bg-white text-black bg-opacity-80 focus:outline-none" > LOVED POSTS & SUBSCRIBE </button></a>
        </div>
    </div>
    {/* If posts are toggled, then posts appear here */}
    {showPosts ? (
      <>
        <hr className="mb-8 w-5/6 border-black mx-auto" />  {/* Render this only once before posts */}
        <div className='flex flex-wrap justify-start'>
          {filteredPosts.map((post) => {
            return (
              <div className="w-1/2 flex justify-around">
                <Post key={post.id} {...post}/>
              </div>
            );
          })}
        </div>
      </>
      
    ) : null}
    <Footer/>
  </div>
  </>
  );
}

export default Main;
