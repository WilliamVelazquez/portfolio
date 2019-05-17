import React from 'react';
import Link from 'next/link';

import SocialMedia from './sections/SocialMedia';

function ErrorContent(props) {
	//console.log(props);
	return(
		<div className="container">
      
      <Link href="/">
        <img src="/static/Logo_1024.png" alt="William Velazquez Logo"/>
      </Link> 

      <h1 className="text">{props.msg}</h1>

      {
        props.error &&
        <h2 className="text">Error {props.error}</h2>
      }

      <SocialMedia color="#111317" hoverColor="#BF0404" size={32} titleColor="#111317" title="Get in touch!"/>
      <a href="mailto:info@williamvelazquez.com">info@williamvelazquez.com</a>

      <div className="btnContainer">
        <Link href="/contact">
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
          color: #111317;
        }
        .text{
          margin: 10px;
        }
        a{
          display:grid;
          color: #111317;
          cursor: pointer;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          text-decoration:none;
          -o-text-decoration:none;
          -moz-text-decoration:none;
          -webkit-text-decoration:none;
        }
        a:hover{
          color: #BF0404;
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
          border: 3px solid #791716;
          padding: 10px;
          background: #BF0404;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          transition-duration: 0.4s;
          -o-transition-duration: 0.4s; /* Opera */
          -moz-transition-duration: 0.4s; /* Mozilla */
          -webkit-transition-duration: 0.4s; /* Safari */
        }
        button:hover,
        button:active
        {
          color: #BF0404;
          background: #fff;
        }
        img{
          width: 22%;
          margin-top: 25px;
          cursor:pointer;
        }
        @media only screen and (max-width : 768px) {
          img{
            width: 50%;
          }
        }
        @media only screen and (max-width : 667px) {
          .btnContainer{
            grid-auto-flow: row;
            grid-row-gap: 15px;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
	);
}

export default ErrorContent;