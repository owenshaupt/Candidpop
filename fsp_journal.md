# Full-stack Project Journal

## Depop Clone : Candidpop

### Tuesday 09/03/2019 (W11D2)

- Created journal!
- Added a ratings table inside the schema which will be rendered into an average rating on the user show page.
- Creted MVPs and general project planning.
- Found that posting items is not actually supported on the web app, only mobile. Will discuss with Vanessa tomorrow.

### Wednesday 09/04/2019 (W11D3)

- Updated wiki using notes from Vanessa
- Created frontend and backend routes pages for the wiki
- Thought about page more:
  - Create item will be own feature implemented using the mobile app as a template
  - Might start a new user off with some "free money" so they can buy an item to illustrate the SOLD overlay functionality

### Wednesday 09/11/2019 (W12D3)

- Completed User Auth styling
- Completed backend CRUD routes
- Began index (feed) grid setup
- After inspecting etsy's site (wow styling is SO much better/readable than depop's), I think I have decided to use flex instead of grid
  - Etsy uses no grid elements but the behavior of the feed (using flex) are *exactly* what I want to do on my site

### Thrusday 09/12/2019 (W12D4)

- Implemented flex and dealt with an issue where the bottom row of items would be spaced as per space-between
  - added five (n - 1, where n is max number of columns) i tags with the property [aria-hidden="true"]
  - these filled any spaces leftover in a given row but if five was too many, the leftovers would be pushed to the very bottom but did not have any height so it did not add any clickable elements to the page
- Decided to not use ItemIndexItem components and instead use linked images
- Completed item creation, still need to make update/delete options
  - these will appear on item show page when the owner is viewing an item
- Still need to make footer
- Still need to create model associations

### Friday 09/13/2019 (W12D5)

- Helen helped me fix the problem I was having last night, detailed here:
  - why is state not persisting on refresh, where as it seems to persist in that way when on the feed?
  - weird refresh behavior
  - full items state comes through on /items/1 after navigating there from /feed/ but not on refresh -- have to do with the times being loaded on the feed? if so, then why does feed get global items state when it mounts when coming from, say, the homepage??
- The fix was mapping in ownProps along with item to the itemShow component:
  - `const mapStateToProps = (state, ownProps) => ({ ownProps: ownProps, item: state.entities.items[ownProps.match.params.itemId] });`
- Then mounting accordingly:
  - `componentDidMount() {this.props.fetchItem(this.props.ownProps.match.params.itemId);}`
- Then adjusting the render method:
  - `render()`
  - `{if (!this.props.item) {return null;}`
  - `return (<div>show!!{this.props.item.description}{this.props.item.price}{this.props.item.sold}</div>);};`
- I'm still not sure why, but the state being passed from mapStateToProps did not contain the glocal items object at the time I wanted it to. Here, the fix is almost creating a delay in when the itemShow component receives the items object (in this case, just a single item).

- Decided to not allow wrapping on item show page, i.e. when window is shrunk past a certain point, the info (right) column will not jump to below the item photos. This might be a future addition I can make with media queries:
  - Removing the info column's left margin once window size is small enough to force the wrapping
  - Changing the images column into a single image carousal upon the same window resize
  
- Need to link username on item show page to user profile
- Need to build item purchasing / index grey-out

- Made a TON of great progress today. Designed item show and completed user upload for images!!
  - Still need to style impage upload to accept multiple files in a way that looks nice (maybe similar to mobile graphics?)

- Noticed that errors from signin page persist through to login page if the link is clicked directly after.
  - The same goes for the opposite direction.

### Saturday 09/14/2019 (W12D6)

- Possible future addition: media queries to more tightly control the sizing of the main feed window
- Completed create item page:
  - Image thumbnails for uploading images in creation form are working properly
    - Maybe initiate a lazy load with fade in transition in the future?
  - Warning renders on new form page telling user they must upload at least one photo, then goes away after one photo has been uploaded
  - Might consider making a pop-up "X" appear after upload so user can remove the photo; definitely an extra thing to add on after remaining MVPs

### Sunday 09/15/2019 (W13D0)

- Worked on update item but ran into very difficult bug where rails controller cannot read `:id` of incoming item. Will ask TAs --> very stumped.
- Fixed this issue, when finding the params in (update) item controller (using id), the id was nested under item params:
  - `edit_item_form.jsx`
    - `formData.append('item[id]', this.props.item.id);`
  - __INCORRECT CODE__ in `items_controller.rb`
    - `@item = Item.find(params[:id])`
  - __UPDATED TO__
    - `@item = Item.find(params[:item][:id])`


note to try tmrw: if index isn't undefined, replace only that one at same index
also ask vanessa

### Monday 09/13/2019 (W13D1)

- Ask Vanessa about displaying "at least one photo" on item create form
