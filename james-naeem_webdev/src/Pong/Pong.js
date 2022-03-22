import './Pong.css';
import Playerbar from './Objects/Playerbar';
import Ball from './Objects/Ball';
//import {playerPosition} from './Animations/AnimationsPlayer'

export default function Pong(){
    
    //var player = String(playerPosition);

    //console.log(Number(player));

    return(
        <div id="container1" className="mainContainer">
            Pong
            <div id="container2" className="subContainer">
                
                <canvas id='Pong'></canvas>
                <Playerbar/>
                <Ball/>
            </div>
            
        </div>
        
           
    );
}