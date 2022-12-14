import './flash.sales.styles.css';
import ProductsHeader from '../../components/products-header/products.header.component';
import ProductCard from '../../components/productCard/card.component.jsx'
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
const FlashSales = () => {
    return(
        <div className='flash-sales-section'>
        <ProductsHeader children="Flash Sales" headerType="flashSales" route="flash"/>
        <div className='flash-sales-products'>
        {
            flashSales.filter((_, index) => {
                return index < 6
            }).map((flashSaleProduct) => {
                return <ProductCard key={flashSaleProduct.id} product={flashSaleProduct}/>
             })
        }
        </div>
       
        </div>
    )
}

export default FlashSales;
//  productprice={productprice}


// 0 .5rem 1rem rgba(0,0,0,.1);