import React from 'react'

import overrides from './overrides.module.css'

export const RawButton = ({
  children,
  className = '',
  onClick,
  colorClassName = 'bg-black text-white hover:bg-transparent hover:text-black',
  as: Component = 'button',
  ...rest
}) => {
  return (
    <Component
      {...rest}
      className={`
        ${overrides.rawButton}
        flex
        justify-center
        items-center
        font-extended
        rounded-full
        whitespace-nowrap
        group-hover:transition
        border-current
        border-2
        ${colorClassName}
        ${className}
    `}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

const Button = ({
  children,
  className = '',
  onClick,
  colorClassName = 'bg-black text-white hover:bg-transparent hover:text-black',
}) => {
  return (
    <RawButton
      onClick={onClick}
      colorClassName={colorClassName}
      className={`p-4 h-10 ${className}`}
    >
      {children}
    </RawButton>
  )
}

export default Button
