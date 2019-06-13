import React from 'react';

function List(props) {
	const { data, breakableTitle=true, titleWeight, titleColor, titleSize, titlePosition, dateColor, descriptionColor, descriptionSize, descriptionPosition, titleTabletSize, descriptionTabletSize, titleMobileSize, descriptionMobileSize } = props;
	return(
		<>
      {
        data.map(item => {
          return(
            <div key={item.id} className="list-container">
              <p className="list-title">
                {
                  breakableTitle?
                  `• ${item.title}`
                  :
                  <span className="not-breakable">{`• ${item.title}`}</span>
                }
                {
                  item.date && 
                  <span className="list-date not-breakable">{` | ${item.date}`}</span>
                }
              </p>
              {
                item.description &&
                <p className="list-description">{item.description}</p>
              }
              <style jsx>{`
                .list-container{
                  margin: 0px 10px;
                  white-space: pre-line;
                }
                .list-title{
                  font-weight: ${titleWeight||'bold'};
                  margin: 10px 0px 0px 0px;
                  color: ${titleColor||"#fff"};
                  font-size: ${titleSize||"16px"};
                  text-align: ${titlePosition||"left"};
                }
                .list-date{
                  color: ${dateColor||"#000"};
                }
                .not-breakable{
                  white-space: nowrap;
                }
                .list-description{
                  margin: 0px 10px 10px 10px;
                  color: ${descriptionColor||"#fff"};
                  font-size: ${descriptionSize||"15px"};
                  text-align: ${descriptionPosition||"justify"};
                }
                @media only screen and (max-width : 768px) {
                  .list-title{
                    font-size: ${titleTabletSize||"14px"};
                  }
                  .list-description{
                    font-size: ${descriptionTabletSize||"13px"};
                  }
                }
                @media only screen and (max-width : 667px) {
                  .list-title{
                    font-size: ${titleMobileSize||"14px"};
                  }
                  .list-description{
                    font-size: ${descriptionMobileSize||"13px"};
                  }
                }
              `}</style>
            </div>
          )
        })
      }
    </>
	);
}

export default List;