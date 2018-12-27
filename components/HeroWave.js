import React from 'react';

function HeroWave(props) {
	return(
		<div className="waveContainer">
      <div className="waveUp"></div>
      <style jsx>{`
        .waveContainer {
          width: 100%;
          height: 100px;
          overflow: hidden;
        }
        .waveDown {
          display: block;
          position: relative;
          height: 40px;
          background: ${props.color};
        }
        .waveDown:before {
          content: "";
          display: block;
          position: absolute;
          border-radius: 100%;
          width: 100%;
          height: 300px;
          background: ${props.background};
          right: -25%;
          top: 20px
        }
        .waveDown:after {
          content: "";
          display: block;
          position: absolute;
          border-radius: 100%;
          width: 100%;
          height: 300px;
          background: ${props.color};
          left: -25%;
          top: -240px;
        }
        .waveUp {
          display: block;
          position: relative;
          height: -40px;
          background: ${props.background};
        }
        .waveUp:before {
          content: "";
          display: block;
          position: absolute;
          border-radius: 100%;
          width: 100%;
          height: 300px;
          background: ${props.color};
          right: -25%;
          top: 20px
        }
        .waveUp:after {
          content: "";
          display: block;
          position: absolute;
          border-radius: 100%;
          width: 100%;
          height: 300px;
          background: ${props.background};
          left: -25%;
          top: -240px;
        }
      `}</style>
    </div>
	);
}

export default HeroWave;