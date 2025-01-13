import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { outfits } from '../pages/data';
import ShopItem from '../components/ShopItem';

const StorePage = () => {
return (
    <>
    <Navbar/>

    <ShopItem outfits={outfits} />

    <Footer/>
    </>
)
}

export default StorePage