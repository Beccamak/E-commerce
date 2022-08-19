import './main.display.styles.scss';
import Flyout from '../flyout/flyout.component';
import { useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';

const MainDisplay = () => {
        const {flyout} = useContext(DisplayDetails);
    
    
    return(
         <div className='display-cards'>  
           <Flyout />

           {!flyout? <div className='carousel-slider'>
                   Image
           </div> : <div className='small-carousel-slider'>
           Image
   </div>
    }
           </div>
            )
        }
        
        
export default MainDisplay;
