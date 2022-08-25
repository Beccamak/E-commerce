import { useParams } from 'react-router-dom';
import './product.page.styles.css';


const ProductPage = ({product}) => {
    const {imgUrl , name, price, percentageDecrease} = product;
    ;

    return(
        <div>
        ProductPage details
        <div className="">
            <div className=''>
            <img className="" src={imgUrl} alt={name} />      
            </div>
            <div className=''>
                <p className=''>{name}</p>
                <p className="">$ {price}</p>
            </div>
        </div>
        </div>
    )
}

export default ProductPage;