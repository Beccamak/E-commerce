import './deals.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import ProductCard from '../productCard/card.component';

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
        </div>
       
        </div>
    )
}

export default ShortDeals;