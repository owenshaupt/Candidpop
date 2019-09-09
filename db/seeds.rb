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