import React from 'react';

function List(props) {
	const { data, titleColor, titlePosition, dateColor, descriptionColor, descriptionPosition } = props;
	return(
		<>
      {
        data.map(item => {
          return(
            <div key={item.id} className="list-container">
              <p className="list-title">
                {`• ${item.title}`}
                {
                  item.date && 
                  <span className="date-not-breakable">{` | ${item.date}`}</span>
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
                  font-size: 16px;
                  font-weight: bold;
                  margin: 10px 0px 0px 0px;
                  color: ${titleColor || "#fff"};
                  text-align: ${titlePosition || "left"};
                }
                .date-not-breakable{
                  color: ${dateColor || "#000"};
                  white-space: nowrap;
                }
                .list-description{
                  font-size: 15px;
                  margin: 0px 10px 10px 10px;
                  color: ${descriptionColor || "#fff"};
                  text-align: ${descriptionPosition || "justify"};
                }
                @media only screen and (max-width : 768px) {
                  .list-title{
                    font-size: 14px;
                  }
                  .list-description{
                    font-size: 13px;
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