import React from 'react';

function AlertText(props) {
  return (
    <div className={`container alertBox${props.success?" alertSuccess":" alertError" }`}>
      <strong>{ props.title }</strong>
      <p className="text">{ props.msg }</p>
      { props.children }

      <style jsx>{`
        .container{
          color: #052a4f;
          text-align: left;
          margin: 15px 30px;
          border-radius: 10px;
          background: #eaeaea;
        }
        .alertBox{
          padding: 10px;
          font-size: 18px;
          /*margin-bottom: 15px;*/
        }
        .alertError{
          /*border: 3px solid #ce0000;*/
          border: 3px solid #7b0b0b;
          background: #fff5f5;
        }
        .alertSuccess{
          border: 3px solid #00940a;
          background: #f3fff0;
        }
        .text{
          text-align: left;
          margin: 0px;
        }
        @media (max-width: 767px) {
          .alertBox{
            padding: 5px;
            font-size: 14px;
          }
          .container{
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}

export default AlertText;