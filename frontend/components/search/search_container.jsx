import { connect } from "react-redux";
import Search from "./search";
import {
  searchItems,
  fetchItems,
  clearItems
} from "../../actions/item_actions";

const mapStateToProps = state => ({
  items: Object.values(state.entities.items)
});

const mapDispatchToProps = dispatch => ({
  searchItems: search_id => dispatch(searchItems(search_id)),
  fetchItems: () => dispatch(fetchItems()),
  clearItems: () => dispatch(clearItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
