import React from 'react';

function List(props) {
	const { data, titleColor, titlePosition, descriptionColor, descriptionPosition } = props;
	return(
		<>
      {
        data.map(item => {
          return(
            <div key={item.id} className="container">
              <p className="title">
                {`• ${item.title}`}
                {
                  item.date &&
                  <span className="date-not-breakable">
                    {` | ${item.date}`}
                  </span>
                }
              </p>
              {
                item.description &&
                <p className="description">{item.description}</p>
              }
            </div>
          )
        })
      }

      <style jsx>{`
        .container{
          margin: 0px 10px;
        }
        .date-not-breakable{
          white-space: nowrap;
        }
        .title{
          font-weight: bold;
          margin: 10px 0px 0px 0px;
          color: ${titleColor || "#fff"};
          text-align: ${titlePosition || "left"};
        }
        .description{
          margin: 10px 10px;
          color: ${descriptionColor || "#fff"};
          text-align: ${descriptionPosition || "justify"};
        }
      `}</style>
    </>
	);
}

export default List;