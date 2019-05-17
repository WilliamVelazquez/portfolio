import React from 'react';

function TitleBand(props) {
  const { rounded, title, backgroundColor, color, position } = props;
	return(
		<div className={`container${rounded?" rounded-band":""}`}>
      
      <h2>{title}</h2>

      <style jsx>{`
        .container{
          width:100%;
          margin:40px 0px;
          margin-bottom: 25px;
          background: ${backgroundColor||"#111317"};
        }
        .rounded-band{
          border-radius: 10px;
        }
        h2{
          margin:0;
          padding:15px;
          color:${color||"#fff"};
          text-align: ${position || "left"};
        }
        @media only screen and (max-width : 768px) {
          h2{
            padding:10px;
            font-size: 18px;
          }
        }
      `}</style>
    </div>
	);
}

export default TitleBand;