import React from 'react'

const Button = (props: any) => (
  <svg width={24} height={20} fill="none" {...props}>
    <rect width={24} height={4} rx={2} fill="#fff" />
    <rect y={8} width={24} height={4} rx={2} fill="#fff" />
    <rect y={16} width={24} height={4} rx={2} fill="#fff" />
  </svg>
)

export default Button
