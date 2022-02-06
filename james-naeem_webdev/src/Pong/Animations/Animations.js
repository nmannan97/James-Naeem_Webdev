import React, { useRef, useEffect } from 'react'

var drag = false;
var dragEnd;
var dragStart;

const Canvas = props => {
  
  const canvasRef = useRef(null)

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
        context.fillRect(5, 20, 20, 100);
    }

    canvas.addEventListener('mousedown', function(event) {
        dragStart = {
          y: event.pageY - canvas.offsetTop
        }
    
        drag = true;
    
      });
    
      canvas.addEventListener('mousemove', function(event) {
        if (drag) {
            dragEnd = {
                y: event.pageY - canvas.offsetTop
            }
            context.translate(0, (dragEnd.y - dragStart.y)/40);
          
            clear()
        }
    
      });
    
      canvas.addEventListener('mouseup', function(event) {
        drag = false;
    
      });
    let frameCount = 0
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
  
  return <canvas ref={canvasRef}/>
}

export default Canvas