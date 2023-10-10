import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  state = {changeColor: ''}

  render() {
    const {onInputChange} = this.props
    const {changeColor} = this.state

    const onInputChanged = event => {
      if (event.target.value !== '') {
        this.setState({changeColor: 'on-change'})
      }
      onInputChange(event.target.value)
    }
    return (
      <div className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="search-elements">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-img"
            />
          </div>
          <input
            className={`search-bar ${changeColor}`}
            type="search"
            placeholder="Search history"
            onChange={onInputChanged}
          />
        </div>
      </div>
    )
  }
}

export default Navbar
