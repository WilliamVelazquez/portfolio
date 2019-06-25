import React from 'react';

function ColorBar(props) {
  const {color, width, height, centered=false} = props;
  return(
    <div className="colorBar">
      <style jsx>{`
        .colorBar{
          width:${width||"100%"};
          height: ${height||"8px"};
          background: ${color||"#8e1a1a"};
          ${centered?"margin: 0 auto;":""}
        }
      `}</style>
    </div>
  );
}

export default ColorBar;
