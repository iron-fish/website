import React from 'react'

function Close({ className }) {
  return (
    <svg
      className={className}
      width="27"
      height="26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M.86 23.334L24.196 0l1.945 1.944L2.805 25.28z"
      />
      <path
        className="fill-current"
        d="M26.139 23.334L2.804 0 .86 1.945l23.334 23.334z"
      />
    </svg>
  )
}

export default Close
