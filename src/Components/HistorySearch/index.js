import {Component} from 'react'
import './index.css'
import Navbar from '../Navbar/index'
import HistoryItem from '../HistoryItem/index'

class HistorySearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updatedHistoryList: props.initialHistoryList,
      searchInput: '',
    }
  }

  onInputChange = search => {
    console.log(search)
    this.setState({searchInput: search})
  }

  onDeleteItem = id => {
    const {updatedHistoryList} = this.state
    const filteredHistorySearch = updatedHistoryList.filter(
      each => each.id !== id,
    )
    this.setState({
      updatedHistoryList: filteredHistorySearch,
    })
  }

  render() {
    const {updatedHistoryList, searchInput} = this.state
    const filteredHistorySearch = updatedHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <Navbar onInputChange={this.onInputChange} />
        <div className="items-container">
          {filteredHistorySearch.length !== 0 ? (
            <ul className="list-container">
              {filteredHistorySearch.map(each => (
                <HistoryItem
                  historyList={each}
                  onDeleteItem={this.onDeleteItem}
                  key={each.id}
                />
              ))}
            </ul>
          ) : (
            <p className="no-history">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default HistorySearch
