import { connect } from 'react-redux';
import { fetchItems } from '../../actions/item_actions';
import Splash from './splash';

const mapStateToProps = (state) => ({
  items: Object.values(state.entities.items)
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);