import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { DisplayDetails } from "../../contexts/display.details.context";


const ShopTopCategories = () => {
    const {_index, _element} = useContext(DisplayDetails);

    return(
        <Routes>
            <Route index element={_index} />
            <Route path=":category" element={_element} />
            </Routes>
            )
}



export default ShopTopCategories;