import './card.styles.css';
import ProductPage from '../../routes/product page/product.page.component';
import { Route } from 'react-router-dom';
import { useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    const {imgUrl , name, price, percentageDecrease} = product;
    const navigate = useNavigate();
    const {currentProduct, setCurrentProduct} = useContext(DisplayDetails);

   const onProductClickHandler = () => {
    setCurrentProduct(product);
   }
  
    return(
        <Link to="/product">
        { <div className="product-card-container" onMouseEnter={onProductClickHandler}>
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
         </div>}
        </Link>
    )
}

export default ProductCard;