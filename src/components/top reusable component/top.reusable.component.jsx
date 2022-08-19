import './top.reusable.styles.css';
import { Link } from 'react-router-dom';
import ProductCard from '../productCard/card.component';

const TopReusableComponent = ({data}) => {

    return(
        <div>
        <div className='top-brands-container'>
        <p>Top categories preview</p>
        { 
            data.map((product) => {
                return   <div className='brand-container'>
                <Link to={(product.name)}><h2> {product.name}</h2></Link>
                <div  className='brand-items-container'>
                {product.items.map((item) => {
                return <ProductCard key={item.id} product={item}  /> 
               })}
               </div>
               
               </div>
            })
        }       
        </div>
        </div>
    )
}

export default TopReusableComponent;