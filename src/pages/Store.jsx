import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { outfits } from '../pages/data';  // Import outfits
import ShopItem from '../components/ShopItem';

const StorePage = () => {
    return (
        <>
            {/* Background image applied to the body */}
            <div className="absolute inset-0 bg-cover bg-center filter blur-lg" 
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dy2nnbnek/image/upload/v1736876044/download_pczkkx.jpg')", 
                    zIndex: -1, 
                    backgroundAttachment: 'fixed',  // Keeps the background fixed while scrolling
                    backgroundRepeat: 'no-repeat',  // Ensures no repeating, you can remove this if you want it to repeat
                    backgroundSize: 'cover',  // Ensures the background image covers the full page
                }} 
            ></div>

            {/* Container for page content */}
            <div className="relative z-10">
                <Navbar />
                
                {/* Map over outfits to render ShopItem for each outfit */}
                {outfits.map((outfit, index) => (
                    <ShopItem key={index} Outfit={outfit} className='bg-white border border-black shadow'/>
                ))}
                
                <Footer />
            </div>
        </>
    );
};

export default StorePage;
