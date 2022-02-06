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
    

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.height = 450;
    canvas.width = 450;

    console.log(canvas.height)
    function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function draw(yPosition) {
        context.fillRect(20, yPosition - (canvas.height - 50), 5, 50);
    }

    canvas.addEventListener('mouseover' || 'mousedown', function(event) {
      drag = true;
  
    });
    
    canvas.addEventListener('mousemove', function(event) {
      clear()
      if (drag) { 
        //context.translate(0, event.clientY)
        mousePosition = event.clientY
        
      }
    
      });
    
      canvas.addEventListener('mouseout' || 'mouseup', function(event) {
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
    <div>
      <canvas id='Player' ref={canvasRef} className="Player"/>
    </div>
  );
}

export {playerPosition}
export default AnimationsPlayer;
