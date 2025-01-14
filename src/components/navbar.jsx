import { Link } from 'react-router-dom'

const Navbar = ({
    logo = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736712381/logo_k3ur2i.png",
    spotify = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736712557/spotify_uewgjq.png",
    pintrest = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736713348/social_boaxj8.png",
    pintrestLink = "https://www.pinterest.com/megoostafashion/",
    spotifyLink = "https://open.spotify.com/playlist/37i9dQZF1EIfImcdp5Ixa4"
}) => {
    return (
        <header className="bg-white shadow-[rgba(0,0,15,0.4)_0px_5px_10px_0px]">
            <div className="flex justify-between items-center w-full px-4 p-4">
                
                <div className="flex items-center space-x-2">
                    <input 
                    type="text" 
                    id="search-bar" 
                    placeholder="Search..." 
                    className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <img 
                    src="path-to-search-icon.png" 
                    alt="search icon" 
                    className="w-5 h-5 absolute left-2"  
                    />
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