import React from 'react';

function RibbonPanel(props) {
  const { title, children, img, contentColor, panelColor, textAlign, textColor, ribbonColor  } = props;
  return(
    <div className="ribbon-container">
      <h1 className="ribbon">{title}</h1>
      {children}
      {
        img &&
        <img src={`/static/${img}`} alt={title}/>
      }
      <style jsx>{`
        .ribbon-container{
          width: 89%;
          margin: 0 auto;
          padding: 1.250em;
          margin-top: -30px;
          margin-bottom: 20px;
          line-height: 1.5em;
          min-height: 3.750em; 
          border-radius: 0.313em;
          color: ${contentColor||"#292929"};
          background:${panelColor||"#eaeaea"};
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
        }
        .ribbon{
          padding: 0 0.5em;
          font-size:2.000em;
          position:relative;
          line-height: 1.875em;
          margin: 0 0 0 -0.625em;
          color: ${textColor||"#fff"};
          text-align: ${textAlign||"left"};
          border-radius: 0 0.156em 0.156em 0;
          background: ${ribbonColor||"#183352"};
          box-shadow: -1px 2px 3px rgba(0,0,0,0.5);
        }
        .ribbon:before, .ribbon:after{
          content: '';
          display: block;
          position:absolute;
        }
        .ribbon:before{
          top:0;
          height: 100%;
          left: -0.469em;
          width: 0.469em;
          background:inherit;
          padding: 0 0 0.438em;
          border-radius: 0.313em 0 0 0.313em;
        }
        .ribbon:after{
          left: -0.313em;
          width: 0.313em;
          height: 0.313em;
          bottom: -0.313em;
          background: rgba(0,0,0,0.35);
          border-radius: 0.313em 0 0 0.313em;
          box-shadow: inset -1px 2px 2px rgba(0,0,0,0.3);
        }
        img{
          width: 100%;
          height: 400px;
          object-fit: cover;
        }
        @media only screen and (max-width : 768px) {
          .ribbon{
            font-size:1.5em;
            margin: 0 0 0 -0.825em;
          }
          .ribbon-container{
            width: 82%;
          }
        }
        @media only screen and (max-width: 667px) {
          .ribbon{
            padding: 0.5em;
            line-height: 1.143em;
          }
          .ribbon:before, .ribbon:after{
            font-size: 0.714em;
          }
        }
      `}</style>
    </div>
  );
}

export default RibbonPanel;