
# Candidpop
---

[Visit Candidpop](https://candidpop.herokuapp.com)

Candidpop is an upcoming reslling app designed to help photographers buy and sell gear, easily. Post items to sell and browse items being sold by others!

The project was built in 10 days, and a list of additions will be added in the future.

----

## Technologies

Candidpop is built on a Ruby on Rails backend and utilizes a PostgreSQL database which interfaces with Rails ActiveStorage and Amazon S3. The frontend is built using React and Redux as a single-page application. Components update dynamically following user input.

---

## Features

- Users can browse a feed of items for sale
- Users can add their own items to sell on the marketplace
  - Users can upload images for their for-sale items which are displayed on the marketplace feed
- Users can search the marketplace against item descriptions provied by sellers
- Users can update their listings and delete an existing item from the marketplace
- Users can purchase other items, thus removing them from the marketplace

---

### Add Item Form

- The Add Item form is accessible to a logged-in user. Here, a user can upload (up to four) images and provide some information for the item they are selling. As users select photo files from their device, thumbnails will render dynamically, even if a different photo is selected after the fact.

```javascript
// return HTML
<div className='item-photo-holder'>
  <img
    className='upload-photo'
    src={(!!this.state.file1) ? (this.state.file1Url) : (
      window.uploadItemIconURL)
    }
    alt=""
  />
  <input type="file" onChange={this.handleFile1}/>
</div>

// handleFile1 handles both the file to be sent to S3 and the frontend thumbnail
handleFile1(e) {
  this.setState({file1: e.currentTarget.files});
  this.setState({file1Url: URL.createObjectURL(e.target.files[0])}); // from Egor Egorvov @650egor on Medium
}
```

---

### Sign Up Form

---
