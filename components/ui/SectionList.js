import React from 'react';

import List from './List';
import TitleBand from './TitleBand';

function SectionList(props) {
  const { title, data, color } = props;
	return(
		<div className="">
			<TitleBand 
				rounded={true}
        position="center"
        title={title}
			/>
      <List 
				data={data}
				titleColor={color}
				descriptionColor={color}
			/>
      <style jsx>{`
        
      `}</style>
    </div>
	);
}

export default SectionList;