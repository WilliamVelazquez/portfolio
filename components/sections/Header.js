import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { logEvent } from '../../utils/analytics';

import IfOffline from '../../containers/IfOffline';
import NavMenu from '../../containers/NavMenu';

function Header(props) {
  const { description, active, title,  } = props;
  const GA_NAVIGATION_CATEGORY="Navigation";
  const GA_NAVIGATION_ACTION="Nav Logo";
  const GA_NAVIGATION_LABEL=`Nav Logo From ${active||'-'} to Home`
	return(
		<header>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="description" 
          content={description || "Portfolio website of William Velazquez as a Full Stack Developer with experience working on modern technologies like ReactJs, NextJS, React Native, PWA and more."}
        />
        {
          (active=="Home" || active=="About" || active=="Resume" || active=="Work" || active=="Contact")?
          <meta name="robots" content="index, follow" />
          :<meta name="robots" content="noindex, nofollow" />
        }
        <title>{title || "William Velazquez"}</title>
        <link rel="icon" href="/static/WilliamVelazquez.ico" />
        
        <meta name="theme-color" content="#052A4F" />
        <link rel="manifest" href="/static/manifest.webmanifest" />

        <link rel='apple-touch-icon' href='/static/Logo/Logo_512.png' />
        <meta name="apple-mobile-web-app-title" content="William Velazquez" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-apps-status-bar-style" content="black-translucent" />
      </Head>
      
      <div className="navbar">
        <div className="left">
          <Link href="/">
            <img 
              className="btn" 
              src="/static/LogoWhite_55.png" 
              alt="William Velazquez"
              onClick={()=>logEvent(GA_NAVIGATION_CATEGORY,GA_NAVIGATION_ACTION,GA_NAVIGATION_LABEL)}
            />
          </Link>  
          <div className="Offline"><IfOffline>Offline</IfOffline></div>
        </div>

        <NavMenu active={active}/>
        
      </div>
      
      <style jsx global>{`
        body{
          margin: 0;
          margin-top: 100px;
          font-family: system-ui;
          /*background-color: #fff;*/
          background-color: #8e1a1a;
        }
        @media only screen and (max-width : 667px) {
          body{
            margin-top: 80px;
          }
        }
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        /*COLOR Normal*/
        ::-webkit-scrollbar-thumb {
          background: #7b0b0b;
          border-radius: 10px;
          border: 0px none #ffffff;
          box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          -moz-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        }
        /*COLOR HOVER*/
        ::-webkit-scrollbar-thumb:hover {
          background: #670909;
        }
        ::-webkit-scrollbar-thumb:active {
          background: #5d0808;
        }
        ::-webkit-scrollbar-track {
          background: #2d2d2d;
          border-radius: 10px;
          border: 0px none #ffffff;
          box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          -moz-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        }
        ::-webkit-scrollbar-track:hover {
          background: #2d2d2d;
        }
        ::-webkit-scrollbar-track:active {
          background: #272727;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
        ::-webkit-scrollbar-button {
          width: 0px;
          height: 0px;
        }
        ::-webkit-scrollbar-button:start {
          display: none;
        }
        ::-webkit-scrollbar-button:end {
          display: none;
        }
      `}</style>
      <style jsx>{`
        header{
          top: 0;
          left: 0;
          right: 0;
          z-index: 99;
          padding: 10px;
          position: fixed;
          max-height: 28px;
          background: #111317;
          border-radius: 0px 0px 10px 10px;
          box-shadow: 0 1px 5px 0 rgba(0,0,0,0.4);
        }
        .navbar{
          display:grid;
          grid-template-columns: 9fr 1fr;
          align-items:center;
        }
        img{
          width: 55px;
        }
        .btn{
          cursor:pointer;
        }
        .left{
          flex:1;
          float:left;
          display:grid;
          grid-auto-flow: column;
          grid-template-columns: 60px 1fr;
        }
        .left .Offline{
          margin:0;
          padding:0;
          color:#BF0404;
          font-size: 24px;
          align-self: flex-end;
          font-weight: bold;
        }
        @media only screen and (max-width : 768px) {
          header{
            max-height: 23px;
          }
          .left .Offline{
            font-size:20px;
          }
          img{
            width: 45px;
          }
          .left{
            grid-template-columns: 50px 1fr;
          }
        }
        @media only screen and (max-width : 667px) {
          header{
            max-height: 15px;
          }
          .left .Offline{
            font-size:14px;
          }
          img{
            width: 30px;
          }
          .left{
            grid-template-columns: 35px 1fr;
          }
        }
      `}</style>
    </header>
	);
}

export default Header;