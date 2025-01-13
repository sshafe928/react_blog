const ShopItem = ({outfit }) => {
    const shopImages = outfit.shopimages || [];

return (
    <div>
    {shopImages.map((item, index) => (
        <div key={index}>
        <img src={item.url} alt={item.label} />
        <span>{item.label}</span>
        </div>
    ))}
    </div>
);
}

export default ShopItem