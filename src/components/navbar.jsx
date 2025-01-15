import { useState } from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = ({
    logo = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736712381/logo_k3ur2i.png",
    spotify = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736712557/spotify_uewgjq.png",
    pintrest = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736713348/social_boaxj8.png",
    pintrestLink = "https://www.pinterest.com/megoostafashion/",
    spotifyLink = "https://open.spotify.com/playlist/37i9dQZF1EIfImcdp5Ixa4",
    onSearch
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value); // Pass search query to parent (Main.jsx)
    };

    return (
        <header className="bg-white shadow-[rgba(0,0,15,0.4)_0px_5px_10px_0px]">
            <div className="flex justify-between items-center w-full px-4 p-4">
                
                <div className="flex items-center space-x-2">
                    <input 
                    type="text" 
                    id="search-bar" 
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <AiOutlineSearch className="w-5 h-5 absolute left-4 pointer-events-none"/>
                </div>

                {/* Logo */}
                <Link to='/'>
                    <img 
                    src={logo} 
                    alt="Bare & Beautiful logo" 
                    className="mx-auto h-12 inline-block"
                    />
                </Link>

                {/* Social media icons */}
                <ul className="flex space-x-4">
                    <li>
                        <Link to={spotifyLink}>
                            <img className="w-6 h-6" src={spotify} alt="Spotify" />
                        </Link>
                    </li>
                    <li>
                        <Link to={pintrestLink}>
                            <img className="w-6 h-6" src={pintrest} alt="Pinterest" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};





export default Navbar;