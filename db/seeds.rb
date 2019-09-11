# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  username: 'guest',
  password: 'password',
  first_name: 'guest_info',
  last_name: 'guest_info',
  email: 'guest_info',
  location: 'guest_info',
  bio: 'guest_info'
)

User.create!(
  username: 'owen',
  password: '123123',
  first_name: 'owen',
  last_name: 'haupt',
  email: 'owen@owen.com',
  location: 'United States',
  bio: 'creator/ceo candidpop'
)

User.create!(
  username: 'dolly',
  password: '123456',
  first_name: 'dolly',
  last_name: 'shin',
  email: 'dolly@dolly.com',
  location: 'United States',
  bio: 'got her fonts working!!'
)

Item.create!(
  seller_id: '4',
  img_url: 'abc.xyz',
  description: 'Yashica Lynx 500F Rangefinder Film Camera Has some wear to it as shown in photos, but has been used and works perfectly Comes with one roll of 35mm colored Fujifilm open to offers',
  price: '40.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: 'def.xyz',
  description: 'canon sureshot 80 tele vintage 35mm film camera + bag 8/10 condition, film-tested (see last photo) this is one of my favorite camera models out right now! i have had 7 or 8 of the 80 tele & they all have been amazing & this one was no different! incredibly durable, insanely sharp & everything works flawlessly including the flash & the zoom!! huge come up!! also comes with a cool bag! **batteries included $50 or best offer ships in 1-2 business days w/ tracking *if you message me before purchasing, i can throw in an entire box of film for only $10 extra(normally $15-20) or 2 boxes for $20!! please message me with any questions or offers you might have!',
  price: '50.00',
  sold: 'false'
)