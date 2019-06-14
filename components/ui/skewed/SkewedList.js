import React from 'react';

import SkewedSection from './SkewedSection';
import ChevronIcon from '../../icons/ChevronIcon';
import { scrollToId } from '../../../utils/functions';

function SkewedList(props) {
	const {data, titleColor, contentColor, primaryColor, secondaryColor} = props;
  return (
    <section className="se-container">
      {
        data &&
        //index starts at 0
        data.map((item, index) => {
          return(
						<SkewedSection 
							key={item.id}
							id={`skewedSection${item.id}`}
							title={item.title} 
							text={item.text}
              odd={!(index%2)?true:false}
              titleColor={titleColor||null}
              contentColor={contentColor||null}
							primaryColor={primaryColor}
							secondaryColor={secondaryColor}
						>
              {item.content}
              <a 
                title={index+1>=data.length?'Back to the top':''}//`${data[index+1].title} section`
                className={`skewed-section-caret-down${index+1>=data.length?" inverse":""}`}
                onClick={()=>scrollToId(index+1>=data.length?`skewedSection${data[0].id}`:`skewedSection${item.id+1}`,!(index%2)?30:-80)}//90
              >
                <ChevronIcon 
                  direction={index+1>=data.length?'up':'down'} 
                  color={"#fff"} 
                  hoverColor={item.id%2?secondaryColor:primaryColor} 
                  size={32}
                />
              </a>
            </SkewedSection>
          )
        })
      }
			

      <style jsx>{`
        .se-container {
          display: block;
          width: 100%;
          overflow: hidden;
          padding-top: 198px;/*150px;*/
        }
        .skewed-section-caret-down{
          display: grid;
          /*bottom: -10px;*/
          bottom: -30px;
          margin: 0 auto;
          cursor: pointer;
          position: relative;
          justify-items: center;
          transition-duration: 0.4s;
          -o-transition-duration: 0.4s; /* Opera */
          -moz-transition-duration: 0.4s; /* Mozilla */
          -webkit-transition-duration: 0.4s; /* Safari */
        }
        .skewed-section-caret-down:hover{
          /*bottom: -20px;*/
          bottom: -40px;
        }
        .skewed-section-caret-down.inverse:hover{
          bottom: -20px;
        }
        @media only screen and (max-width : 768px) {
          .skewed-section-caret-down{
            bottom: -10px;
          }
          .skewed-section-caret-down:hover{
            bottom: -20px;
          }
          .skewed-section-caret-down.inverse:hover{
            bottom: 0px;
          }
        }
      `}</style>
    </section>
  );
}

export default SkewedList;
