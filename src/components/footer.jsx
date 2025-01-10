const Footer = ({
    profileImage1 = "",
    profileImage2 = "",
    profileImage3 = "",
    profileImage4 = "",
    desc1 = "",
    desc2 = "",
    desc3 = "",
    desc4 = ""
}) => {
    return (
        <>
            <h2>Most Loved Posts</h2>
            <img src={profileImage1} alt={desc1} />
            <img src={profileImage2} alt={desc2} />
            <img src={profileImage3} alt={desc3} />
            <img src={profileImage4} alt={desc4} />

            <h1>JOIN OUR MAILING LIST</h1>
            <form action="/" method="POST">
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit">Subscribe</button>
            </form>
            <p>© COPYRIGHT 2025. BARE & BEAUTIFUL. ALL RIGHTS RESERVED. DESIGNED BY SABRINA & NICO</p>

        </>
    );
};

export default Footer;