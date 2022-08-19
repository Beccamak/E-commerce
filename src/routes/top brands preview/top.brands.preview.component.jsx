import './top.brands.styles.css';
import TopReusableComponent from '../../components/top reusable component/top.reusable.component';



const TopBrandsPreview = ({data}) => {
    
    return(
        <div>
            <TopReusableComponent data={data}/>
        </div>
    )
}


export default TopBrandsPreview;