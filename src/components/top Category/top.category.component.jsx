import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTopCategoriesProducts } from "../../store/products reducer/products.selector";
import ProductCard from "../productCard/card.component";

const TopCategory = () => {
    const topCategoriesProducts = useSelector(selectTopCategoriesProducts);
    const {topCategory} = useParams();
    return(
        <div>
        {topCategoriesProducts.filter((product)=> product.categoryDetails.MainCategory === topCategory)
            .map((item) => {
            return <ProductCard key={item.id} product={item}  /> 
        })}
        </div>
    )
}

export default TopCategory;