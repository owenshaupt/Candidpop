import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  update(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    )
  }

  handleChange(e) {
    console.log('hitting handle change');
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    console.log(this.state);

    const items = this.props.items



    
    console.log(items);
    // const filteredItems = 


    // const filteredItems = this.props.items.map(item => {
    //   return (
    //     <li>{item.price}</li>
    //   )
    // })

    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          placeholder='Search items...'
          onChange={this.update('query')}
        />

        <ul>
          {/* {filteredItems} */}
        </ul>
      </div>
    );
  }
}
export default Search;