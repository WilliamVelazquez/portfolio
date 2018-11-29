import React from 'react';
import Link from 'next/link';

import PhoneIcon from './icons/PhoneIcon';
import SmMailIcon from './icons/SmMailIcon';

function ContactData(props) {
	return(
		<div className="contactData">
      <span className="footerTitle">Hablemos</span>

      <span className="iconLine"><PhoneIcon color="white" size={22} />5303-4097</span>
      <span className="iconLine"><SmMailIcon color="white" size={32} /><a href="mailto:qualitypublicidadmx@gmail.com?subject=Consulta%20Vía%20Email&body=Buen%20día">qualitypublicidadmx@gmail.com</a></span>
      <span>
        {"¿Deseas que te marquemos? "}
        <Link href="/contacto">
          <a>Contáctanos</a>
        </Link>
      </span>

      <style jsx>{`
        .contactData{
          display:grid;
          grid-template-columns: 1fr;
          grid-row-gap: 20px;
          justify-items: left;
        }
        .iconLine{
          display:grid;
          grid-template-columns: 30px 1fr;
        }
        p, a, span{
          color: #fff;
        }
        a{
          cursor: pointer;
          font-weight: bold;
          text-decoration:none;
          -o-text-decoration:none;
          -moz-text-decoration:none;
          -webkit-text-decoration:none;
        }
        a:hover{
          color: #56a9ff;
        }
        .footerTitle{
          font-size: 20px;
          font-weight: bold;
          /* text-align: center; */
          /* border-top: 2px solid #fff; */
          /* border-bottom: 2px solid #fff; */
          /* padding: 5px; */
        }
        .footerTitle:after {
          content: " ";
          border: 1px solid #fff;
          /*margin-top: 10px;
          margin-bottom: 10px;*/
          margin: 10px 0px;
          display: block;
          max-width: 120px;/*80px*/
        }
        @media only screen and (max-width : 768px) {
          .contactData{
            justify-items: center;
          }
        }
      `}</style>
    </div>
	);
}

export default ContactData;