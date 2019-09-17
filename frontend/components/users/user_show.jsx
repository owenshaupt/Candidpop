import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }

  render() {
    if (!this.props.user || !this.props.user.items) {
      return null; // returning react-spinner loader (component)
    }

    const items = this.props.user.items.map(item => {
      return (
        <div key={item.id} className='user-show-index-item-padding'>
          <li key={item.id} className='items-index-li user-show-index-item'>
            <div className='items-index-item'>
              <Link className='item-card-link' to={`/items/${item.id}`}>
                <div className='image-grey-out'>
                  <div className='index-item-photo'>
                    <img width="100%"
                      height="100%"
                      className='photo'
                      src={item.photos[0].photoUrl}
                      alt=""
                    />
                  </div>
                </div>
                <p className='index-item-price'>${item.price}</p>
              </Link>
            </div>
          </li>
        </div>
      )
    });

    return (
      <div className='user-show-page-container'>
        <div className='user-show-page'>
          <div className='user-show-info'>
            <div className='user-show-top'>
              <div className='user-show-profile-pic'>
                <img
                  className='profile-photo'
                  src={this.props.user.profile_pic}
                  alt=""
                />
              </div>
              <div className='user-names'>
                <div className='user-first-last'>
                  <h1 className='user-first'>{this.props.user.first_name}</h1>
                  <h1 className='user-last'>{this.props.user.last_name}</h1>
                </div>
                <div>
                  <h5 className='user-username'>@{this.props.user.username}</h5>
                </div>
              </div>
            </div>
            <div className='user-show-bottom'>
              {/* <div></div> !!for bio if implemented */}
            </div>
          </div>

          <div className='selling-header'>
            <h3>Selling</h3>
          </div>

          <div className='user-items-for-sale'>
            <div className='items-list-container user-items-index-container'>
              <ul className='items-list user-show-items-list'>
                {items}
                <i className='filler-items' aria-hidden="true"></i>
                <i className='filler-items' aria-hidden="true"></i>
                <i className='filler-items' aria-hidden="true"></i>
                <i className='filler-items' aria-hidden="true"></i>
                <i className='filler-items' aria-hidden="true"></i>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default UserShow;