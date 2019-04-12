import React from 'react';
import Link from 'next/link';

function Copyright(props) {
	return(
		<div>
      <hr />
      <div className="copyright">
        <span>©2019 William Velazquez. <span className="not-breakable">All rights reserved.</span></span>
        <div className="policies">
          <Link href="/terms">
            <a>Terms and Conditions</a>
          </Link>
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>
          <Link href="/sitemap">
            <a>Sitemap</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .copyright{
          display:grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: center;
          font-size: 12px;
          margin-bottom: 10px;
        }
        .policies{
          display:grid;
          grid-template-columns: 116px 72px 45px;
          /*grid-template-columns: 1fr 1fr 1fr;*/
          justify-items: center;
          grid-column-gap: 25px;
        }
        hr{
          width: 50px;
        }
        a, span{
          color: #fff;
          text-align: center;
          align-self: center;
        }
        a{
          cursor: pointer;
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
        @media only screen and (max-width : 768px) {
          .copyright{
            grid-template-columns: 1fr;
          }
          .policies{
            margin-top: 5px;
          }
        }
      `}</style>
    </div>
	);
}

export default Copyright;