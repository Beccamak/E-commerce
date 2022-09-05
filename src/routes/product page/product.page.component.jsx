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
       <div className='product-page'>
       <div className="product-page-container">
           <div className=''>
           <img className="product-img" src={imgUrl} alt={name} /> 
                
           </div>
           <div className='product-info'>
               <h2 className='product-info-name'>{name}</h2>
               <p className='sku'> *****(344)SKU: SKKER-345-TRE</p>
               <p>Brand: Samsung</p>

               <p className="product-info-price">$ {price}</p>

               <div className='qnty-selector'>
               <span className='qnty-selector-btn'>-</span>
               <span className='qnty-selector-btn'>1</span>
               <span className='qnty-selector-btn'>+</span>
               </div>
               
               {/*<Button buttonType="filled" children="-" onClickHandler={removeProductFromCart}/> 
               <Button buttonType="filled" children="+" onClickHandler={addProductToCart}/> */}
               <div className='add'>
               <Button buttonType="filled" children="Add to cart" onClickHandler={addProductToCart}/>
               <Button buttonType="filled" children="Wishlist" onClickHandler={addProductToCart}/>
               </div>
              
               <p className='description'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
               lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  </p>

               <ul className='features'>
               <p>Features</p>
               <li className='product-list'>Rear, exterior padded laptop compartment</li>
               <li className='product-list'>Spacious main compartment includes a removable bottle holder and endless pockets for organization</li>
               <li className='product-list'>One, front zip pocket </li>
               <li className='product-list'>One hidden back pocket for valuables</li>
               <li className='product-list'>Padded shoulder straps</li>
               <li className='product-list'>YKK Zippers</li>
               <li className='product-list'>Expandable option provides 35% more bag space when needed</li>
               <li className='product-list'>Rear trolly strap slides over any rolling luggage handle with ease</li>
               </ul>

               <ul className='specifications'>
               <p className='product-list'>Specifications</p>
               <li className='product-list'>Length: 43cm / 17in</li>
               <li className='product-list'>Width: 30cm / 12in</li>
               <li className='product-list'>Depth: 15cm + 8cm expansion / 6in + 3in expansion</li>
               <li className='product-list'>Laptop Size: 40cm / 16in</li>
               </ul>

           </div>
       </div>
       <div className='product-details-bar'>
       <ul className="">
       <li className='product-list'>Product Details</li>
       <li className='product-list'>Delivery & Returns</li>
       <li className='product-list'>Product Reviews</li>
       
       </ul>
       </div>
       </div>

        )
    }
    
    export default ProductPage;