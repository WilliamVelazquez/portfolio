import React from 'react';
import Link from 'next/link';

import Technologies from './sections/Technologies';
import Hero from './sections/Hero';

function HomeContent(props) {
	return(
		<div>
      <Hero />
      <Technologies />
      
      <style jsx global>{`
        body{
          background-color: #8e1a1a;
        }
      `}</style>
      <style jsx>{`
        .title{
          margin: 10px;
          font-size: 48px;
          color: #fff;
        }
        .text{
          font-size: 30px;
          color: #fff;
        }
        @media only screen and (max-width : 768px) {
          .title{
            font-size: 38px
          }
          .text{
            font-size: 20px
          }
        }
        @media only screen and (max-width : 667px) {
          .title{
            font-size: 24px
          }
          .text{
            font-size: 14px
          }
        }
      `}</style>
    </div>
	);
}

export default HomeContent;