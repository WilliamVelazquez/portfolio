import React from 'react';

import UnderlinedLink from './UnderlinedLink';
import DownloadIcon from '../icons/DownloadIcon';

function PdfViewer(props) {
  const { file, startPage, width, height, type, frameStyles, fallbackMessage, downloadButton=true, btnTarget, btnText, btnTitle, btnJustify, btnColor, btnHoverColor, btnFile, btnClick, children } = props
	return(
		<div className="pdf-container">
      <object
        data={`${file}${startPage?`#page=${startPage}`:""}`}
        type={type||"application/pdf"}
        width={width||"100%"}
        height={height||"100%"}
      >
        <iframe
          src={`${file}${startPage?`#page=${startPage}`:""}`}
          width={width||"100%"}
          height={height||"100%"}
          className="frame-styles"
        >
          <p>{fallbackMessage||"Your browser does not support PDFs."}</p>
        </iframe>
      </object>
      {
        downloadButton &&
        <UnderlinedLink 
          href={btnFile||file||null}
          target={btnTarget||"_blank"}
          text={btnText||"Download"}
          color={btnColor||"#111317"}
          justify={btnJustify||"flex-end"}
          lineColor={btnHoverColor||"#BF0404"}
          hoverColor={btnHoverColor||"#BF0404"}
          title={btnTitle||"Download File"}
          handleClik={btnClick||null}
        >
          <DownloadIcon
            size={20}
            color="#111317"
            hoverColor="#BF0404"
          />
        </UnderlinedLink>
      }
      <style jsx>{`
        .pdf-container{
          width: 100%;
        }
        .frame-styles{
          border: none;
          ${frameStyles||""}
        }
        @media only screen and (max-width : 768px) {
          .pdf-container{
            width: 100%;
          }
        }
      `}</style>
    </div>
	);
}

export default PdfViewer;