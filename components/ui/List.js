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
                }
                .list-title{
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
                  margin: 0px 10px 10px 10px;
                  color: ${descriptionColor || "#fff"};
                  text-align: ${descriptionPosition || "justify"};
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