import React from 'react';

function TitleBand(props) {
  const { rounded, title, containerMargin, backgroundColor, color, position } = props;
	return(
		<div className={`band-container${rounded?" rounded-band":""}`}>
      
      <h2>{title}</h2>

      <style jsx>{`
        .band-container{
          width:100%;
          margin: ${containerMargin||"20px 0px"};
          background: ${backgroundColor||"#111317"};
        }
        .rounded-band{
          border-radius: 10px;
        }
        h2{
          margin:0;
          padding:15px;
          font-size: 24px;
          color:${color||"#fff"};
          text-align: ${position || "left"};
        }
        @media only screen and (max-width : 768px) {
          h2{
            padding:8px;
            font-size: 18px;
          }
        }
      `}</style>
    </div>
	);
}

export default TitleBand;