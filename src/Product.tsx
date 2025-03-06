import './App.css'


function Product({name, price, description, images}: {name: string, price: number, description: string, images: string[]}) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center", position: "relative"}}>
            <div className = "product-images">
                {images.map((img, index) => (
                    <img key={index} src={img} />
                ))}
            </div>
            <div style={{fontSize: '20px',fontFamily: 'revert'}}>
                <h3 style={{ margin: "10px 10px" }}>{name}</h3>
                <p style={{ margin: "10px 10px" }}>{description}</p>
                <p style={{ margin: "10px 10px" }}>{price}$</p>
            </div>
        </div>
    )
}

export default Product