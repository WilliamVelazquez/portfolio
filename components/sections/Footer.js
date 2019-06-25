import React from 'react';

import TopButton from '../../containers/TopButton';
import SocialMedia from './SocialMedia';
import ContactData from './ContactData';
import Copyright from './Copyright';
import ColorBar from '../ui/ColorBar';

function Footer(props) {
  const {active} = props;
	return(
		<footer>
      <TopButton />
      <div className="footerContent">
        <ContactData active={active} />
        <SocialMedia color="#fff" hoverColor="#BF0404" size={32} titleColor="#fff" title="Follow me!"/>
      </div>
      <Copyright />
      <ColorBar color="#8E1A1A" height="8px" width="100%" />

      <style jsx>{`
        footer{
          background: #111317;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99;
          box-shadow: 0 1px 5px 0 rgba(0,0,0,0.4);
          -o-box-shadow: 0 1px 5px 0 rgba(0,0,0,0.4);
          -moz-box-shadow: 0 1px 5px 0 rgba(0,0,0,0.4);
          -webkit-box-shadow: 0 1px 5px 0 rgba(0,0,0,0.4);
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