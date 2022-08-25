//import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import FlashsalesCategory from "./routes/flashSales.category/flashSales.category.component";
import ShopTopCategories from "./routes/shop-top-categories/shop.top.categories.component";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "./utils/firebase";
import { useEffect } from "react";
import { setCategories } from "./store/categoriesReducer/categories.action";
import TestProductsPage from "./routes/test products page/test.products.page.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const categoriesGetter = async() => {
        const categories = await getCategoriesAndDocuments();
        dispatch(setCategories(categories))
    }
    categoriesGetter();
})
  return (
    <div> 
    <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="/auth" element={<Authentication />}/>
      <Route path="/flash" element={<FlashsalesCategory />} />
      <Route path="/shop/*" element={<ShopTopCategories/>} />
      </Route>
    </Routes>
    

    </div>
  );
};
export default App;
// <div  className="container">
   
    // </div>
//         <svg className="hi" viewBox="0 0 1440 320">
//     <path fill="#fff" fill-opacity="25" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
// </svg>