import React from 'react';
import Link from 'next/link';

function NavLink(props) {
  return(
    <div className="container">
      <Link prefetch href={`/${props.contextRef}`} >
        <a className={`${props.active==props.text?"active":""}`}>{props.text}</a>
      </Link>

      <style jsx>{`
        .container{
          display: grid;
          grid-template-columns: 1fr;
          align-items:center;
        }
        a{
          color: #fff;
          margin: 0 20px;
          font-size: 18px;
          user-select: none;
          justify-self: center;
          text-decoration: none;
        }
        a:hover{
          ${props.isMobileSized?"font-weight: bold;":"border-bottom: 2px solid #fff"};
        }
        .active{
          font-weight: bold;
          border-bottom: 2px solid #fff;
        }
      `}</style>
    </div>
  );
}

export default NavLink;