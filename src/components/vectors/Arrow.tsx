import * as React from 'react'

export const Arrow = (props: any) => (
  <svg width={10} height={10} fill="none" {...props}>
    <g
      opacity={0.66}
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 9l8-8M1 1h8v8" />
    </g>
  </svg>
)
