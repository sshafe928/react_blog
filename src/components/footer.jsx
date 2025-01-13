
const Footer = ({
    profileImage1 = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736706239/Cyflymder_Thread_of_Screw_False_Two-piece_Polo_Collar_Sweatshirts_Women_Korean_Patch_Fashion_Loose_Female_Pullovers_Autumn_Winter_Y2k_Tops_ndkaar.jpg",
    profileImage2 = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736706239/download_zpzjh2.jpg",
    profileImage3 = "https://res.cloudinary.com/dy2nnbnek/image/upload/c_crop,w_500/v1736706240/Loose_Throw_Cheever_City_Cutout_Sweater_br7mjn.jpg",
    profileImage4 = "https://res.cloudinary.com/dy2nnbnek/image/upload/c_crop,w_500/v1736706243/American_Retro_Letter_Print_Oversized_Hoodie_Zip_Knit_Cardigan_ugswx4.jpg",
    desc1 = "Fall Outfit",
    desc2 = "Dark Academia",
    desc3 = "Grunge",
    desc4 = "Oversized"
    
}) => {
    return (
        <footer className="shadow-[rgba(0,0,15,0.4)_0px_-5px_5px_0px] bg-white">
        
            <h2 className="text-center text-xl py-10">Most Loved Posts</h2>
        
            <div className="flex justify-center space-x-20 w-full">
                <div className="flex flex-col items-center">
                    <img className="w-60 h-60" src={profileImage1} alt={desc1} />
                    <h2 className="text-center">{desc1}</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-60 h-60" src={profileImage2} alt={desc2} />
                    <h2 className="text-center">{desc2}</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-60 h-60" src={profileImage3} alt={desc3} />
                    <h2 className="text-center">{desc3}</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-60 h-60" src={profileImage4} alt={desc4} />
                    <h2 className="text-center">{desc4}</h2>
                </div>
            </div>


        
            <div className="flex justify-center items-center w-full mt-20 mb-5">
                <h1 className="pr-10">JOIN OUR MAILING LIST</h1>
                <form action="/" method="POST" className="flex items-center w-2/5">
                    <input type="email" name="email" placeholder="Email" required className="block w-full p-2 mr-2 border-[1px] border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"/>
                    <button type="submit" className="p-2 bg-gray-600 text-center text-white rounded-md hover:bg-gray-500 focus:outline-none w-40"> Subscribe </button>
                </form>
            </div>
            <p className="text-center text-xs mb-1">© COPYRIGHT 2025. BARE & BEAUTIFUL. ALL RIGHTS RESERVED. DESIGNED BY SABRINA & NICO</p>

        </footer>
    );
};

export default Footer;