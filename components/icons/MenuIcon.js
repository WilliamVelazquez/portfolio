import React from 'react';

function MenuIcon(props) {
  return (
    <div className={`container${props.menuOpened?' opened':''}`} onClick={props.toggleMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>

      <style jsx>{`
        .container {
            text-decoration: none;
            color: #fff;
            font-size: 18px;
            margin-right: 20px;
            justify-self: right;
            cursor: pointer;
        }
        .bar1, .bar2, .bar3 {
          width: 20px;
          height: 3px;
          background-color: #fff;
          margin: 4px 0;
          transition-duration: 0.4s;
          -o-transition-duration: 0.4s; /* Opera */
          -moz-transition-duration: 0.4s; /* Mozilla */
          -webkit-transition-duration: 0.4s; /* Safari */
        }
        .opened .bar1 {
          transform: rotate(-45deg) translate(-9px, 6px);
          -o-transform: rotate(-45deg) translate(-9px, 6px); /* Opera */
          -moz-transform: rotate(-45deg) translate(-9px, 6px); /* Mozilla */
          -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        }
        .opened .bar2 {
          opacity: 0;
        }
        .opened .bar3 {
          transform: rotate(45deg) translate(-4px, -1px);
          -o-transform: rotate(45deg) translate(-4px, -1px); /* Opera */
          -moz-transform: rotate(45deg) translate(-4px, -1px); /* Mozilla */
          -webkit-transform: rotate(45deg) translate(-4px, -1px);
        }
      `}</style>
    </div>
  )
}

export default MenuIcon;