### `users`

| Column Name       | Data Type | Details               |
| ----------------- | --------- | --------------------- |
| `id`              | integer   | not null, primary key |
| `handle`          | string    | not null, unique      |
| `username`        | string    | not null, indexed     |
| `location`        | string    | not null              |
| `img_url`         | string    | not null              |
| `bio`             | text      | not null              |
| `itemsForSale`    | array     | not null              |
| `password_digest` | string    | not null              |
| `session_token`   | string    | not null, unique      |
| `created_at`      | datetime  | not null              |
| `updated_at`      | datetime  | not null              |

### `items`

| Column Name   | Data Type | Details               |
| ------------- | --------- | --------------------- |
| `id`          | integer   | not null, primary key |
| `seller_id`   | integer   | not null, foreign key |
| `img_url`     | string    | not null              |
| `description` | text      | not null, indexed     |
| `price`       | float     | not null              |
| `sold`        | boolean   | not null              |
| `created_at`  | datetime  | not null              |
| `updated_at`  | datetime  | not null              |

* `seller_id` references a user from the `users`

### `follows`

| Column Name   | Data Type | Details               |
| ------------- | --------- | --------------------- |
| `id`          | integer   | not null, primary key |
| `followee_id` | integer   | not null, foreign key |
| `follower_id` | integer   | not null, foreign key |

* `followee_id` and `follower_id` both represent a user from the `users` table.

### `ratings`

| Column Name | Data Type | Details               |
| ----------- | --------- | --------------------- |
| `id`        | integer   | not null, primary key |
| `buyer_id`  | integer   | not null, foreign key |
| `seller_id` | integer   | not null, foreign key |
| `item_id`   | integer   | not null, foreign key |
| `body`      | body      | not null              |
| `rating`    | integer   | not null              |

* `buyer_id` and `seller_id` both represent a user from the `users` table.
* `item_id` represents and item from the `items` table.