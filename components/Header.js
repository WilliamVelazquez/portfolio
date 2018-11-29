import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import IfOffline from '../containers/IfOffline';
import NavMenu from '../components/NavMenu';

function Header(props) {
	//console.log(props);
	return(
		<header>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="description" 
          content={props.description || "Empresa de publicidad dedicada al diseño y producción de papelería, folletería, imagen corporativa, tarjetas de presentación, pósters, señalización, rotulación de transporte, fachadas, banners, colgantes, promocionales y muchos artículos innovadores más."}
        />
        {
          (props.active=="Inicio" || props.active=="Nosotros" || props.active=="Contacto")?
          <meta name="robots" content="index, follow" />
          :<meta name="robots" content="noindex, nofollow" />
        }
        <title>{props.title || "William Velazquez"}</title>
        <link rel="icon" href="/static/William Velazquez.ico" />
        
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
            <img className="btn" src="/static/LogoWhite_512.png" alt="William Velazquez"/>
          </Link>  
            <div className="Offline"><IfOffline>Offline</IfOffline></div>
        </div>

        <NavMenu active={props.active}/>
        
      </div>
      
      <style jsx global>{`
        body{
          margin: 0;
          margin-top: 100px;
          font-family: system-ui;
          background: #fff;
        }
      `}</style>
      <style jsx>{`
        header{
          background: #052A4F;
          padding: 10px;
          border-radius: 0px 0px 10px 10px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99;
          box-shadow: 0 1px 5px 0 rgba(0,0,0,0.4);
        }
        .navbar{
          display:grid;
          grid-template-columns: 9fr 1fr;
          align-items:center;
        }
        img{
          width: 35px;
        }
        .btn{
          cursor:pointer;
        }
        .left{
          flex:1;
          float:left;
          display:grid;
          grid-auto-flow: column;
          grid-template-columns: 40px 1fr;
        }
        .left .Offline{
          margin:0;
          padding:0;
          color:#FFF;
          /*color:#F1C40F;*/
          font-size: 24px;
          align-self: flex-end;
          font-weight: bold;
        }
        @media only screen and (max-width : 768px) {
          .left .Offline{
            font-size:20px;
          }
          img{
            width: 25px;
          }
          .left{
            grid-template-columns: 30px 1fr;
          }
        }
        @media only screen and (max-width : 667px) {
          .left .Offline{
            font-size:18px;
          }
          img{
            width: 20px;
          }
          .left{
            grid-template-columns: 25px 1fr;
          }
        }
      `}</style>
    </header>
	);
}

export default Header;