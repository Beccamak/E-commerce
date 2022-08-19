import './products.page.styles.css';
import Sidebar from '../sidebar/sidebar.component';
import ProductsCard from '../products card/products.card.component';


const ProductsPage = ({productsDetails}) => {
    const {children, headerType, route, products} = productsDetails;
    return(
        <div className='products-page'>
            <Sidebar />
            <ProductsCard children={children} headerType={headerType} route={route} products={products}/>
        </div>
    )
}


export default ProductsPage;