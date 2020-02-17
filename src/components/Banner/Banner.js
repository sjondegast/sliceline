import React from 'react';

const Banner = ({ children, classNames, background }) => (
	<div style={{ backgroundImage: `url(${background})` }} className={classNames}>
		{children}
	</div>
);

export default Banner;
