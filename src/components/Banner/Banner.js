import React from 'react';

const Banner = ({ children, classNames, backgroundImage }) => (
	<div style={{ backgroundImage: backgroundImage }} className={classNames}>
		{children}
	</div>
);

export default Banner;
