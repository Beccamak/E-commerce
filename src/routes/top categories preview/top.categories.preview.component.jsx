import './top.categories.preview.styles.css';
import TopReusableComponent from '../../components/top reusable component/top.reusable.component';




const TopCategoriesPreview = ({data}) => {
    console.log("topcategoriespreview", data)
      return (
        <div>
        <TopReusableComponent data={data}/>
        </div>
        )
    }
    
    export default TopCategoriesPreview;


    // <div className='top-brands-container'>
    // <p>Top categories preview</p>
    // { 
    //     topCategoriesProducts.map((topCategoryProduct) => {
    //         return   <div className='brand-container'>
    //         <Link to={(topCategoryProduct.name).replace(" ", "-")}><h2> {topCategoryProduct.name}</h2></Link>
    //         <div  className='brand-items-container'>
    //         {topCategoryProduct.items.map((item) => {
    //         return <ProductCard key={item.id} product={item}  /> 
    //        })}
    //        </div>
           
    //        </div>
    //     })
    // }       
    // </div>