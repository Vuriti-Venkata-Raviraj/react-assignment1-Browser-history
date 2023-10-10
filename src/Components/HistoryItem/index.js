import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  render() {
    const {historyList, onDeleteItem} = this.props
    const onDeleted = () => {
      onDeleteItem(historyList.id)
    }

    return (
      <li className="search-items-container">
        <p className="time">{historyList.timeAccessed}</p>
        <div className="details">
          <img
            src={historyList.logoUrl}
            alt="domain logo"
            className="domain-logo"
          />
          <p className="title">{historyList.title}</p>
          <p className="url">{historyList.domainUrl}</p>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={onDeleted}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </li>
    )
  }
}
export default HistoryItem
