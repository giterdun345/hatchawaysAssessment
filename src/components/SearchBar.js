// import { useState, useEffect } from 'react'

const SearchBar = ({query, setQuery}) => {

  const handleInput= (event)=>{
    // possible to add validation in future here 
    setQuery(event.target.value)
  }
  return ( 
    <form className='search'>
      <input type='text'
             placeholder='Search by name'
             onChange={event => handleInput(event)} 
             value={query}
      />
    </form>
   );
}
 
export default SearchBar;