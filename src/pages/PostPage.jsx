const PostPage = ({category, title, img, alt, date, desc, shopimages}) => {
    return (
        <section>
            <header>
                <h4>{category}</h4>
                <h3>{title}</h3>
                <h4>{date}</h4>
            </header>
            <img src={img} alt={alt} />
            <p>{desc}</p>
            {/* Shop Outfits */}
            <div>
                <h2>Shop My Outfit</h2>
                {shopimages.map((item) => {
                    return (
                        <div key={item.id} className="hover:bg-black hover:opacity-70">
                            <img src={item.url} alt={item.label} />
                            <h4>{item.label}</h4>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default PostPage