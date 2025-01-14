const ShopItem = ({ Outfit }) => {
    const shopImages = Outfit.shopimages;
    const mainImg = Outfit.image
    const mainTitle = Outfit.postSecondTitle

    return (
        <>
        <div className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-5" style={{backgroundImage: "url('https://res.cloudinary.com/dy2nnbnek/image/upload/v1736876998/165acab1-3b95-4c24-9187-c78ed79781da_cowv2w.jpg')", zIndex: -1 }}></div>
            <div className="flex  justify-center items-center min-h-screen">
                
                <div className="w-1/4 pr-4">
                    <h2>{mainTitle}</h2>
                    <img className="w-full h-auto rounded-lg" src={mainImg} alt="Main image" />
                </div>

                <div className="w-1/3 space-y-4 mt-10">
                    {shopImages.length > 0 ? (
                        shopImages.map((item, index) => (
                            <div key={index} className="flex items-center space-x-6">
                                <img className="w-40 h-40 rounded-full" src={item.url} alt={item.label} />
                                <span className="text-sm">{item.label}</span>
                            </div>
                        ))
                    ) : (
                        <div>No shop items available</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShopItem;