import React from 'react';

function AlertText(props) {
  return (
    <div className={`container alertBox${props.success?" alertSuccess":" alertError" }`}>
      <strong className="title">{ props.title }</strong>
      <p className="text">{ props.msg }</p>
      { props.children }

      <style jsx>{`
        .container{
          margin: 30px;
          border-radius: 10px;
          background: #eaeaea;
          color: #052a4f;
          text-align: left;
        }
        .alertBox{
          margin-bottom: 15px;
          padding: 10px;
          font-size: 18px;
        }
        .alertError{
          border: 3px solid #ce0000;
          background: #fff5f5;
        }
        .alertSuccess{
          border: 3px solid #00940a;
          background: #f3fff0;
        }
        .title{
          text-align: center;
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
        }
      `}</style>
    </div>
  )
}

export default AlertText;