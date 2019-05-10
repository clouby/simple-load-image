import React, { useState } from 'react';

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
