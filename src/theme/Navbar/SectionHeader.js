import React from 'react'
  
const SectionHeader = ({ children, className }) => (
  <h3 className={`font-favorit text-ifgray text-sm mb-7 ${className}`}>
    {children}
  </h3>
)

export default SectionHeader
  