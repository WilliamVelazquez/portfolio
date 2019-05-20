import React from 'react';

function Icon(props) {
  const {
    color,
    size,
    hoverColor
  } = props
  return (
    <svg
      fill={color}
      height={size}
      width={size}
      viewBox="0 0 32 32"
    >
      {props.children}
      <style jsx>{`
        svg{
          transition-duration: 0.4s;
          -o-transition-duration: 0.4s; /* Opera */
          -moz-transition-duration: 0.4s; /* Mozilla */
          -webkit-transition-duration: 0.4s; /* Safari */
        }
        svg:hover{
          fill: ${hoverColor};
        }
      `}</style>
    </svg>
  )
}

export default Icon;