import React, { useRef, useEffect } from 'react'
import '../Pong.css';

var drag = false;
var dragEnd;
var dragStart;
var rectanglePosition = 0;
var mousePosition = {
  x: 0, 
  y: 0
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
      const move = 1;
      clear()
      console.log(event.clientY)
      if (drag) { 
        //context.translate(0, event.clientY)
        mousePosition = {y : (event.clientY)}
        
      }
    
      });
    
      canvas.addEventListener('mouseout' || 'mouseup', function(event) {
        drag = false;
    
      });

      
    let animationFrameId
    
    
    const render = () => {
      
      draw(mousePosition.y)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  return <canvas ref={canvasRef} className="Player"/>
}

export default AnimationsPlayer