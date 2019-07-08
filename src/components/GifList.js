import React from 'react'


const GifList = (props) =>
  <ul>
    {props.gifs.map((gif, index) => {
      return <li key={index}>
        <img alt="You done messed up now!" src={gif.images.original.url} />
      </li>
    })}
  </ul>

export default GifList
