import React from 'react';
import './Banner.scss';

// TODO: refactor Banner to be used in the Modal, make it reusable and use percentage or vh (view height)

const Banner = ({ children, classNames, background }) => (
	<div style={{ backgroundImage: `url(${background})` }} className={classNames}>
		{children}
	</div>
);

export default Banner;
