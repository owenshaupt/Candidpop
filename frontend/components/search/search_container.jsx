import { connect } from 'react-redux';
import Search from './search';
import { searchItems, fetchItems } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => ({
  items: Object.values(state.entities.items)
});

const mapDispatchToProps = dispatch => ({
  searchItems: (search_id) => dispatch(searchItems(search_id)),
  fetchItems: () => dispatch(fetchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);