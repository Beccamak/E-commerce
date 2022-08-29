import './categories.list.styles.css';
import { useState } from 'react';
import { useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';


const CategoriesList = () => {
    const categories = ["Home & Office",
    "Computers & Accessories", "Kids & Toys",
    "Phones & Tablets", "Other Categories", "Clothings",
    "Electronics","Kitchen", "Featured Brands"
]
const catego = [
    {
        category: "Home & Office",
        subCategories: [
            "Arts, Crafts & Sewing",
            "Home & Sewing",
            "Home & Office Furniture", 
            "Large Appliances & Home Improvement",
            "Office Products"
        ]
    },
    {
        category: "Home & Office",
        subCategories: [
            "Arts, Crafts & Sewing",
            "Home & Sewing",
            "Home & Office Furniture", 
            "Large Appliances & Home Improvement",
            "Office Products"
        ]
    }
]
    const {setCategory} = useContext(DisplayDetails);
    
 

const onMouseEnterHandler = (event) => {
    setCategory(event.target.innerText);
  
};

const onMouseLeaveHandler = () => {return};
    return(
            <div className="categories-container">
                <ul className="categories-list">
                {categories.map((category) => {
                    return <li className="category" key={category} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>{category}</li>
                })}
                </ul>
            </div>
            
    )
}

export default CategoriesList;


