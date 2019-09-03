## Sample State

```js
{
  entities: {
    items: {
      1: {
        id: 1,
        sellerId: 11,
        imgUrl: "item-image1.jpg", // link to album for multiple pics?
        description: "Olympus Stylus Zoom 140 35mm",
        price: 70.00,
      },
      2: {
        id: 2,
        sellerId: 25,
        imgUrl: "item-image2.jpg", // link to album for multiple pics?
        description: "Canon Sure Shot Supreme 35mm",
        price: 43.00,
      },
      3: {
        id: 3,
        sellerId: 11,
        imgUrl: "item-image3.jpg", // link to album for multiple pics?
        description: "Olympus Stylus 35mm Film Camera ",
        price: 150.00,
      }
    },
    users: {
      11: {
        id: 11,
        handle: "owensteven",
        username: "Owen Haupt",
        location: "San Francisco, United States",
        imgUrl: "picture1.jpg",
        bio: "love film cameras, check out my store!!",
        itemsForSale: [1, 3], // is this necessary?
      },
      25: {
        id: 25,
        handle: "elir237",
        username: "Eli Ramirez",
        location: "London, England",
        imgUrl: "picture2.jpg",
        bio: "digital cameras are the bomb",
        itemsForSale: [2], // is this necessary?
      }
    },
    follows: {
      1: {
        id: 1,
        followee: 11,
        follower: 25,
      },
    }
    // CART?? ONE ITEM CHECK OUT??
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
  },
  session: { currentUserId: 25 }
}

```
