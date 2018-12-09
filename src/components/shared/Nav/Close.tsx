import React from 'react'

const Close = (props: any) => (
  <svg width={20} height={20} fill="none" {...props}>
    <rect
      x={0.101}
      y={17.071}
      width={24}
      height={4}
      rx={2}
      transform="rotate(-45 .1 17.071)"
      fill="#fff"
    />
    <rect
      width={24}
      height={4}
      rx={2}
      transform="scale(-1 1) rotate(-45 10.657 32.557)"
      fill="#fff"
    />
  </svg>
)

export default Close
