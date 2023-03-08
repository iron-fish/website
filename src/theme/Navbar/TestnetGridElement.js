import React from 'react'

import RightArrow from './icons/RightArrow'

import Cube from './Cube'
import overrides from './overrides.module.css'

const TestnetGridElement = ({
  className,
  href,
  header,
  body,
  cubeClassName,
  textClassName,
  ...rest
}) => (
    <a
      className={`flex items-center ${className} rounded relative hover:bg-iflightgray ${overrides.link}`}
      href={href}
      {...rest}
    >
      <Cube className={cubeClassName} />
      <div className={`flex flex-col ${textClassName}`}>
        <div className="flex flex-row">
          <h5 className={`text-base md:text-xl ${overrides.gridElementH5}`}>{header}</h5>
          <RightArrow className="absolute right-0 md:hidden" />
        </div>
        <p className={`font-favorit text-ifgray text-sm ${overrides.gridElementP}`}>{body}</p>
      </div>
    </a>
)

export default TestnetGridElement
