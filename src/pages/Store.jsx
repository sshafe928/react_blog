import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { outfits } from '../pages/data';  // Import outfits
import ShopItem from '../components/ShopItem';

const StorePage = () => {
    return (
        <>
            <Navbar />

            {outfits.map((outfit, index) => (
                <ShopItem key={index} Outfit={outfit} />
            ))}

            <Footer />
        </>
    );
};

export default StorePage;