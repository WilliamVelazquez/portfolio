import React from 'react';

import RoundedImage from '../../ui/RoundedImage';

function AboutIntro(props) {
  return (
    <React.Fragment>
			<h1 className="about-intro-title">Want to know about William Velazquez?</h1>
      <div className="intro-container">
        <p className="intro-text">In the following section you can find the things that I like to do (hobbies), some others that I used to do and things that I'm planing to do!</p>
        <RoundedImage
          src={"/static/William.jpg"}
          alt={"William Velazquez Photo"}
          size={"250px"}
          mobileSize={"150px"}
        />
      </div>
			<style jsx>{`
				.about-intro-title{
          color: #fff;
					font-size: 60px;
					margin: 20px 0px;
          text-align: center;
        }
        .intro-container{
          display: grid;
          grid-gap: 80px;
          margin: 0px 10px;
          align-items: center;
          justify-content: center;
          grid-template-columns: 1fr min-content;
        }
        .intro-text{
          font-size: 20px;
					margin: 10px 0px;
          /*padding: 0px 60px;*/
          text-align: justify;
        }
        .intro-text:first-letter{
					font-size: 30px;
				}
        @media only screen and (max-width : 768px) {
          .about-intro-title{
            font-size: 40px;
          }
          .intro-container{
            grid-gap: 20px;
          }
          .intro-text{
            padding: 0px 10px;
          }
        }
        @media only screen and (max-width: 667px) {
          .about-intro-title{
            font-size: 30px;
          }
          .intro-container{
            grid-template-columns: 1fr;
          }
        }
			`}</style>
		</React.Fragment>
  );
}

export default AboutIntro;
