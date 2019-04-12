import React from 'react';
import CustomIcon from './CustomIcon';

function ChevronIcon(props) {
  return (
    <CustomIcon {...props}>
    	{
    		(props.direction==="up") &&
				<path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"></path>
    	}
    	{
    		(props.direction==="right") &&
				<path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"></path>
    	}
    	{
    		(props.direction==="down") &&
				<path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"></path>
    	}
    	{
    		(props.direction==="left") &&
				<path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"></path>
    	}
    </CustomIcon>
  )
}

export default ChevronIcon;