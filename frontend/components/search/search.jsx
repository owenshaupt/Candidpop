import React from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import ItemIndexItem from "../items/item_index_item";

const override = css`
  display: block;
  margin: 0 auto;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.searchItems(this.state.query);
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
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchItems(this.state.query);
  }

  render() {
    if (!this.props.items)
      return (
        <div className='page-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={42}
            color={"#282828"}
            loading={true}
          />
        </div>
      );

    const items = this.props.items.map(item => {
      return (
        <li key={item.id} className='items-index-li'>
          <div className='items-index-item'>
            <Link className='item-card-link' to={`/items/${item.id}`}>
              <div className='image-grey-out'>
                <div className='index-item-photo'>
                  <ItemIndexItem type='index' src={item.photos[0].photoUrl} />
                </div>
              </div>
              <p className='index-item-price'>${item.price}</p>
            </Link>
          </div>
        </li>
      );
    });

    return (
      <div>
        <br />
        <div className='items-index-container'>
          <div className='items-list-container'>
            <form className='search-input-form' onSubmit={this.handleSubmit}>
              <input
                className='search-input'
                type='text'
                value={this.state.query}
                placeholder='Search'
                onChange={this.update("query")}
              />
            </form>
            <ul className='items-list'>
              {items}
              <i className='filler-items' aria-hidden='true'></i>
              <i className='filler-items' aria-hidden='true'></i>
              <i className='filler-items' aria-hidden='true'></i>
              <i className='filler-items' aria-hidden='true'></i>
              <i className='filler-items' aria-hidden='true'></i>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
