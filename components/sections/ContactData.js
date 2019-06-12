import React from 'react';
import Link from 'next/link';
import { logEvent } from '../../utils/analytics';

import SmMailIcon from '../icons/SmMailIcon';

function ContactData(props) {
  const {active} = props;
  const GA_CONTACTDATA_CATEGORY="Contact Data";
  const GA_CONTACTDATA_MAIL_ACTION="Contact Data - Mail to Info";
  const GA_CONTACTDATA_CONTACT_ACTION="Contact Data - Let's talk!";
  const GA_CONTACTDATA_MAIL_LABEL=`Contact Data Mail From ${active||'-'}`
  const GA_CONTACTDATA_CONTACT_LABEL=`Contact Data From ${active||'-'} to Contact`
	return(
		<div className="contactData">
      <span className="footerTitle">Contact</span>

      <span className="iconLine">
        <SmMailIcon color="white" size={32} />
        <a 
          title="Send an email to William Velazquez"
          href="mailto:info@williamvelazquez.com"
          onClick={()=>logEvent(GA_CONTACTDATA_CATEGORY,GA_CONTACTDATA_MAIL_ACTION,GA_CONTACTDATA_MAIL_LABEL)}
        >
          info@williamvelazquez.com
        </a>
      </span>
      <span>
        {"Want to work together or any advice? "}
        <Link href="/contact">
          <a 
            title="Get in touch with William Velazquez"
            className="not-breakable"
            onClick={()=>logEvent(GA_CONTACTDATA_CATEGORY,GA_CONTACTDATA_CONTACT_ACTION,GA_CONTACTDATA_CONTACT_LABEL)}
          >
            Let's talk!
          </a>
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
          grid-template-columns: min-content 1fr;
        }
        p, a, span{
          color: #fff;
          text-align: center;
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
          color: #BF0404;
        }
        .not-breakable{
          white-space: nowrap;
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