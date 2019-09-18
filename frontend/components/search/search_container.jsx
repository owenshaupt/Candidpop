import { connect } from 'react-redux';
import Search from './search';
import { fetchItems } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => ({
  items: Object.values(state.entities.items)
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);