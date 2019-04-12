import React from 'react';
import './BackgroundBox.css';

const BackgroundBox = () => (
	<div className='backgroundBox'>
		{/* <img src='../../img/hero.jpg'></img> */}
		<img src={require('../../img/hero.jpg')} className='backgroundImage'/>
	</div>
);

export default BackgroundBox;
