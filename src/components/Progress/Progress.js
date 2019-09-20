import React from 'react'
import cn from '../../utils/classNames'
import { evaluate } from '../../utils/props'
import { format } from '../../utils/time'

import './Progress.css'

const Progress = ({
  className,
  initial,
  time,
  duration,
  onSkip = () => {}
}) => {
  time = evaluate(time || initial)
  duration = evaluate(duration)

  return (
    <div className={cn('Progress', {}, className)}>
      <div className="Progress__time">{format(time)}</div>
      <div 
        className="Progress__track" 
        onClick={(e) => {
          const scrubWidth = e.pageX - e.currentTarget.offsetLeft
          const newPercent = scrubWidth / e.currentTarget.offsetWidth
          onSkip(newPercent)
        }}
      >
        {/* <div className="Progress__thumb"></div> */}
        <div className="Progress__scrubbed" style={{ width: `${(time / duration) * 100}%` }}></div>
      </div>
      <div className="Progress__time">-{format(duration - time)}</div>
    </div>
  )
}

export default Progress