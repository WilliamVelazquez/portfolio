import React from 'react';
import CustomIcon from './CustomIcon';

function CaretIcon(props) {
	const { direction } = props;
  return (
    <CustomIcon {...props}>
    	{
    		(direction==="up") &&
        <path d="M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z"></path>
    	}
    	{
    		(direction==="right") &&
        <path d="M8.578 16.359l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
    	}
    	{
    		(direction==="down") &&
        <path d="M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"></path>
    	}
    	{
    		(direction==="left") &&
        <path d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
    	}
    </CustomIcon>
  )
}

export default CaretIcon;