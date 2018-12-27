import React from 'react';
import Link from 'next/link';

import TitleBand from './TitleBand';
import AlertText from './AlertText';
import SocialMedia from './SocialMedia';

function ContactFormUI(props) {
  return(
    <div className="contactContainer">
      <TitleBand title="Let's talk !" position="center"/>
      
      {
        props.alert &&
        <AlertText title={props.msg} success={props.success}/>
      }

      <div className="container">
        <h2 className="text">Fill your data</h2>

        <div className="contactForm">
          <img src="/static/Logo_1024.png" alt="William Velazquez Logo"/>
          <form>
            <input 
              type="text"
              placeholder="*Name"
              value={props.name}
              onChange={props.changeName}
              className={props.validName?"":"errorShadow"}
            />

            <input 
              type="text"
              placeholder="*E-mail"
              value={props.email}
              onChange={props.changeEmail}
              className={props.validEmail?"":"errorShadow"}
            />

            <input 
              type="text"
              placeholder="Phone"
              value={props.phone}
              onChange={props.changePhone}
              className={props.validPhone?"":"errorShadow"}
            />

            <textarea 
              rows="4"
              type="text"
              placeholder="Comments/Suggestions"
              value={props.comments}
              onChange={props.changeComments}
            />

            <p className="helpText">*Required data</p>

            <div className="rowContainer">
              <p className="text">Do you want me to call you?</p>            
              <input 
                className="check"
                type="checkbox"
                value={props.askForCall}
                onChange={props.changeAskForCall}
              />
            </div>

            <button 
              type="button"
              onClick={props.handleSubmit}
            >
              Send
            </button>
          </form>
        </div>

      </div>
      
      <SocialMedia color="#111317" hoverColor="#BF0404" size={32} titleColor="#111317" title="Get in touch!"/>

      <style jsx>{`
        .contactContainer{
          width:100%;
          margin-top: -30px;
        }
        .container{
          border-radius: 10px;
          background: #eaeaea;
          padding: 10px;
          margin: 30px;
          height: 100%;
          text-align: center;
          color: #111317;
        }
        .text{
          margin: 10px;
        }
        .helpText{
          text-align: left;
          font-size: 10px;
          font-weight: bold;
          margin: 0px 15px;
          margin-top: -5px;
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
          padding: 10px;
          margin: 10px;
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
        .check{
          margin: 16px 5px !important;
        }
        .rowContainer{
          display: grid;
          grid-autoflow: column;
          grid-template-columns: auto 1fr;
        }
        .visitUs{
          color: #111317;
          text-align: center;
        }
        button{
          cursor: pointer;
          border-radius: 5px;
          border: 3px solid #791716;
          padding: 10px 30px;
          margin: 10px;
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
          width: 350px;
          justify-self: center;
          align-self: center;
        }
        @media only screen and (max-width : 768px) {
          .contactForm{
            grid-template-columns: 1fr;
          }
          img{
            display: none;
            width: 100px;
          }
          h2{
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactFormUI;