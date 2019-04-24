import React from 'react';
import './SearchBox.css';

const SearchBox = () => (
	// <div className='searchTop'>
		<div className='searchWrapper'>
			<div className='searchContainer'>
				<div className="searchTitle">
					Unlock nearby vegetarian and vegan dishes. 
					Hand picked for you by the vegiteam. 
					Enter your location now.
				</div>
				{/* <form> */}
					<input type="text" name="postcode" className="searchInput"/>
					<input type="submit" value="SEARCH >" className="searchButton"/>
				{/* </form> */}
			</div>
		</div>
	// </div>
);

export default SearchBox;