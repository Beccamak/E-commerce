import './top.brands.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import ProductCard from '../productCard/card.component';
import TopBrandsPreview from '../../routes/top brands preview/top.brands.preview.component';
import { useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';
import Category from '../../routes/category/category.component';
import ShortDeals from '../short time deals/deals.component';

const TopBrands = () => {
    const topBrands = [
        {   
            name: "Samsung",
            items: [
                {   
                    id: 1,
                    name: "Samsung A1",
                    price: "450",
                    imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 2,
                    name: "Samsung A1",
                    price: "450",
                    imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 3,
                    name: "Samsung A1",
                    price: "450",
                    imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
                    additionalDetails:"1000maH red, black"
                }

            ]
        },
        {   
            name: "Beatz",
            items: [
                {
                    id: 1,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/drums.jpg",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 2,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/download",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 3,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/trumpet.jpg",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 4,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/wooden-drum.jpg",
                    additionalDetails:"1000maH red, black"
                },
            ]
        },
        {     
            name: "Xiaomi", 
            items: [
                {
                    id: 1,
                    name: "Xiaomi smart band",
                    price: "450",
                    imgUrl: "images/New folder/smart-band-7.png",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 2,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/smart-band-7.png",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 3,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/smart-band-7.png",
                    additionalDetails:"1000maH red, black"
                },
                {
                    id: 4,
                    name: "Drum",
                    price: "450",
                    imgUrl: "images/New folder/wsmart-band-7.png",
                    additionalDetails:"1000maH red, black"
                },
            ]
        },
        {     
            name: "Lumin", 
        items: [
            {
                id: 1,
                name: "Xiaomi smart band",
                price: "450",
                imgUrl: "images/New folder/smart-band-7.png",
                additionalDetails:"1000maH red, black"
            },
            {
                id: 2,
                name: "Drum",
                price: "450",
                imgUrl: "images/New folder/smart-band-7.png",
                additionalDetails:"1000maH red, black"
            },
            {
                id: 3,
                name: "Drum",
                price: "450",
                imgUrl: "images/New folder/smart-band-7.png",
                additionalDetails:"1000maH red, black"
            },
            {
                id: 4,
                name: "Drum",
                price: "450",
                imgUrl: "images/New folder/wsmart-band-7.png",
                additionalDetails:"1000maH red, black"
            },
        ]
         },
        {     
        name: "Nestle", 
    items: [
        {
            id: 1,
            name: "Xiaomi smart band",
            price: "450",
            imgUrl: "images/New folder/smart-band-7.png",
            additionalDetails:"1000maH red, black"
        },
        {
            id: 2,
            name: "Drum",
            price: "450",
            imgUrl: "images/New folder/smart-band-7.png",
            additionalDetails:"1000maH red, black"
        },
        {
            id: 3,
            name: "Drum",
            price: "450",
            imgUrl: "images/New folder/smart-band-7.png",
            additionalDetails:"1000maH red, black"
        },
        {
            id: 4,
            name: "Drum",
            price: "450",
            imgUrl: "images/New folder/wsmart-band-7.png",
            additionalDetails:"1000maH red, black"
        },
    ]
        }
        
    ]
    const {set_index, set_element} = useContext(DisplayDetails);
    const onViewAllHandler = () => {
        set_index(<TopBrandsPreview data={topBrands}/>)
        set_element(<Category data={topBrands}/>)
    }

    return(
        <ShortDeals children="Top Brands" headerType='normal' route="shop" onClickHandler={onViewAllHandler} products={topBrands} />
        
    )
}



export default TopBrands;


// <div className='top-brands-container'>
//             <ProductsHeader children="Top Brands" headerType='normal' route="shop" onClickHandler={onViewAllHandler}/>
//             <div className='flash-sales-products'>
//             {
//                 topBrands.filter((_, index) => {
//                     return index < 6
//                 }).map((topBrandProduct) => {
//                     return <ProductCard key={topBrandProduct.id} product={topBrandProduct}/>
//                  })
//             }
//             </div>
//         </div>


// {topBrands.map((topBrand) => {
//     return <div className='brand-container' key={topBrand.brand}>
//     <h2 className='brand-name'> {topBrand.brand} </h2>
//     <div className='brand-items-container'>
//     {topBrand.items.map( (item) => {
//             return <div className='brand-item' key={item.id}>
//         {/*<img className='brand-product' src={item.imgUrl} alt={item.name}/>
//         <div className='brand-item-details'>
//             <span>{item.name}</span>
//             <span>{item.price}</span>
//             <span>{item.additionalDetails}</span>
//     </div> */}
//         <ProductCard product={item}  />
//         </div>
//     })}
//     </div>
//     </div>
//     })}