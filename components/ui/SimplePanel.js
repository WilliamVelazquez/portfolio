import React from 'react';

function SimplePanel(props) {
  const { setRef, id, title, children, color, backgroundColor } = props;
  return(
    <div className="textContainer" ref={setRef || null} id={id || null}>
      <p className="title">{title}</p>
      {children}
      <style jsx>{`
        .textContainer{
          margin: 20px;
          padding: 20px 10px;
          text-align: center;
          border-radius: 10px;
          color: ${color || '#052a4f'};
          background: ${backgroundColor || '#eaeaea'};
        }
        .title{
          margin: 10px ;
          font-size: 24px;
          text-align: left;
          font-weight: bold;
        }
        @media only screen and (max-width : 768px) {
          .textContainer{
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default SimplePanel;