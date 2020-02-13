import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }

  render() {

    var { isLoaded, items } = this.state

    if (!isLoaded) {
      return <div>Loading....</div>
    } else {
      return (
        <div className="App">
          <h1 className="header">React API Practice</h1>
          <div className="container">
            {items.map(item => (
              <div class="card">
                <h1 key={item.id}>{item.title}</h1>
                <p key={item.id}>{item.description}</p>
              </div>
            ))}
          </div>
      </div>
      )
    }
  }
}

export default App;