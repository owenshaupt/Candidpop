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
