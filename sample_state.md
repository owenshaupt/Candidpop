## Sample State

```js
{
  entities: {
    items: {
      1: {
        id: 1,
        description: "Olympus Stylus Zoom 140 35mm",
        price: 70.00,
        userId: 11,
      },
      2: {
        id: 2,
        description: "Canon Sure Shot Supreme 35mm",
        price: 43.00,
        userId: 25,
      },
      3: {
        id: 3,
        description: "Olympus Stylus 35mm Film Camera ",
        price: 150.00,
        userId: 11,
      }
    },
    users: {
      11: {
        id: 11,
        username: "owenshaupt",
        itemsForSale: [1, 3],
      },
      25: {
        id: 25,
        username: "kobebryant",
        itemsForSale: [2],
      }
    },
    itemLikes: {
      1: {
        likerId: 11,
        itemId: 1,
      },
      2: {
        likerId: 25,
        itemId: 1,
      },
      3: {
        likerId: 25,
        itemId: 3,
      },
    }
    comments: {
      1: {
        likerId: 11,
        itemId: 1,
      },
      2: {
        likerId: 25,
        itemId: 1,
      },
      3: {
        likerId: 25,
        itemId: 3,
      },
    }
    follows: {
      1: {
        followee: 11,
        follower: 25,
      },
    }
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
