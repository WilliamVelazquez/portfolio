import React from 'react';
import { logEvent } from '../utils/analytics';

import TitleBand from './ui/TitleBand';
import AlertText from './ui/AlertText';
import SocialMedia from './sections/SocialMedia';
import UnderlinedLink from './ui/UnderlinedLink';
import CubeLoader from './ui/CubeLoader';

function ContactFormUI(props) {
  const {alert, msg, success, name, changeName, validName, email, changeEmail, validEmail, phone, changePhone, validPhone, comments, changeComments, askForCall, changeAskForCall, handleSubmit, loading} = props;
  const GA_CONTACT_FORM_CATEGORY="Contact Form";
	const GA_CONTACT_FORM_MAIL_ACTION="Contact Form - Mail to Info";
  const GA_CONTACT_FORM_MAIL_LABEL="Contact Form Mail to Info";
  
  return(
    <div className="contactContainer">
      <TitleBand title="Let's make something great together!" position="center"/>
      <SocialMedia color="#fff" hoverColor="#111317" size={32} titleColor="#fff"/>
      <UnderlinedLink 
        color="#fff"
        lineColor="#111317"
        hoverColor="#111317"
        text="info@williamvelazquez.com"
        href="mailto:info@williamvelazquez.com"
        title="Send an email to William Velazquez"
        handleClik={()=>logEvent(GA_CONTACT_FORM_CATEGORY,GA_CONTACT_FORM_MAIL_ACTION,GA_CONTACT_FORM_MAIL_LABEL)}
      />
      {
        alert &&
        <AlertText title={msg} success={success}/>
      }

      <div className="container">
        <h2 className="text">Fill your data</h2>

        <div className="contactForm">
          <img src="/static/Logo_512.png" alt="William Velazquez Logo"/>
          <form>
            <input 
              type="text"
              placeholder="*Name"
              value={name}
              onChange={changeName}
              className={validName?"":"errorShadow"}
            />

            <input 
              type="email"
              placeholder="*E-mail"
              value={email}
              onChange={changeEmail}
              className={validEmail?"":"errorShadow"}
            />

            <input 
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={changePhone}
              className={validPhone?"":"errorShadow"}
            />

            <textarea 
              rows="4"
              type="text"
              placeholder="Comments/Suggestions"
              value={comments}
              onChange={changeComments}
            />

            <p className="helpText">*Required data</p>

            <div className="rowContainer">
              <p className="check-text">Do you want me to call you?</p>            
              <input 
                type="checkbox"
                className="check-btn"
                value={askForCall}
                checked={askForCall}
                onChange={changeAskForCall}
              />
            </div>

            <button 
              type="button"
              onClick={handleSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {
        loading &&
        <CubeLoader cubeColor='#111317'/>
      }

      <style jsx>{`
        .contactContainer{
          width:100%;
          margin-top: -30px;
        }
        .container{
          height: 100%;
          padding: 10px;
          color: #111317;
          margin: 20px 30px;
          text-align: center;
          border-radius: 10px;
          background: #eaeaea;
        }
        .text{
          margin: 10px;
        }
        .helpText{
          font-size: 10px;
          text-align: left;
          margin: 0px 15px;
          margin-top: -5px;
          font-weight: bold;
        }
        .contactForm{
          display: grid;
          grid-template-columns: repeat(2,1fr);
        }
        form{
          display: grid;
          grid-autoflow: column;
        }
        .contactForm input,
        .contactForm textarea{
          margin: 10px;
          padding: 10px;
          border-radius: 10px;
          border: 2px solid #111317;
        }
        .contactForm input.errorShadow,
        .contactForm textarea.errorShadow{
          box-shadow:         0px 0px 10px 1px #f00;
          -o-box-shadow:      0px 0px 10px 1px #f00;
          -moz-box-shadow:    0px 0px 10px 1px #f00;
          -webkit-box-shadow: 0px 0px 10px 1px #f00;
          /*-moz-box-shadow:    3px 3px 5px 6px #ccc;
          -webkit-box-shadow: 3px 3px 5px 6px #ccc;
          box-shadow:         3px 3px 5px 6px #ccc;*/
        }
        .check-text{
          margin: 0px;
        }
        .check-btn{
          align-self: center;
          margin: 0px !important;
          margin-top: 3px !important;
        }
        .rowContainer{
          margin: 10px;
          display: grid;
          grid-column-gap: 10px;
          grid-template-columns: auto 1fr;
        }
        .visitUs{
          color: #111317;
          text-align: center;
        }
        button{
          color: #fff;
          margin: 10px;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          border-radius: 5px;
          padding: 10px 30px;
          background: #111317;
          border: 3px solid #070708;
          transition-duration: 0.4s;
          -o-transition-duration: 0.4s; /* Opera */
          -moz-transition-duration: 0.4s; /* Mozilla */
          -webkit-transition-duration: 0.4s; /* Safari */
        }
        button:hover,
        button:active
        {
          color: #111317;
          background: #fff;
        }
        img{
          width: 400px;
          align-self: center;
          justify-self: center;
        }
        @media only screen and (max-width : 768px) {
          .contactForm{
            grid-template-columns: 1fr;
          }
          img{
            width: 100px;
            display: none;
          }
          h2{
            font-size: 18px;
          }
          .check-btn{
            margin-top: 0px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactFormUI;