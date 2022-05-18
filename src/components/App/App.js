import React from 'react'

import './App.css'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { business: [] }
    this.searchYelp = this.searchYelp.bind(this)
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) =>
      this.setState({ business: businesses })
    )
  }
  render() {
    console.log(this.state.business)
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.business} />
      </div>
    )
  }
}

export default App
