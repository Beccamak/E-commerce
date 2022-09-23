import './flyout.component.styles.scss';
import {Link} from 'react-router-dom';
import { useEffect, useState, Fragment, useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectCategories } from '../../store/categoriesReducer/categories.selector';
import { selectCurrentCategory } from '../../store/products reducer/products.selector';
import { setCurrentCategory } from '../../store/products reducer/products.action';


const Flyout = () => {
    const[isHover, setIsHover] = useState(false);
    const[categoryIsHover] = useState(false);
    const[style, setStyle] = useState({});
    const {setFlyout} = useContext(DisplayDetails);
    const currentCategory = useSelector(selectCurrentCategory);
   const categories = useSelector(selectCategories)
    const dispatch = useDispatch();
   useEffect(() => {
         setStyle(isHover ? {visibility: "visible"} : {});
         
    }, [isHover])
    

    const mouseEnterHandler = (event) => {
        dispatch(setCurrentCategory(event.target.innerText));
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
        dispatch(setCurrentCategory(event.target.innerText));
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
