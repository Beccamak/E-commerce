import { useContext } from 'react';
import Button from '../../components/button/button.component';
import { DisplayDetails } from '../../contexts/display.details.context';
import './checkout.styles.css';
import { addItemToCart,  removeItemFromCart, clearItemFromCart} from '../../store/cart reducer/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart reducer/cart.selector';

const Checkout = () => {
    const dispatch = useDispatch();
    const {currentProduct} = useContext(DisplayDetails);
    const cartItems = useSelector(selectCartItems);

    const addItemHandler = () => dispatch(addItemToCart(cartItems, currentProduct));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, currentProduct));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, currentProduct));

    const {imgUrl, price, name, quantity} = currentProduct;
    return(
        <div>
        Checkout Page
        <Button children="X" onClickHandler={clearItemHandler}/>
        <Button children="-"  onClickHandler={removeItemHandler}/>
        <Button children="+"  onClickHandler={addItemHandler}/>
        <img src={imgUrl} />
        <span>{name}</span>
        <span>{price}</span>
        <span>{quantity}</span>

        </div>
    )
}



export default Checkout;