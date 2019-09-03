### Users

| Column Name       | Data Type | Details               |
|-------------------|-----------|-----------------------|
| `id`              | integer   | not null, primary key |
| `handle`          | string    | not null, unique      |
| `username`        | string    | not null              |
| `location`        | string    | not null              |
| `img_url`         | string    | not null              |
| `bio`             | string    | not null              |
| `password_digest` | string    | not null              |
| `session_token`   | string    | not null, unique      |
| `created_at`      | datetime  | not null              |
| `updated_at`      | datetime  | not null              |

###### use array of item ids in user or is it necessary if I have an association??

### Items

| Column Name   | Data Type | Details               |
|---------------|-----------|-----------------------|
| `id`          | integer   | not null, primary key |
| `seller_id`   | integer   | not null, foreign key |
| `img_url`     | string    | not null              |
| `description` | string    | not null              |
| `price`       | float     | not null              |
| `created_at`  | datetime  | not null              |
| `updated_at`  | datetime  | not null              |

### Follows

| Column Name   | Data Type | Details               |
|---------------|-----------|-----------------------|
| `id`          | integer   | not null, primary key |
| `followee_id` | integer   | not null, foreign key |
| `follower_id` | string    | not null, foreign key |

# How to go about using a no-cart system?? Single item checkout.