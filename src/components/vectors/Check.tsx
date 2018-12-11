import React from 'react'

const Check = (props: any) => (
  <svg width={16} height={12} fill="none" {...props}>
    <path
      opacity={0.66}
      d="M15 1L5.375 11 1 6.455"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Check
