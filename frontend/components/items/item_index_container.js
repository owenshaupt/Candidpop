import { connect } from 'react-redux';
import { fetchItems, deleteItem } from '../../actions/item_actions';
import ItemIndex from './item_index';

const mapStateToProps = (state) => ({
  items: Object.values(state.entities.items)
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  deleteItem: id => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);