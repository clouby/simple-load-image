import React, { useState, useEffect } from 'react';

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

function ImageLoad({ srcImage }) {
	const [ loaded, setLoaded ] = useState(false);

	const pepHandler = (event) => void setLoaded(!loaded);

	return (
		<React.Fragment>
			<div className="image__wrapper">
				<img src={srcImage} className={`lazy ${loaded && 'loaded'}`} onLoad={pepHandler} alt="cat-random" />
			</div>
		</React.Fragment>
	);
}

export default ImageLoad;
