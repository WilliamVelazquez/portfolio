import React from 'react';

import List from './List';
import TitleBand from './TitleBand';

function SectionList(props) {
  const { title, data, color } = props;
	return(
		<div className="section-list-container">
			<TitleBand 
				rounded={true}
        position="center"
        title={title}
			/>
      <List 
				data={data}
				dateColor={color}
				titleColor={color}
				descriptionColor={color}
			/>
      <style jsx>{`
				.section-list-container{
					margin-top: -10px;
				}
      `}</style>
    </div>
	);
}

export default SectionList;