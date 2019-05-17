import React from 'react';

function SimplePanel(props) {
  return(
    <div className="textContainer" ref={props.setRef || null} id={props.id || null}>
      <p className="title">{props.title}</p>
      {props.children}
      <style jsx>{`
        .textContainer{
          border-radius: 10px;
          background: ${props.backgroundColor || '#eaeaea'};
          padding: 20px 10px;
          margin: 20px;
          height: 100%;
          color: ${props.color || '#052a4f'};
          text-align: center;
        }
        .title{
          margin: 10px ;
          font-weight: bold;
          font-size: 24px;
          text-align: left;
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