import './flashSales.category.styles.css';
import ProductsPage from '../../components/products page/products.page.component';
import { Children } from 'react';


const flashSales = [
    {
        id: 1,
        name: "Leather watch",
        price: "350",
        imgUrl: "images/gallery-6.jpg",
        percentageDecrease: "21"
    },
    {
        id: 2,
        name: "Leather watch",
        price: "350",
        imgUrl: "images/gallery-6.jpg",
        percentageDecrease: "78"

    
    },
    {
        id: 3,
        name: "Leather watch",
        price: "350",
        imgUrl: "images/gallery-6.jpg",
        percentageDecrease: "44"
    },
    {
        id: 4,
        name: "Leather watch",
        price: "350",
        imgUrl: "images/gallery-6.jpg",
        percentageDecrease: "65"
    },
    {
        id: 5,
        name: "Leather watch",
        price: "350",
        imgUrl: "images/gallery-6.jpg",
        percentageDecrease: "10"
    },
    {   
        id: 6,
        name: "Leather watch",
        price: "350",
        imgUrl: "images/gallery-6.jpg",
        percentageDecrease: "4"
    }

]
const FlashsalesCategory = () => {
    return(
        <div className='flash-sales-category'>
        <div>Directory</div>
        <div>Image</div>
        <div>categories card</div>
        <ProductsPage productsDetails={{
            children: "Flash Sales",
            headerType: "flashSales",
            route: "flash", 
            products: flashSales
        }}/>

        {/*<div className='sidebar-flash-sales'>
        <Sidebar />
        <div className='flash-sales-section'>
        <ProductsHeader children="Flash Sales" headerType="flashSales" route="flash"/>
        <div className='flash-sales-products'>
        {
                flashSales.map((flashSaleProduct) => {
                   return <ProductCard key={flashSaleProduct.id} product={flashSaleProduct}/>
                })
            }
            </div>
            
            </div>
        </div> */}
            </div>
    )
}


export default FlashsalesCategory;