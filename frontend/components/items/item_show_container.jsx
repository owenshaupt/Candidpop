import { connect } from 'react-redux';
import { fetchItem, updateItem, deleteItem } from '../../actions/item_actions';
import ItemShow from './item_show';

const mapStateToProps = (state, ownProps) => ({
  item: state.entities.items[ownProps.match.params.itemId],
  user: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchItem: id => dispatch(fetchItem(id)),
  updateItem: item => dispatch(updateItem(item)),
  deleteItem: id => dispatch(deleteItem(id))
});

export default (connect(mapStateToProps, mapDispatchToProps)(ItemShow));