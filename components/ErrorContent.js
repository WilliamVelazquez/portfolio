import React from 'react';
import Link from 'next/link';
import { logEvent } from '../utils/analytics';

import TitleBand from './ui/TitleBand';
import LinkButton from './ui/LinkButton';
import UnderlinedLink from './ui/UnderlinedLink';
import SocialMedia from './sections/SocialMedia';

function ErrorContent(props) {
  const { msg, error, children } = props
  const GA_NOTFOUND_CATEGORY="NotFound";
  const GA_NOTFOUND_ACTION="Visit Contact Page";
  const GA_NOTFOUND_IMAGE_ACTION="Visit Home Page";
  const GA_NOTFOUND_LABEL=`Message->${msg}${error?" || Error->"+error:""}`
	return(
		<div className="container">
      <TitleBand 
        rounded={true}
        position="center"
        containerMargin="10px 0px"
        title="The content of the page will be available soon!"
      />
      {children}
      <Link href="/">
        <img 
          src="/static/Logo_512.png" 
          alt="William Velazquez Logo"
          onClick={()=>logEvent(GA_NOTFOUND_CATEGORY,GA_NOTFOUND_IMAGE_ACTION,GA_NOTFOUND_LABEL)}
        />
      </Link> 

      <h1 className="text">{msg}</h1>

      {
        error &&
        <h2 className="text">Error {error}</h2>
      }

      <SocialMedia color="#111317" hoverColor="#BF0404" size={32} titleColor="#111317" title="Get in touch!"/>
      <UnderlinedLink 
        color="#111317"
        lineColor="#BF0404"
        hoverColor="#BF0404"
        text="info@williamvelazquez.com"
        href="mailto:info@williamvelazquez.com"
        title="Send an email to William Velazquez"
      />
      <LinkButton
        color="#fff"
        text="Contact"
        href="/contact"
        hoverColor="#111317"
        borderColor="#070708"
        backgroundColor="#111317"
        hoverBackgroundColor="#fff"
        handleClick={()=>logEvent(GA_NOTFOUND_CATEGORY,GA_NOTFOUND_ACTION,GA_NOTFOUND_LABEL)}
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