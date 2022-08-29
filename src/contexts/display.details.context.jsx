import { createContext, useState  } from "react";


export const DisplayDetails = createContext({
    _index: null,
    _element: null,
    set_index: null,
    set_element: null,
    flyout: false,
    setFlyout: null,
    category: null,
    setCategory: null,
    currentProduct: {},
    setCurrentProduct:null
    // it: null,
    // setIt:null
}) 
export const DisplayDetailsProvider = ({children}) => {
    const [_index, set_index] = useState(null);
    const [_element, set_element] = useState(null);
    const [flyout, setFlyout] = useState(false);
    const [category, setCategory] = useState(false);
    // const [it, setIt] = useState(null);
    const [currentProduct, setCurrentProduct] = useState({});


    const value = {_index, _element, set_index, set_element, flyout, setFlyout, category, setCategory, currentProduct, setCurrentProduct}
    
    return <DisplayDetails.Provider value={value}>{children}</DisplayDetails.Provider>
    

}