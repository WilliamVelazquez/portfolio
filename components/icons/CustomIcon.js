import React from 'react';

function CustomIcon(props) {
  const {
    color,
    size,
    viewBox,
    hoverColor
  } = props
  return (
    <svg
      fill={color}
      height={size}
      width={size}
      viewBox={viewBox}
    >
      {props.children}
      <style jsx>{`
        svg:hover{
          transition-duration: 0.4s;
          -o-transition-duration: 0.4s; /* Opera */
          -moz-transition-duration: 0.4s; /* Mozilla */
          -webkit-transition-duration: 0.4s; /* Safari */
          fill: ${hoverColor};
        }
      `}</style>
    </svg>
  )
}

export default CustomIcon;