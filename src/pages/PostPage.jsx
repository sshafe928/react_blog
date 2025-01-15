const PostPage = ({category, title, img, date, desc, shopimages}) => {
    return (
        <section>
            <header>
                <h4>{category}</h4>
                <h3>{title}</h3>
                <h4>{date}</h4>
            </header>
            <img src={img} alt={title} />
            <p>{desc}</p>
            {/* Shop Outfits */}
            <div>
                <h2>Shop My Outfit</h2>
                <div className="flex items-center justify-around">
                    {shopimages.map((item) => {
                        return (
                            <div key={item.id} className="hover:bg-black hover:opacity-70">
                                <img src={item.url} alt={item.label} />
                                <h4>{item.label}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PostPage