import './card.styles.css';
import ProductPage from '../../routes/product page/product.page.component';
import { Route } from 'react-router-dom';
import { useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {imgUrl , name, price, percentageDecrease} = product;
    const {set_index} = useContext(DisplayDetails)
    const navigate = useNavigate();

   const onProductClickHandler = () => {
       set_index(<ProductPage product={product}/>)
        navigate("/shop")
    //  return <Route path='/shop' element={<ProductPage />}></Route>
   }
    
    return(
        <div className="product-card-container" onClick={onProductClickHandler}>
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