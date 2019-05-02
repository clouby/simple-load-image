import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

const ImageLoad = React.lazy(() => import('./ImageLoad'));

function App() {
	const [ cats, setCats ] = useState([]);

	useEffect(() => {
		(async () => {
			const cats = await (await fetch(
				'https://api.thecatapi.com/v1/images/search?limit=10&mime_types=gif'
			)).json();
			setCats(cats);
		})();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					<React.Suspense fallback={<div>loading...</div>}>
						{cats.map(({ url }, index) => {
							console.log(url);
							return <ImageLoad key={index} srcImage={url} />;
						})}
					</React.Suspense>
				</div>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
