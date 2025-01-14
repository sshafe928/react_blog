const ShopItem = ({ Outfit }) => {
    const shopImages = Outfit.shopimages;
    const mainImg = Outfit.image
    const mainTitle = Outfit.postSecondTitle

    return (
        <>
            <div className="flex mb-36 mt-12">
                
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