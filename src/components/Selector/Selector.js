import React, { useState } from 'react'
import cn from '../../utils/classNames'
import { evaluate } from '../../utils/props'
import Button from '../Button/Button'

import './Selector.css'

const Selector = ({ 
  children,
  options = [], 
  onChange = () => {},
  value = null
}) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(evaluate(value))

  return (
    <Button
      active={() => open}
      className="Selector"
      onClick={() => setOpen(!open)}
      onPointerLeave={() => setOpen(false)}
    >
      {children}
      {
        open && (
          <div className="Selector__list">
            {options.map(option => (
              <div
                key={option.value}
                className={cn(
                  'Selector__list-item', 
                  option.value === selected && 'Selector__list-item--selected'
                )}
                onClick={() => {
                  setOpen(false)
                  setSelected(option.value)
                  onChange(option.value)
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )
      }
    </Button>
  )
}

export default Selector