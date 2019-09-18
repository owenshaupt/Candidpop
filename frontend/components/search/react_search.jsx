import React from "react";
import Search from "react-search";

class ReactSearch extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  componentDidMount() {
    this.props.fetchItems();
    const itemDescriptions = [];

    for (let i = 0; i < this.props.items.length; i++) {
      const item = this.props.items[i];
      itemDescriptions.push({id: [item.id], value: [item.description]})
    }

    this.setState({itemsDs: itemDescriptions});
  }

  HiItems(items) {
    // console.log(items)
  }

  render() {
    let items = [];
    
    

    debugger
    
    return (
      <div>
        <Search items={items} />

        <Search items={items}
          placeholder='Pick your language'
          maxSelected={3}
          multiple={true}
          onItemsChanged={this.HiItems.bind(this)}
        />
      </div>
    )
  }
}

export default ReactSearch;