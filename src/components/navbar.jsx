const Navbar = ({
    logo = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736712381/logo_k3ur2i.png",
    spotify = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736712557/spotify_uewgjq.png",
    pintrest = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736713348/social_boaxj8.png",
    pintrestLink = "https://www.pinterest.com/megoostafashion/",
    spotifyLink = "https://open.spotify.com/playlist/37i9dQZF1EIfImcdp5Ixa4"
}) => {
    return (
        <>
        <div class="flex justify-between items-center w-full px-4 p-4 bg-white">
            <div class="flex items-center space-x-2">
                <input 
                type="text" 
                id="search-bar" 
                placeholder="Search..." 
                class="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <img 
                src="path-to-search-icon.png" 
                alt="search icon" 
                class="w-5 h-5 absolute left-2"  
                />
            </div>

            <img 
            src={logo} 
            alt="Bare & Beautiful logo" 
            class="mx-auto h-12"
            />

            <ul class="flex space-x-4">
                <li>
                    <a href={spotifyLink}>
                        <img class="w-6 h-6" src={spotify} alt="Spotify" />
                    </a>
                </li>
                <li>
                    <a href={pintrestLink}>
                        <img class="w-6 h-6" src={pintrest} alt="Pinterest" />
                    </a>
                </li>
            </ul>
        </div>
        </>
    );
};





export default Navbar;