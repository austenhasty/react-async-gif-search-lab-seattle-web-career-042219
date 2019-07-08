import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifs: [],
      searchInput: ''
    }
  }

  handleInputChange= (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const query = this.state.searchInput
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(gifs => this.setState({gifs: gifs.data}, ()=> console.log(this.state.gifs)))
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} searchInput={this.state.searchInput} handleInputChange={this.handleInputChange}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
