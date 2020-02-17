import React from 'react';
import './Image.scss';

const Image = ({ src, alt, classNames }) => (
	<img className={classNames} src={src} alt={alt} />
);

export default Image;

// TODO: add default values for src, with default image
// TODO: build container component, then set the image to allways fill it's parent container
