import './deals.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import ProductCard from '../productCard/card.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
 
const ShortDeals = ({children, headerType, route, products}) => {
    return(
        <div className='deals-section'>
        <ProductsHeader children={children} headerType={headerType} route={route}/>
        <div className='deals-products'>
        {
            products.filter((_, index) => {
                return index < 11
            }).map((product) => {
                return <ProductCard key={product.id} product={product}/>
             })
        }
        
        <FontAwesomeIcon icon={faAngleLeft} className="btn-slie left"  />
        <FontAwesomeIcon icon={faAngleRight} className="btn-slie right" />
        </div>
       
        </div>
    )
}

export default ShortDeals;