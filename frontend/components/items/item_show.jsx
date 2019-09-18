import React from 'react';
import { Link } from 'react-router-dom';

class ItemShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.calculateAge = this.calculateAge.bind(this);
  }

  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId)
  }
  
  componentDidUpdate(prevProps) { // when props or state change this will run
    if (prevProps.match.params.itemId !== this.props.match.params.itemId) {
      this.props.fetchItem(this.props.match.params.itemId);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteItem(this.props.item.id)
      .then(() => { this.props.history.push('/items/') })
  }

  calculateAge() {
    const currentTime = Date.now();
    const createTime = new Date(this.props.item.created_at);
    const timeDiff = currentTime - createTime;

    if (timeDiff < 60000) {
      if (Math.floor(timeDiff / 1000) === 1) {
        return '1 SECOND'
      } else {
        return `${Math.floor(timeDiff / 1000)} SECONDS`
      }
    } else if (timeDiff < 3600000) {
      if (Math.floor(timeDiff / 60000) === 1) {
        return '1 MINUTE'
      } else {
        return `${Math.floor(timeDiff / 60000)} MINUTES`
      }
    } else if (timeDiff < 8.64e+7) {
      if (Math.floor(timeDiff / 3600000) === 1) {
        return '1 HOUR'
      } else {
        return `${Math.floor(timeDiff / 3600000)} HOURS`
      }
    } else {
      if (Math.floor(timeDiff / 86400000) === 1) {
        return '1 DAY'
      } else {
      return `${Math.floor(timeDiff / 86400000)} DAYS`
      }
    }
  }

  render() {
    if (!this.props.item || !this.props.item.user || !this.props.item.photos) {
      return null; // returning react-spinner loader (component)
    }

    return (
      <div className='item-show-page-body'>
        <div className='item-show'>

          <div className='item-show-item-photos'>
            <ul>
              {this.props.item.photos.map(photo => {
                return (<li key={photo.photoUrl} className='item-image-container'>
                  <img className='item-image' src={photo.photoUrl}/>
                </li>)
              })}
            </ul>
          </div>

          <div className='item-show-item-info'>
            <Link to={`/${this.props.user}`}>
              <div className='user-profile-photo-container'>
                <img
                  className='profile-photo'
                  src={this.props.item.user_photo ||
                    "assets/empty_user_profile_pic.svg"}
                  alt=""
                />
              </div>
            </Link>

            <div className='item-show-seller'>
              <Link to={`/${this.props.item.seller_id}`}>
                  <div className='item-seller-username'>
                    {this.props.item.user.username}
                  </div>
              </Link>

              <Link to={`/${this.props.item.seller_id}`}>
                <div className='item-seller-location'>
                  {this.props.item.user.location}
                </div>
              </Link>
            </div>

            <div className='item-show-description'>
              {this.props.item.description}
            </div>

            <div className='item-show-table-holder'>
              <table className='item-price-table'>
                <tbody className='item-price-table-body'>
                  <tr className='item-price-table-row'>
                    <th className='item-price-header'>Price</th>
                    <td className='item-price-data'>${this.props.item.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='item-show-listed-time'>
              <table className='item-price-table'>
                <tbody className='item-price-table-body'>
                  <tr className='item-price-table-row item-show-listed-time'>
                    <th className='item-price-header'>LISTED {this.calculateAge()} AGO</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='item-purchase'>
              {(this.props.user === this.props.item.seller_id) ? 
                <div>
                  <Link to={`/items/${this.props.item.id}/edit/`}>
                    <button
                      id='update-item-button'
                      className='button item-purchase-button'>Update item
                    </button>
                  </Link>

                  <button
                    onClick={this.handleDelete}
                    id='delete-item-button'
                    className='button item-purchase-button'
                  >Delete item</button>
                </div> :
                
                <button
                  className='button item-purchase-button'
                  onClick={this.handleDelete}
                >Buy now</button>
              }
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default ItemShow;
