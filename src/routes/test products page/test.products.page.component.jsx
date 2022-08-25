import './test.product.page.styles.css';
import Sidebar from '../../components/sidebar/sidebar.component';
import ProductsCard from '../../components/products card/products.card.component';
const TestProductsPage = ({productsDetails}) => {
    const {children, headerType, route, products} = productsDetails;
    return(
        <div className='products-page'>
            <Sidebar />
            <ProductsCard children={children} headerType={headerType} route={route} products={products}/>
        </div>
    )
}


export default TestProductsPage;