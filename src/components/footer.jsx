
const Footer = ({
    profileImage1 = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736706239/Cyflymder_Thread_of_Screw_False_Two-piece_Polo_Collar_Sweatshirts_Women_Korean_Patch_Fashion_Loose_Female_Pullovers_Autumn_Winter_Y2k_Tops_ndkaar.jpg",
    profileImage2 = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1736706239/download_zpzjh2.jpg",
    profileImage3 = "https://res.cloudinary.com/dy2nnbnek/image/upload/c_crop,w_500/v1736706240/Loose_Throw_Cheever_City_Cutout_Sweater_br7mjn.jpg",
    profileImage4 = "https://res.cloudinary.com/dy2nnbnek/image/upload/c_crop,w_500/v1736706243/American_Retro_Letter_Print_Oversized_Hoodie_Zip_Knit_Cardigan_ugswx4.jpg",
    desc1 = "Fall outfit",
    desc2 = "Dark Academia",
    desc3 = "Grunge",
    desc4 = "Oversized"
    
}) => {
    return (
        <>
        
            <h2 class="text-center text-xl pb-10">Most Loved Posts</h2>
        
            <div class="flex justify-center space-x-20 w-full">
                <div class="flex flex-col items-center">
                    <img class="w-60 h-60" src={profileImage1} alt={desc1} />
                    <h2 class="text-center">{desc1}</h2>
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-60 h-60" src={profileImage2} alt={desc2} />
                    <h2 class="text-center">{desc2}</h2>
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-60 h-60" src={profileImage3} alt={desc3} />
                    <h2 class="text-center">{desc3}</h2>
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-60 h-60" src={profileImage4} alt={desc4} />
                    <h2 class="text-center">{desc4}</h2>
                </div>
            </div>


        
            <div class="flex justify-center w-full">
                <h1 class="pr-10">JOIN OUR MAILING LIST</h1>
                <form action="/" method="POST" class="flex items-center space-x-4 w-full">
                    <input type="email" name="email" placeholder="Email" required class="block w-full sm:w-4/5 md:w-3/4 lg:w-1/2 p-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"/>
                    <button type="submit" class="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 focus:outline-none"> Subscribe </button>
                </form>
                </div>
            <p class="text-center text-xs">© COPYRIGHT 2025. BARE & BEAUTIFUL. ALL RIGHTS RESERVED. DESIGNED BY SABRINA & NICO</p>

        </>
    );
};

export default Footer;