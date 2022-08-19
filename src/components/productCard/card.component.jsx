import './card.styles.css';


const ProductCard = ({product}) => {
    const {imgUrl , name, price, percentageDecrease} = product;
    return(
        <div className="product-card-container">
        <div className='percent-decrease'>
            <span className='percentage'>-{percentageDecrease}%</span>
        </div>
            <div className='img-container'>
            <img className="product-image" src={imgUrl} alt={name} />      
            </div>
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p className="product-price">$ {price}</p>
            </div>
        </div>
    )
}

export default ProductCard;