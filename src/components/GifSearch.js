import React from 'react'


const GifSearch = props =>


  <form onSubmit={props.handleSubmit} >
    <input type="text" value={props.searchInput} onChange={props.handleInputChange}/>
    <input type='submit' />
  </form>


  export default GifSearch
