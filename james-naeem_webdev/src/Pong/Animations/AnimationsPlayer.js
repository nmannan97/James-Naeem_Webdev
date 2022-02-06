import React, { useRef, useEffect } from 'react'
import '../Pong.css';

var drag = false;
var dragEnd;
var dragStart;

const AnimationsPlayer = props => {
  
  const canvasRef = useRef(null)

  useEffect(() => {
    

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.height = 300;

    function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
        context.fillRect(20, 20, 5, 20);
    }

    canvas.addEventListener('mousedown', function(event) {
      var DragMouse = event.pageY - canvas.height
      const move = 100;
      if(DragMouse>0){
        dragStart = {
          y: move
        }
      }
      else{
        dragStart = {
          y: move*-1
        }
      }
        
        console.log(event.pageY - canvas.height)
        drag = true;
    
      });
    
      canvas.addEventListener('mousemove', function(event) {
        const move =;
        if (drag) {
            dragEnd = {
                y: event.pageY - canvas.height
            }
            var Drag = dragEnd.y - dragStart.y
            //console.log(Drag);
            if(Drag<0){
              context.translate(0, (Drag)/50);
            }
              
            clear()
        }
    
      });
    
      canvas.addEventListener('mouseup', function(event) {
        drag = false;
    
      });

      canvas.addEventListener('mouseexit', function(event) {
        drag = false;
    
      });
    let animationFrameId
    
    
    const render = () => {
        draw()
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