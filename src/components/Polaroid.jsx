const PolaroidBoxes = () => {
    
    return (
    <div className="flex justify-center gap-16 py-8 px-8 pb-24">
    
        <div className="relative w-96 h-96 bg-white shadow-lg border-[15px] border-white overflow-hidden">
        <img src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736801834/a5031e26-01c9-4e30-a3b5-c33198ad7eff_hzca4r.jpg" alt="Polaroid" className="w-full h-full object-cover" />
        <button className="font-Cairo absolute w-4/5 bottom-36 left-1/2 transform -translate-x-1/2 px-4 py-4 bg-white text-black bg-opacity-80 focus:outline-none" > OUTFIT JOURNAL </button>
        </div>

    
        <div className="relative w-96 h-96 bg-white shadow-lg border-[15px] border-white overflow-hidden">
        <img src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736801834/Shirt_Design_N51107_Trending_Today_d7rm27.jpg" alt="Polaroid" className="w-full h-full object-cover" />
        <a href="/shop"><button className="font-Cairo absolute w-4/5 bottom-36 left-1/2 transform -translate-x-1/2 px-4 py-4 bg-white text-black bg-opacity-80 focus:outline-none"> SHOP OUTFITS </button></a>
        </div>

        <div className="relative w-96 h-96 bg-white shadow-lg border-[15px] border-white overflow-hidden">
        <img src="https:/`/res.cloudinary.com/dy2nnbnek/image/upload/v1736801834/Want_To_Build_a_Capsule_Wardrobe_in_2023__Start_Here_prol2t.jpg" alt="Polaroid" className="w-full h-full object-cover" />
        <a href="#footer"><button className="font-Cairo absolute w-4/5 bottom-36 left-1/2 transform -translate-x-1/2 px-4 py-4 bg-white text-black bg-opacity-80 focus:outline-none" > LOVED POSTS & SUBSCRIBE </button></a>
        </div>
    </div>
    );
};

export default PolaroidBoxes;
