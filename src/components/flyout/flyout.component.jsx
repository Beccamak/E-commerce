import './flyout.component.styles.scss';
import {Link} from 'react-router-dom';
import { useEffect, useState, Fragment, useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';

const Flyout = () => {
   
    const[isHover, setIsHover] = useState(false);
    const[categoryIsHover] = useState(false)
    const[style, setStyle] = useState({})
    const[currentCategory , setCurrentCategory] = useState(null)
    const {setFlyout} = useContext(DisplayDetails)
   
    
    const categories = [
        {
            category: "Home & Office",
            subCategories: [
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Office Furniture", 
                    
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Large Appliances & Home Improvement",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Office Products",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
            ]
        },
        {
            category: "Computers & Accessories",
            subCategories: [
                {
                    subCategory: "Computer Acessories",
                    subCategories: [
                        "Computer", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Office Furniture", 
                    
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Large Appliances & Home Improvement",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Office Products",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
            ]
        },
        {
            category: "Kids & Toys",
            subCategories: [
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Office Furniture", 
                    
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Large Appliances & Home Improvement",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Office Products",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
            ]
        },
        {
            category: "Phones & Tablets",
            subCategories: [
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Office Furniture", 
                    
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Large Appliances & Home Improvement",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Office Products",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
            ]
        },
        {
            category: "Other Categories",
            subCategories: [
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Office Furniture", 
                    
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Large Appliances & Home Improvement",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Office Products",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
            ]
        },
        {
            category: "Clothings",
            subCategories: [
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Office Furniture", 
                    
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Large Appliances & Home Improvement",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Office Products",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
            ]
        },
        {
            category: "Electronics",
            subCategories: [
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Office Furniture", 
                    
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Large Appliances & Home Improvement",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Office Products",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
            ]
        },
        {
            category: "Kitchen",
            subCategories: [
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Office Furniture", 
                    
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Large Appliances & Home Improvement",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Office Products",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
            ]
        },
        {
            category: "Featured Brands",
            subCategories: [
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Office Furniture", 
                    
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Large Appliances & Home Improvement",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Office Products",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Home & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
                {
                    subCategory: "Arts, Crafts & Sewing",
                    subCategories: [
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments",
                        "Raising", "Cleaning Equipments"
                    ]

                },
            ]
        }
    ]
    useEffect(() => {
         setStyle(isHover ? {visibility: "visible"} : {});
         
    }, [isHover])
    
    const mouseEnterHandler = (event) => {
        setCurrentCategory(event.target.innerText);
        console.log(currentCategory);
        setIsHover(true);
        setFlyout(true);
    }
    const categoryHoverMouseEnterHandler = () => {
        setIsHover(true);
        setFlyout(true);
        
    }
    const categoryHoverMouseLeaveHandler = () => {
        setIsHover(false);
        setFlyout(false);
    }
    
    const mouseLeaveHandler = () => {
        if(!categoryIsHover){
            setIsHover(false); 
            setFlyout(false);
        }
        
       
    } 
    
    let sub = [];
               let arr = [];
               let categoriesDivision = (item) => {
               
                arr.push(item)
               
                return <div className='collections'>{item}</div>
            }

          
                    {   categories.filter((category) => category.category === currentCategory).map((category) => {
                            category.subCategories.map((item) => {
                               sub.push(item);
                               if (sub.length === 3){
                                   categoriesDivision(sub);
                                   sub = [];
                               }
                               
                             });
                         })
                         
                    }
                    if (sub) {
                        categoriesDivision(sub);
                    }
   

    

    return(
             <div className='categories--flyout'>
                  <Fragment>
                  {
                    categories.map((categoryObject) => {
                     return <Fragment>
                            <Link  to='/' className='main-cat' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{categoryObject.category}</Link>
                            <div className='cat-collections' onMouseEnter={categoryHoverMouseEnterHandler} onMouseLeave={categoryHoverMouseLeaveHandler} style={style}>
                            
                            {arr.map((item) => {
                                    
                                return <div className='collection'>
                                        {item.map((ite) => {
                                           
                                            return <div className='ca'>
                                            <Link to='/' className='category-head'>{ite.subCategory}</Link>
                                            {
                                                ite.subCategories.map((it) => {
                                                    return <Link  to='/'  className='sub-item'>{it}</Link>
                                                })
                                            }
                                            </div>
                                        })}
                                </div>
                            })}
                         
                           
                                
                         
                            </div>
                            </Fragment>
                     
                    })
                   
                }
                  </Fragment>
            
                  
                   
             
                    
                </div>

         
    )
                } 
 

  

export default Flyout;  
