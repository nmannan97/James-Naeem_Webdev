import './Pong.css';
import Playerbar from './PlayerObjects/Playerbar';
import { Stage} from 'react-konva';

export default function SpaceInvaders(){
    
    
    return(
        <div className="mainContainer">
            <div className="subContainer">
                
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Playerbar/>
                </Stage>
            </div>
            
        </div>
        
           
    );
}