import './home.styles.css';
import MainDisplay from '../../components/main display/main.display.component';
import FlashSales from '../../components/flash sales/flash.sales.component'
import TopCategories from '../../components/top categories/top.categories.component';
import TopBrands from '../../components/top brands/top.brands.component';
import Footer from '../../components/footer/footer.component';
import OutstandingSales from '../../components/outstanding sales/outstanding.sales.components';
import LuckyGuess from '../../components/lucky guess/lucky.guess.component';

const Home = () => {
    return(
         <div>
         <MainDisplay />
         <FlashSales />
          <TopCategories />
          <LuckyGuess />
           <TopBrands />
           <OutstandingSales />
           <Footer />
          
         </div>
    )
}


export default Home;

// <FlashSales />