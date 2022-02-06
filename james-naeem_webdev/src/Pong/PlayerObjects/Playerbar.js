import Animations from '../Animations/Animations'
import React, { useRef, useEffect } from 'react'
import '../Pong.css'
const Playerbar = props => {

    const draw = (ctx, frameCount) => {
        
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.rect(20, frameCount, 20, 20)
        ctx.fill()
      }
      
    return <Animations draw={draw} className="Player"/>
  
}

export default Playerbar