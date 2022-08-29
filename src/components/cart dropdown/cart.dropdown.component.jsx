import './cart.dropdown.styles.scss';
import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import { selectCartItems } from '../../store/cart reducer/cart.selector';
import { useSelector } from 'react-redux';



const CartDropdown = () => {
   const cartItems = useSelector(selectCartItems);
    
    return(
        <div className='cart-dropdown'>
       {
        cartItems.map((cartItem) => {
            const {imgUrl, price, name, quantity} = cartItem;
;            return <div>
                    <img src={imgUrl} />
                    <span>{name}</span>
                    <span>{price}</span>
                    <span>{quantity}</span>
            </div>
        })
       }
        <Link to="/checkout">Go TO CHECKOUT</Link>
        </div>

        )

}


export default CartDropdown;