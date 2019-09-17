import { connect } from 'react-redux';
import EditItemForm from './edit_item_form';
import { fetchItem, updateItem } from '../../actions/item_actions'

const mapStateToProps = (state, ownProps) => ({
  item: state.entities.items[ownProps.match.params.itemId],
  user: state.session.id,
  errors: state.errors.item.errors,
  formType: "Edit Item"
});

const mapDispatchToProps = dispatch => ({
  updateItem: (post) => dispatch(updateItem(post)),
  fetchItem: (id) => dispatch(fetchItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditItemForm);