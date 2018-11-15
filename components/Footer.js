import React from 'react';
import Link from 'next/link';

import SocialMedia from './SocialMedia';
import ContactData from './ContactData';
import Copyright from './Copyright';

function Footer(props) {
	return(
		<footer>
      <div className="footerContent">
        <ContactData />
        <SocialMedia color="#fff" hoverColor="#56a9ff" size={32} titleColor="#fff" title="Visita nuestras redes sociales"/>
      </div>
      <Copyright />
      
      <div className="colorBar"></div>

      <style jsx>{`
        footer{
          background: #052A4F;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99;
          box-shadow: 0 1px 5px 0 rgba(0,0,0,0.4);
          /*height: 200px;*/
        }
        .footerContent{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          /*height: 100%;
          padding: 10px;
          margin-bottom: 20px;*/
          padding: 15px 10px;
          align-items: center;
          justify-items: center;
        }
        .colorBar{
          background: #1f456c;
          height: 8px;
        }
        img{
          width: 35px;
        }
        @media only screen and (max-width : 768px) {
          .footerContent{
            grid-template-columns: 1fr;
            grid-row-gap: 15px;
          }
        }
      `}</style>
    </footer>
	);
}

export default Footer;