import { useParams } from 'react-router-dom';
import './product.page.styles.css';
import Button from '../../components/button/button.component';
import { selectCartItems } from '../../store/cart reducer/cart.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart} from '../../store/cart reducer/cart.action';

const ProductPage = ({product}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product)); 
    }    
    const removeProductFromCart = () => {
        dispatch(removeItemFromCart(cartItems, product)); 
    }    
    if (product === null) return;

    const {imgUrl , name, price, percentageDecrease} = product;


    

    return(
        <div>
       
        <div className="product-page-container">
            <div className=''>
            <img className="product-img" src={imgUrl} alt={name} />      
            </div>
            <div className='product-info'>
                <p className='product-info-name'>{name}</p>
                <p className="product-info-price">$ {price}</p>
                
                <Button buttonType="filled" children="-" onClickHandler={removeProductFromCart}/>
                <Button buttonType="filled" children="+" onClickHandler={addProductToCart}/>
                <Button buttonType="filled" children="Add to cart" onClickHandler={addProductToCart}/>
            </div>
        </div>
    </div> 

        )
    }
    
    export default ProductPage;