import './products.header.styles.css';
import {Link} from 'react-router-dom';


const ProductsHeader = ({headerType, children, route, onClickHandler}) => {
    
        const PRODUCT_HEADER_CLASSES = {
        flashSales : "flash_sale_product_header",
        normal: 'normal',
        noLinkHeader: 'noLinkHeader'
    }
    // const {title, additionalInfo} = productTitle;
    return(
        <div className= {`products-header-container ${PRODUCT_HEADER_CLASSES[headerType]}`}>
            <span>{children}</span>
            {headerType==="flashSales" && <span className='time'>09:45:23</span> }
            <span></span>
            {headerType !=="noLinkHeader" && <Link to={`/${route}`} onClick={onClickHandler}>View all</Link>}
        </div>
    )
}

export default ProductsHeader;