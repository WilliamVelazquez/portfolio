import React from 'react';

function CubeLoader(props) {
	const {backgroundColor, cubeColor} = props;
  return (
    <div className="loading">
      <div>
        <div className="cssload-container">
					<div className="cssload-thecube">
						<div className="cssload-cube cssload-c1" />
						<div className="cssload-cube cssload-c2" />
						<div className="cssload-cube cssload-c4" />
						<div className="cssload-cube cssload-c3" />
					</div>
        </div>
      </div>
			
			{props.children}
			
			<style jsx>{`
				.loading {
					top: 0px;
					left: 0px;
					width: 100%;
					height: 100%;
					z-index: 999;
					position: fixed;
					text-align: center;
					background-color: ${backgroundColor||'rgba(0, 0, 0, 0.4)'};
				}
				.loading>div {
					top: 50%;
					left: 50%;
					position: absolute;
				}
				.cssload-container{
					position:relative;
				}
				.cssload-thecube {
          width: 73px;
          height: 73px;
          margin: 0 auto;
          /*margin-top: 49px;*/
          /*Centered*/
          margin-top: -30px;
          margin-left: -37px;
          /*----------------*/
          position: relative;
          transform: rotateZ(45deg);
          -o-transform: rotateZ(45deg);
          -ms-transform: rotateZ(45deg);
          -webkit-transform: rotateZ(45deg);
          -moz-transform: rotateZ(45deg);
        }
        .cssload-thecube .cssload-cube {
          position: relative;
          transform: rotateZ(45deg);
          -o-transform: rotateZ(45deg);
          -ms-transform: rotateZ(45deg);
          -webkit-transform: rotateZ(45deg);
          -moz-transform: rotateZ(45deg);
        }
        .cssload-thecube .cssload-cube {
          float: left;
          width: 50%;
          height: 50%;
          position: relative;
          transform: scale(1.1);
          -o-transform: scale(1.1);
          -ms-transform: scale(1.1);
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
        }
        .cssload-thecube .cssload-cube:before {
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: ${cubeColor||'rgb(41, 41, 41)'};
          animation: cssload-fold-thecube 2.76s infinite linear both;
          -o-animation: cssload-fold-thecube 2.76s infinite linear both;
          -ms-animation: cssload-fold-thecube 2.76s infinite linear both;
          /*-webkit-animation: cssload-fold-thecube 2.76s infinite linear both;*/
          -moz-animation: cssload-fold-thecube 2.76s infinite linear both;
          transform-origin: 100% 100%;
          -o-transform-origin: 100% 100%;
          -ms-transform-origin: 100% 100%;
          -webkit-transform-origin: 100% 100%;
          -moz-transform-origin: 100% 100%;
        }
        .cssload-thecube .cssload-c2 {
          transform: scale(1.1) rotateZ(90deg);
          -o-transform: scale(1.1) rotateZ(90deg);
          -ms-transform: scale(1.1) rotateZ(90deg);
          -webkit-transform: scale(1.1) rotateZ(90deg);
          -moz-transform: scale(1.1) rotateZ(90deg);
        }
        .cssload-thecube .cssload-c3 {
          transform: scale(1.1) rotateZ(180deg);
          -o-transform: scale(1.1) rotateZ(180deg);
          -ms-transform: scale(1.1) rotateZ(180deg);
          -webkit-transform: scale(1.1) rotateZ(180deg);
          -moz-transform: scale(1.1) rotateZ(180deg);
        }
        .cssload-thecube .cssload-c4 {
          transform: scale(1.1) rotateZ(270deg);
          -o-transform: scale(1.1) rotateZ(270deg);
          -ms-transform: scale(1.1) rotateZ(270deg);
          -webkit-transform: scale(1.1) rotateZ(270deg);
          -moz-transform: scale(1.1) rotateZ(270deg);
        }
        .cssload-thecube .cssload-c2:before {
          animation-delay: 0.35s;
          -o-animation-delay: 0.35s;
          -ms-animation-delay: 0.35s;
          -webkit-animation-delay: 0.35s;
          -moz-animation-delay: 0.35s;
        }
        .cssload-thecube .cssload-c3:before {
          animation-delay: 0.69s;
          -o-animation-delay: 0.69s;
          -ms-animation-delay: 0.69s;
          -webkit-animation-delay: 0.69s;
          -moz-animation-delay: 0.69s;
        }
        .cssload-thecube .cssload-c4:before {
          animation-delay: 1.04s;
          -o-animation-delay: 1.04s;
          -ms-animation-delay: 1.04s;
          -webkit-animation-delay: 1.04s;
          -moz-animation-delay: 1.04s;
        }
        @keyframes cssload-fold-thecube {
          0%,
          10% {
            transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
          }
          25%,
          75% {
            transform: perspective(136px) rotateX(0deg);
            opacity: 1;
          }
          90%,
          100% {
            transform: perspective(136px) rotateY(180deg);
            opacity: 0;
          }
        }
        @-o-keyframes cssload-fold-thecube {
          0%,
          10% {
            -o-transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
          }
          25%,
          75% {
            -o-transform: perspective(136px) rotateX(0deg);
            opacity: 1;
          }
          90%,
          100% {
            -o-transform: perspective(136px) rotateY(180deg);
            opacity: 0;
          }
        }
        @-ms-keyframes cssload-fold-thecube {
          0%,
          10% {
            -ms-transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
          }
          25%,
          75% {
            -ms-transform: perspective(136px) rotateX(0deg);
            opacity: 1;
          }
          90%,
          100% {
            -ms-transform: perspective(136px) rotateY(180deg);
            opacity: 0;
          }
        }
        @-webkit-keyframes cssload-fold-thecube {
          0%,
          10% {
            -webkit-transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
          }
          25%,
          75% {
            -webkit-transform: perspective(136px) rotateX(0deg);
            opacity: 1;
          }
          90%,
          100% {
            -webkit-transform: perspective(136px) rotateY(180deg);
            opacity: 0;
          }
        }
        @-moz-keyframes cssload-fold-thecube {
          0%,
          10% {
            -moz-transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
          }
          25%,
          75% {
            -moz-transform: perspective(136px) rotateX(0deg);
            opacity: 1;
          }
          90%,
          100% {
            -moz-transform: perspective(136px) rotateY(180deg);
            opacity: 0;
          }
        }
        .cssload-whirlpool,
        .cssload-whirlpool::before,
        .cssload-whirlpool::after {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 2px solid rgb(204, 204, 204);
          border-left-color: rgb(0, 0, 0);
          border-radius: 2248px;
          -o-border-radius: 2248px;
          -ms-border-radius: 2248px;
          -webkit-border-radius: 2248px;
          -moz-border-radius: 2248px;
        }
        .cssload-whirlpool {
          margin: -56px 0 0 -56px;
          height: 113px;
          width: 113px;
          animation: cssload-rotate 2200ms linear infinite;
          -o-animation: cssload-rotate 2200ms linear infinite;
          -ms-animation: cssload-rotate 2200ms linear infinite;
          -webkit-animation: cssload-rotate 2200ms linear infinite;
          -moz-animation: cssload-rotate 2200ms linear infinite;
        }
        .cssload-whirlpool::before {
          content: '';
          margin: -52px 0 0 -52px;
          height: 99px;
          width: 99px;
          animation: cssload-rotate 2200ms linear infinite;
          -o-animation: cssload-rotate 2200ms linear infinite;
          -ms-animation: cssload-rotate 2200ms linear infinite;
          -webkit-animation: cssload-rotate 2200ms linear infinite;
          -moz-animation: cssload-rotate 2200ms linear infinite;
        }
        .cssload-whirlpool::after {
          content: '';
          margin: -65px 0 0 -65px;
          height: 126px;
          width: 126px;
          animation: cssload-rotate 4400ms linear infinite;
          -o-animation: cssload-rotate 4400ms linear infinite;
          -ms-animation: cssload-rotate 4400ms linear infinite;
          -webkit-animation: cssload-rotate 4400ms linear infinite;
          -moz-animation: cssload-rotate 4400ms linear infinite;
        }
        @keyframes cssload-rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        @-o-keyframes cssload-rotate {
          100% {
            -o-transform: rotate(360deg);
          }
        }
        @-ms-keyframes cssload-rotate {
          100% {
            -ms-transform: rotate(360deg);
          }
        }
        @-webkit-keyframes cssload-rotate {
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @-moz-keyframes cssload-rotate {
          100% {
            -moz-transform: rotate(360deg);
          }
        }
			`}</style>
    </div>
  );
}

export default CubeLoader;
