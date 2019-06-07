import React from 'react';
import SkewedSection from './SkewedSection';

function SkewedList(props) {
	const {data, primaryColor, secondaryColor} = props;
  return (
    <section className="se-container">
      {
        data.map(item => {
          return(
						<SkewedSection 
							key={item.id}
							title={item.title} 
							text={item.text}
							odd={item.id%2?true:false}
							primaryColor={primaryColor}
							secondaryColor={secondaryColor}
						/>
          )
        })
      }
			{props.children}

      <style jsx>{`
        .se-container {
          display: block;
          width: 100%;
          overflow: hidden;
          padding-top: 198px;/*150px;*/
        }
      `}</style>
    </section>
  );
}

export default SkewedList;
