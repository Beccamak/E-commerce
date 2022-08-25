import './flyout.component.styles.scss';
import {Link} from 'react-router-dom';
import { useEffect, useState, Fragment, useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';
import { useSelector } from 'react-redux/es/exports';
import { selectCategoriesArray } from '../../store/categoriesReducer/categories.selector';
import { useParams } from 'react-router-dom';
import TestProductsPage from '../../routes/test products page/test.products.page.component';
import products from '../../THE_PRODUCTS';


const Flyout = () => {
    console.log("rendering");
   const {route} = useParams();
    const[isHover, setIsHover] = useState(false);
    const[categoryIsHover] = useState(false);
    const[style, setStyle] = useState({});
    const[currentCategory , setCurrentCategory] = useState(null);
    const {setFlyout, set_index} = useContext(DisplayDetails);
   const categories = useSelector(selectCategoriesArray)

   useEffect(() => {
         setStyle(isHover ? {visibility: "visible"} : {});
         
    }, [isHover])
    // categories.map((cat) => {console.log(cat)})

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

    const onCategoryHandler = (event) => {
        const categoryTitle = event.target.innerText;
        set_index(<TestProductsPage productsDetails={{
            children: categoryTitle,
            headerType: "noLinkHeader",
            route: "flash", 
            products: products
        }} />)
        console.log("meeee", route);
    }
    
    let sub  = [];
               let arr = [];
               let categoriesDivision = (item) => {
               
                arr.push(item)
               
                return <div className='collections'>{item}</div>
            }
            
            {  categories.filter((category) => category.MainCategory === currentCategory).map((category) => {
                category.subCategoriesList.map((item) => {
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
                        
                        console.log("arr", arr);

// {data.filter((category)=> category.MainCategory)}

    return(
             <div className='categories--flyout'>
                  <Fragment>
                  {
                    categories.map((categoryObject) => {
                     return <Fragment>
                            <Link  to='/' className='main-cat' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{categoryObject.MainCategory}</Link>
                            <div className='cat-collections' onMouseEnter={categoryHoverMouseEnterHandler} onMouseLeave={categoryHoverMouseLeaveHandler} style={style}>
                            
                            {arr.map((item) => {
                                    
                                return <div className='collection'>
                                        {item.map((ite) => {
                                           
                                            return <div className='ca'>
                                            <Link to='/' className='category-head'>{ite.category}</Link>
                                            {
                                                ite.subCategories.map((it) => {
                                                    return <Link  to='/shop' className='sub-item' onClick={onCategoryHandler}>{it}</Link>
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
