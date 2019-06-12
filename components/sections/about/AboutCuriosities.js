import React from 'react';
import List from '../../ui/List';

function AboutCuriosities(props) {
  const CURIOSITIES_LOVE_DATA = [
		{id:1, title:'To travel 🛬'},
		{id:2, title:'The watches ⌚'},
		{id:3, title:'Classical music 🎼'},
		{id:4, title:'The Italian food 🍝'},
		{id:5, title:'The roller coasters 🎢'},//title:'The Smoothies 🥛🍿🥤🍹'
  ];
  const CURIOSITIES_USED_TO_DATA = [
		{id:1, title:'Swim 🏊‍'},
		{id:2, title:'Teach teamwork 👨‍🏫'},//👨‍💻🤵🏄‍♂️🏄‍♀️🕴🎄🎠🎡🧥👔🎺🎻🔭📽🎥📹💼📅🥝🥥🍎🍣🛰🚀🕰
		{id:3, title:'Practice fencing 🤺'},//🗡⚔🥋
		{id:4, title:'Be an e-Sport player 🎮'},//🕹🎧🏆🤖👾🖱
		{id:5, title:'Create Flash animations 🎬'}//🐱‍👤
  ];
  return(
    <div className="curiosities-container">
      <div className="curiosities-list-container">
        <p className="section-text">I love ...</p>
        <List 
          titleSize="20px"
          titleColor="#fff"
          titleMobileSize="18px"
          data={CURIOSITIES_LOVE_DATA}
        />
      </div>

      <div className="curiosities-list-container">
        <p className="section-text">I used to ...</p>
        <List 
          titleSize="20px"
          titleColor="#fff"
          titleMobileSize="18px"
          data={CURIOSITIES_USED_TO_DATA}
        />
      </div>
      
      <style jsx>{`
        .curiosities-container{
          display: grid;
          padding: 0px 100px;
          justify-items: center;
          grid-column-gap: 20px;
          grid-template-columns: 1fr 1fr;
        }
        .curiosities-list-container{
          padding-left: 20px;
        }
        .section-text{
          font-size: 20px;
          text-align: left;
          margin-left: -20px;
        }
        .section-text:first-letter{
					font-size: 30px;
				}
        @media only screen and (max-width : 768px) {
          .curiosities-container{
            padding: 0px 10px;
          }
          .section-text{
            padding: 0px 10px;
          }
        }
        @media only screen and (max-width: 667px) {
          .curiosities-container{
            justify-items: left;
            grid-template-columns: 1fr;
            padding-left: 20px;
          }
          .section-text{
            font-size: 18px;
          }
        }
			`}</style>
		</div>
  );
}

export default AboutCuriosities;
