import "./Product.css"

const Product = (probs)=>{
    const {productImage, productName, productPrice, productDescription} = probs


    return(

        

        <>
        <div  className="main-container">
            <div className="imageContainer">
                <img className="img" src={productImage} alt="" />
            </div>

            <div className="textContentsContainer">
                <div className="nameAndPriceContainer">
                    <h3>{productName}</h3>
                    <p> {productPrice}</p>
                </div>

                <div className="textDesc">
                    <p className="desc"> {productDescription}</p>
                </div>

                <button className="btn">Add To Cart</button>
            </div>

            
        </div>

        </>
    )
}

export default Product