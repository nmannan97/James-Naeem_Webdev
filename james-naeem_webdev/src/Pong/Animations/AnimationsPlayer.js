import React, { useRef, useEffect } from 'react'
import '../Pong.css';

var drag = false;
var mousePosition = 0;

function playerPosition() {
  return mousePosition
}

const AnimationsPlayer = props => {
  
  const canvasRef = useRef(null)

  useEffect(() => {
    

    const canvasPlayer = document.getElementById("Pong")
    const context = canvasPlayer.getContext('2d')

    canvasPlayer.height = 450;
    canvasPlayer.width = 450;


    function clear() {
        context.clearRect(0, 0, canvasPlayer.width, canvasPlayer.height);
    }

    function draw(yPosition) {
        context.fillRect(20, yPosition - (45), 5, 50);
    }

    canvasPlayer.addEventListener('mouseover' || 'mousedown', function(event) {
      drag = true;
  
    });
    
    canvasPlayer.addEventListener('mousemove', function(event) {
      clear()
      if (drag) { 
        //context.translate(0, event.clientY)
        mousePosition = event.clientY
        
      }
    
      });
    
      canvasPlayer.addEventListener('mouseout' || 'mouseup', function(event) {
        drag = false;
    
      });

      
    let animationFrameId
    
    
    const render = () => {
      
      draw(mousePosition)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return(
      <p>
        Player
      </p>
  );
}

export {playerPosition}
export default AnimationsPlayer;
