import React from 'react';
import Link from 'next/link';
import { logEvent } from '../utils/analytics';

import TitleBand from './ui/TitleBand';
import LinkButton from './ui/LinkButton';
import UnderlinedLink from './ui/UnderlinedLink';
import SocialMedia from './sections/SocialMedia';

function ErrorContent(props) {
  const { msg, error } = props
  const GA_CATEGORY="NotFound";
  const GA_ACTION="Visit Contact Page";
  const GA_IMAGE_ACTION="Visit Home Page";
  const GA_LABEL=`Message->${msg}${error?" || Error->"+error:""}`
	return(
		<div className="container">
      <TitleBand 
        rounded={true}
        position="center"
        title="The content of the page will be available soon!"
      />
      <Link href="/">
        <img 
          src="/static/Logo_512.png" 
          alt="William Velazquez Logo"
          onClick={()=>logEvent(GA_CATEGORY,GA_IMAGE_ACTION,GA_LABEL)}
        />
      </Link> 

      <h1 className="text">{msg}</h1>

      {
        error &&
        <h2 className="text">Error {error}</h2>
      }

      <SocialMedia color="#111317" hoverColor="#BF0404" size={32} titleColor="#111317" title="Get in touch!"/>
      <UnderlinedLink 
        href="mailto:info@williamvelazquez.com"
        text="info@williamvelazquez.com"
        color="#111317"
        hoverColor="#BF0404"
        lineColor="#BF0404"
      />
      <LinkButton
        href="/contact"
        text="Contact"
        color="#fff"
        backgroundColor="#111317"
        borderColor="#070708"
        hoverColor="#111317"
        hoverBackgroundColor="#fff"
        handleClick={()=>logEvent(GA_CATEGORY,GA_ACTION,GA_LABEL)}
      />

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
      `}</style>
    </div>
	);
}

export default ErrorContent;