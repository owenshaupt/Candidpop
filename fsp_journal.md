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
  - added five (n - 1, where n is max number of columns) i tags with the property `aria-hidden="true"`
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
  - ```js
    const mapStateToProps = (state, ownProps) => ({
      ownProps: ownProps,
      item: state.entities.items[ownProps.match.params.itemId]
    });
    ```
- Then mounting accordingly:
  - ```js
    componentDidMount() {
      this.props.fetchItem(this.props.ownProps.match.params.itemId);
    }
    ```
- Then adjusting the render method:
  - ```js
    render() {
      if (!this.props.item) return null;

      return (
        <div>
          {this.props.item.description}
        </div>

        <div>
          {this.props.item.price}
        </div>

        <div>
          {this.props.item.sold}
        </div>
      );
    };
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
  - `edit_item_form.jsx` :
    - ```js
      formData.append('item[id]', this.props.item.id);
      ```
  - __INCORRECT CODE__ in `items_controller.rb` :
    - ```ruby
      @item = Item.find(params[:id])
      ```
  - __UPDATED TO__ :
    - ```ruby
      @item = Item.find(params[:item][:id])
      ```


note to try tmrw: if index isn't undefined, replace only that one at same index
also ask vanessa

### Monday 09/16/2019 (W13D1)

- __Ask Vanessa about displaying "at least one photo" on item create form
- Finished CRUD update and delete functionality (except the update photos)
  - Still need to add deletion after purchasing item
- Potential future dev:
  - Make media queries specifically for window resizing on index pages (to keep space between index items from getting too large)
- Need to add restriction on submit new item until a photo is selected

### Tuesday 09/17/2019 (W13D2)

- Solved image cropping issue using CSS -thanks Helen!
- Added a custom validation to prevent users from creating an item without any photos uploaded
- Completed profile photos:
  - Added a field on sign up form to accept profile photo
    - Need to seed aws with profile pics!!
  - Displayed profile pics on user show and item show
- Got search up and running with routes help from Vanessa and Jen
  - query strings are not wildcards!!
- Completed preliminary search functionality with live (but slow, ask Vanessa) updating!

### Wednesday 09/18/2019 (W13D3)

- After some thought and testing, instant search has been ruled out for time being
  - Might come back to ive updating, but for now a "reguler" type and submit like Depop implements will be the functionality
- Adjusted the item show and user show views so that profile_pic avatars will only show conditionally:
  - ```ruby
    if @user.profile_pic.attached?
      json.profile_pic url_for(@user.profile_pic)
    end
    ```
- Added item age calculator to item show page
  - Breaks down into seconds, minutes, hours, and days
    - If the magnitude of these units are (rounded down to) 1, non-pluralized test is used
- Added footer with github and linkedin links
- Styled search!
- Search does not return to previous query string when navigating "back" in browser
  - Not super essential but a possible future development
- Fixed coloration problem in Sign Up form:
  - ```ruby
    .select:invalid {
      color: #757575;
    }
    ```
- All above comments for today working on Heroku!!
- Future development idea:
  - On index page, sold items show an overlay and will persist a set amount of time until finally being deleted from database?

### Thursday 09/19/2019 (W13D4)

- Completed splash page with a custom phone image!
- Got spinners working/importing
- Created clearErrors functionality while navigating between `/login` and `/signup`
- Applied spinners to submit buttons across the site ~~excepting the sign in as guest choice~~
  - Added to all submission buttons!
  - Added fail-safe to each button to return to icon-less state if AJAX request is not successful
- Final version (for now) of splash image completed
- Still need to add profile pics to each user
- !! Found bug where I am on Dolly's profile page then I try to navigate to Profile link it does not update the page
  - Due to the wildcard spot not "changing" in terms what the url bar is reading
- Small behavior persists where buttons on login page shift the items beneath a given button when clicked/spinner activates
- Can't see spinner loader for pre-index load

### Friday 09/20/2019 (W13D5)

- Login spinner issue is a behavior specific to Chrome and does not appear in Firefox (FF best browser)
- Fixed userId wildcard issue by adding a user fetch to render specifically a new user:
  - ```js
    handleProfile(e) { 
      e.preventDefault();
      this.props.fetchUser(this.props.currentUser.id)  
      .then(() => this.props.history
        .push(`/${this.props.currentUser.id}`)); 
    }
    ```
- Small issue persists on Country select element where a warning pops up preventing pressing the signup button, i.e. a warning that prevents my own errors from displaying and which looks unpleasant
- Push to Heroku for final version before presenting!

### Monday 10/21/2019

- Back to work on the final MVP after a month of other projects
- Added a note on the user show page to denote an empty store (no items for sale)
- Created follows model, table, view, controller, routes
- Integrated follow buttons
- Built modal for opening followers/following info
  - Passed types through follows (modal) container to decided which section to show first when modal opens
- Modal fades in but doesn't fade out
  - psuedo-selector :active allowed for click-out of modal to initiate fade-out
    - but this also activated a fade-out-fade-in when I clicked on the modal itself (not background)

### Tuesday 10/22/2019

- Implemented sliding bar on follows panel, bolding/sliding now complete
- Utilized classList to switch which attributes the hr element would have
- Solved issue where navigating from user (1) to user (2) didn't refresh page
  - ```js
    componentDidUpdate(prevProps) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
        this.props.closeModal();
        this.props.fetchUser(this.props.match.params.userId);
      }
    }
    ```
- Follows modal/panel is complete except for the follow button itself doesn't have a function
- Had to change Rails association semantics to avoid AssociationTypeMismatch
  - Instead of: 
    ```ruby
    has_many :follows_as_follower,
      primary_key: :id,
      foreign_key: :follower,
      class_name: :Follow
    ```
  - Had to use:
    ```ruby
      has_many :follows_as_follower,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :Follow
    ```
  - Even though `follower` was in fact an integer
- Used object to direct `destroy` action in `follows_controller` instead of an `id`
  - `user_show.jsx` :
    ```js
      /// add about unfollow
    ```
  - `follow_util.js` :
    ```js
      export const deleteFollow = follow => {
        return $.ajax({
          type: "DELETE",
          url: `/api/follows/${follow}`,
          data: follow,
          error: err => console.log(err)
        });
      };
    ```
    - Note the URL does nothing with `${follow}` but without it a custom route would be needed; this way we can keep the RESTful route
  - `follows_controller.rb` :
    ```ruby
      def destroy
        @follow = Follow.find_by(follow_params)
        @follow.destroy
      end

      def follow_params
        params.permit(:follower_id, :followee_id)
      end
    ```

### Wednesday 10/23/2019

- Finished follow functionality
- Had to make a separate action/reducer/slice of state for fetching follows for viweing users in the follows modal
  - Because fetchFollow would interfere with the underlying userShow component, in effect altering the "native" userShow follow button