import react from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className="pa2 tc">
        <input
         className="pa3 ba b--green bg lightest-blue"
           type="search"
             placeholder="Search Robots"
             onChange={searchChange}
           />
         </div>
	   );
}

export default SearchBox;
