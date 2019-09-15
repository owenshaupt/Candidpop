import { connect } from 'react-redux';
import NewItemForm from './new_item_form';
import { createItem } from '../../actions/item_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.item.errors,
  formType: "Create Item"
});

const mapDispatchToProps = dispatch => ({
  createItem: (post) => dispatch(createItem(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItemForm);