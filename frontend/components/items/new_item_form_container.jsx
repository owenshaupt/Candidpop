import { connect } from 'react-redux';
import NewItemForm from './new_item_form';
import { createItem, clearItems } from '../../actions/item_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.item.errors,
  user: state.session.id,
  formType: "Create Item"
});

const mapDispatchToProps = dispatch => ({
  createItem: (post) => dispatch(createItem(post)),
  clearItems: () => dispatch(clearItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItemForm);