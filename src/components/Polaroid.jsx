const PolaroidBoxes = () => {
    return (
    <div className="flex justify-center gap-8 py-8 px-8">
    
        <div className="relative w-96 h-96 bg-white shadow-lg border-[15px] border-gray-200 overflow-hidden">
        <img
            src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736801834/a5031e26-01c9-4e30-a3b5-c33198ad7eff_hzca4r.jpg"
            alt="Polaroid"
            className="w-full h-full object-cover"
        />
        <button
            className="absolute w-4/5 bottom-36 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-black bg-opacity-60 focus:outline-none"
        >
            Button
        </button>
        </div>

    
        <div className="relative w-96 h-96 bg-white shadow-lg border-[15px] border-gray-200 overflow-hidden">
        <img
            src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736801834/Shirt_Design_N51107_Trending_Today_d7rm27.jpg"
            alt="Polaroid"
            className="w-full h-full object-cover"
        />
        <button
            className="absolute w-4/5 bottom-36 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-black bg-opacity-70 focus:outline-none"
        >
            Button
        </button>
        </div>

        <div className="relative w-96 h-96 bg-white shadow-lg border-[15px] border-gray-200 overflow-hidden">
        <img
            src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1736801834/Want_To_Build_a_Capsule_Wardrobe_in_2023__Start_Here_prol2t.jpg"
            alt="Polaroid"
            className="w-full h-full object-cover"
        />
        <button
            className="absolute  w-4/5 bottom-36 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-black bg-opacity-70 focus:outline-none"
        >
            Button
        </button>
        </div>
    </div>
    );
};

export default PolaroidBoxes;