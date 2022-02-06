import './Pong.css';
import Playerbar from './Objects/Playerbar';
import {playerPosition} from './Animations/AnimationsPlayer'

export default function Pong(){
    
    var player = String(playerPosition);

    console.log(Number(player));

    return(
        <div id="container1" className="mainContainer">
            Pong
            <div id="container2" className="subContainer">
                <Playerbar />
            </div>
            
        </div>
        
           
    );
}