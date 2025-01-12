const Navbar = ({
    logo = "",
    spotify = "",
    pintrest = "",
    pintrestLink = "",
    spotifyLink = ""
}) => {
    return (
        <>
        <input class="" type="text" id="search-bar" placeholder="Search..." />
        <img src={logo} alt="Bare & Beautiful logo" />
        <ul className="navbar-list">
            <li><a href={spotifyLink}>{spotify}</a></li>
            <li><a href={pintrestLink}>{pintrest}</a></li>
            
        </ul>
        </>
    );
};





export default Navbar;