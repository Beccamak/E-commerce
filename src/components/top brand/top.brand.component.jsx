import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTopBrandsProducts} from "../../store/products reducer/products.selector";
import ProductCard from "../productCard/card.component";

const TopBrand = () => {
    const topBrandsProducts = useSelector(selectTopBrandsProducts);
    const {topBrand} = useParams();
    return(
        <div>
        {topBrandsProducts.filter((product)=> product.brandDetails.brandName === topBrand)
            .map((item) => {
            return <ProductCard key={item.id} product={item}  /> 
        })}
        </div>
    )
}

export default TopBrand;