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
           </div>
           )
          }
          
          
          export default MainDisplay;
          // {!flyout? <Slider sliderType="big"/> :<Slider sliderType="small"/>}
