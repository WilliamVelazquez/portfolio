import React from 'react';

function GalleryImageCard(props) {
  const {img, index, handleImageCardClick, withBorder=false} = props;
  return(
    <div className="gallery-image-card" onClick={(e) => handleImageCardClick(index)}>
      <img src={img.src} />
      <style jsx>{`
        *, *:before, *:after {
          box-sizing: border-box;
        }
        .gallery-image-card {
          cursor: pointer;
          max-height: 100%;
          overflow: hidden;
          position: relative;
          margin-bottom: -4px;
        }
        .gallery-image-card:before{
          top: 0;
          left: 0;
          right: 0;
          content: "";
          bottom: 4px;
          display: block;
          position: absolute;
          background: rgba(34, 34, 34, .4);
        }
        .gallery-image-card:after{
          top: 50%;
          left: 50%;
          color: #fff;
          display: block;
          font-size: 30px;
          content: '\\02194';
          position: absolute;
          transform: translate3d(-50%, -50%, 0) rotate(-45deg);
        }
        .gallery-image-card:before, 
        .gallery-image-card:after{
          opacity: 0;
          transition: .4s opacity ease;
          -moz-transition: .4s opacity ease;
          -webkit-transition: .4s opacity ease;
        }
        .gallery-image-card:hover:before, 
        .gallery-image-card:hover:after{
          opacity: 1;
        }
        .gallery-image-card img{
          width: 100%;
          ${withBorder?"border: 5px solid #fff;":""}
          transition: 0.4s ease;
          -moz-transition: 0.4s ease;
          -webkit-transition: 0.4s ease;
        }
        .gallery-image-card:hover > img{
          transform: scale(1.2);
          -moz-transform: scale(1.2);
          -webkit-transform: scale(1.2);
        }
        @media only screen and (max-width: 667px) {
          .gallery-image-card:after{
            font-size: 40px;
          }
        }
      `}</style>
    </div>
  );
}

export default GalleryImageCard;
