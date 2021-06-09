// import { useState, useEffect } from 'react'

const SearchBar = ({query, setQuery}) => {

  return ( 
    <form className='search'>
      <input type='text'
             placeholder='Search by name'
             onChange={event => setQuery(event.target.value)} 
             value={query}
      />
    </form>
   );
}
 
export default SearchBar;