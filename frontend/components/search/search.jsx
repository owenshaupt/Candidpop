import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.searchItems(this.state.query)
  }

  // Previously I wanted to implement an actively-updating search function,
  // i.e. an index which updates after every key stroke from a user. I did
  // implement this in a working fashion, however if the user typed very
  // quickly, the most recent AJAX requests would result in a faster item
  // fetch (due to, I posit, the smaller amount of return items -- higher
  // query granularity means less returned items) and would return their
  // (filtered) item index faster than the previous result indices. This meant
  // sometimes the last AJAX call to be made did not correspond to the final
  // filtered returned to the wondow.
  // 
  // I might re-explore this in the future using debouncing, but for now I am
  // more than happy with a press-enter-to-search function.
  // -------------------------------------------------------------------------
  // 
  // onChange(e) {                  ---> this triggered from input onChange={}
  //   this.update('query', e)
  // }
  // 
  // update(field, e) {
  //   this.setState({ [field]: e.currentTarget.value },
  //     () => this.props.searchItems(this.state.query));
  // }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchItems(this.state.query);
  }

  render() {
    if (!this.props.items) return null;

    const items = this.props.items.map(item => {
      return (
        <li key={item.id} className='items-index-li'>
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
      )
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            placeholder='Search items...'
            onChange={this.update('query')}
          />
        </form>
        <br/>
        <div className='items-idex-container'>
          <div className='items-list-container'>
            <ul className='items-list'>
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
    );
  }
}
export default Search;