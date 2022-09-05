import './main.display.styles.scss';
import Flyout from '../flyout/flyout.component';
import { useContext, useState } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';
import Slider from '../slider/slider.component';


const MainDisplay = () => {
        const {flyout} = useContext(DisplayDetails);
       
    return(
         <div className='display-cards'>  
           <Flyout />

           {!flyout? <Slider /> : <div className='small-carousel-slider'>
        
   </div>
    }
           </div>
            )
        }
        
        
export default MainDisplay;
