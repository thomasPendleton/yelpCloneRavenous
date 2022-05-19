//Make addresses clickable and have them open the address in Google Maps in a new tab
//Clicking on a different sorting option automatically requeries the Yelp API, rather than having to manually click “Let’s Go” again
//Implement your own type of sort (for example, by entering a distance or radius from a central location)
//Allow you to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking
//Add autocompletion of addresses to the “Location” input
//Make images clickable and have them open the business’ website in a new tab

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
