import React from 'react';
import Link from 'next/link';

import SocialMedia from './SocialMedia';

function ErrorContent(props) {
	//console.log(props);
	return(
		<div className="container">
      
      <Link href="/">
        <img src="/static/Logo_1024.png" alt="William Velazquez Logo"/>
      </Link> 

      <h1 className="text">{props.msg}</h1>

      <SocialMedia color="#052A4F" hoverColor="#56a9ff" size={32} titleColor="#052A4F" title="Follow me!"/>

      <div className="btnContainer">
        <Link href="/contacto">
          <button type="button">Contact</button>
        </Link>
      </div>

      <style jsx>{`
        .container{
          border-radius: 10px;
          background: #eaeaea;
          padding: 10px;
          margin: 30px;
          margin-top: -30px;
          height: 100%;
          text-align: center;
          color: #052a4f;
        }
        .text{
          margin: 10px;
        }
        .btnContainer{
          display: grid;
          column-gap: 50px;
          grid-auto-flow: column;
          grid-template-columns: repeat(1, 1fr);
          margin: 10px;
        }
        button{
          cursor: pointer;
          border-radius: 5px;
          border: 3px solid #000752;
          padding: 10px;
          background: #052A4F;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          -webkit-transition-duration: 0.4s; /* Safari */
          transition-duration: 0.4s;
        }
        button:hover,
        button:active
        {
          color: #052A4F;
          background: #fff;
        }
        img{
          width: 22%;
          margin-top: 25px;
          cursor:pointer;
        }
        @media only screen and (max-width : 667px) {
          .btnContainer{
            grid-auto-flow: row;
            grid-row-gap: 15px;
            grid-template-columns: 1fr;
            gap-row
          }
        }
        @media only screen and (max-width : 768px) {
          img{
            width: 50%;
          }
        }
      `}</style>
    </div>
	);
}

export default ErrorContent;