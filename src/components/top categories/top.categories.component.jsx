import './top.categories.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import { DisplayDetails } from '../../contexts/display.details.context';
import { useContext } from 'react';
import TopCategoriesPreview from '../../routes/top categories preview/top.categories.preview.component';
import Category from '../../routes/category/category.component';

const topCategoriesProducts = [
    {   
        name: "Computer",
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
        name: "Electronics",
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
        name: "Kitchen", 
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
        name: "Phones", 
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
    name: "Kids", 
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
const TopCategories = () => {
    const {set_index, set_path, set_element} = useContext(DisplayDetails);
    const onViewAllHandler = () => {
        set_index(<TopCategoriesPreview data={topCategoriesProducts}/>)
        set_element(<Category data={topCategoriesProducts}/>)
    }
    return(
        <div>
        <ProductsHeader children='Top Categories' headerType="normal" route="shop" onClickHandler={onViewAllHandler}/>

        <div className='top-categories-container'>
            <div className='top-category'>1</div>
            <div className='top-category'>1</div>
            <div className='top-category'>1</div>
            <div className='top-category'>1</div>
            <div className='top-category'>1</div>
        </div>
        </div>
        
    )

}


export default TopCategories;