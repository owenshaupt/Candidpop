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

Item.create!(
  seller_id: '1',
  img_url: '123.com',
  description: 'Olympus Infinity Stylus Zoom 140 Deluxe 35mm Film Camera Camera is in EXCELLENT working condition ❕❕❕❕❕❕ Has quartzdate and great zoom ability',
  price: '35.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: '456.org',
  description: 'Ultronic 35mm Film Camera 📷📷📷 Super cute and small camera -great for travel ❕❕❕ Comes with strap and case seen in photos !!! Camera doesn’t require batteries !! Great simple and easy to used film camera !! Film advance and shutter release work great ❕❕❕',
  price: '13.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: 'abc.xyz',
  description: '📦only $12 for 2-day shipping!📦 Beautiful vintage Canon T70 35mm SLR film camera with authentic standard lens, strap and fresh batteries! This one is perfect for beginners and advanced shooters in a pinch in that the “Program” mode sets all of the important settings for you! Light meter also functioning.',
  price: '66.00',
  sold: 'false'
)

Item.create!(
  seller_id: '4',
  img_url: 'def.xyz',
  description: '📦only $12 for 3-day shipping!📦 A classic vintage Canon TLb 35mm SLR film camera with a standard lens, strap, and battery! Shutter tested on all speeds as well as the light meter, this is a much less expensive way to dive into film photography with one of the best brands available. the body is in amazing condition.',
  price: '90.00',
  sold: 'false'
)

Item.create!(
  seller_id: '5',
  img_url: '123.com',
  description: 'CANON SURE SHOT Super mint canon af35mii with box and polaroid side bag! Previous owner stored it for 19 years This is hard to let go. I love this camera but im going full digital Takes 35mm film Looks good as new! Shutter works perfectly, no battery corrosion Battery works perfectly Comes with a 40mm 1.8 lens Great point and shoot camera overall 10/10 supreme vintage condition ACCEPTING REASONABLE OFFERS',
  price: '150.00',
  sold: 'false'
)

Item.create!(
  seller_id: '1',
  img_url: '456.org',
  description: '#PRICEDROP Selling my Cannon EOS Rebel t5 📸 Set includes: - EF-S 18-55mm IS II standard zoom lens - 75-300mm telephoto zoom lens - Battery and charger - Manual book - Bag NOTE: I\'ve been getting dark spots on my photos lately i think it’s sensor dust.. It appears when photos are taken at a higher aperture.. needs to be checked/ cleaned Other than that it\'s in good working condition. No swaps!',
  price: '300.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: 'def.xyz',
  description: 'Sony Alpha A7ii 24 megapixel full-frame digital camera body Has IBIS (in-body image stabilization) Great condition Clean sensor Comes with body cap, charger Firmware version 4.0.1 ',
  price: '800.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: '456.org',
  description: 'Canon EOS 10s 35mm Film SLR Film Camera (Body Only) Perfect for anyone with a digital SLR (with Canon EF lenses). You can swap your lenses over to this camera body. -Auto and Manual Exposure Modes -Easy-to-use single-lens reflex camera -Pop-up flash GUARANTEED WORKING!! NEW BATTERY AND BODY CAP INCLUDED!!',
  price: '85.00',
  sold: 'false'
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

Item.create!(
  seller_id: '1',
  img_url: '123.com',
  description: 'Olympus Infinity Stylus Zoom 140 Deluxe 35mm Film Camera Camera is in EXCELLENT working condition ❕❕❕❕❕❕ Has quartzdate and great zoom ability',
  price: '35.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: '456.org',
  description: 'Ultronic 35mm Film Camera 📷📷📷 Super cute and small camera -great for travel ❕❕❕ Comes with strap and case seen in photos !!! Camera doesn’t require batteries !! Great simple and easy to used film camera !! Film advance and shutter release work great ❕❕❕',
  price: '13.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: 'abc.xyz',
  description: '📦only $12 for 2-day shipping!📦 Beautiful vintage Canon T70 35mm SLR film camera with authentic standard lens, strap and fresh batteries! This one is perfect for beginners and advanced shooters in a pinch in that the “Program” mode sets all of the important settings for you! Light meter also functioning.',
  price: '66.00',
  sold: 'false'
)

Item.create!(
  seller_id: '4',
  img_url: 'def.xyz',
  description: '📦only $12 for 3-day shipping!📦 A classic vintage Canon TLb 35mm SLR film camera with a standard lens, strap, and battery! Shutter tested on all speeds as well as the light meter, this is a much less expensive way to dive into film photography with one of the best brands available. the body is in amazing condition.',
  price: '90.00',
  sold: 'false'
)

Item.create!(
  seller_id: '5',
  img_url: '123.com',
  description: 'CANON SURE SHOT Super mint canon af35mii with box and polaroid side bag! Previous owner stored it for 19 years This is hard to let go. I love this camera but im going full digital Takes 35mm film Looks good as new! Shutter works perfectly, no battery corrosion Battery works perfectly Comes with a 40mm 1.8 lens Great point and shoot camera overall 10/10 supreme vintage condition ACCEPTING REASONABLE OFFERS',
  price: '150.00',
  sold: 'false'
)

Item.create!(
  seller_id: '1',
  img_url: '456.org',
  description: '#PRICEDROP Selling my Cannon EOS Rebel t5 📸 Set includes: - EF-S 18-55mm IS II standard zoom lens - 75-300mm telephoto zoom lens - Battery and charger - Manual book - Bag NOTE: I\'ve been getting dark spots on my photos lately i think it’s sensor dust.. It appears when photos are taken at a higher aperture.. needs to be checked/ cleaned Other than that it\'s in good working condition. No swaps!',
  price: '300.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: 'def.xyz',
  description: 'Sony Alpha A7ii 24 megapixel full-frame digital camera body Has IBIS (in-body image stabilization) Great condition Clean sensor Comes with body cap, charger Firmware version 4.0.1 ',
  price: '800.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: '456.org',
  description: 'Canon EOS 10s 35mm Film SLR Film Camera (Body Only) Perfect for anyone with a digital SLR (with Canon EF lenses). You can swap your lenses over to this camera body. -Auto and Manual Exposure Modes -Easy-to-use single-lens reflex camera -Pop-up flash GUARANTEED WORKING!! NEW BATTERY AND BODY CAP INCLUDED!!',
  price: '85.00',
  sold: 'false'
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

Item.create!(
  seller_id: '1',
  img_url: '123.com',
  description: 'Olympus Infinity Stylus Zoom 140 Deluxe 35mm Film Camera Camera is in EXCELLENT working condition ❕❕❕❕❕❕ Has quartzdate and great zoom ability',
  price: '35.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: '456.org',
  description: 'Ultronic 35mm Film Camera 📷📷📷 Super cute and small camera -great for travel ❕❕❕ Comes with strap and case seen in photos !!! Camera doesn’t require batteries !! Great simple and easy to used film camera !! Film advance and shutter release work great ❕❕❕',
  price: '13.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: 'abc.xyz',
  description: '📦only $12 for 2-day shipping!📦 Beautiful vintage Canon T70 35mm SLR film camera with authentic standard lens, strap and fresh batteries! This one is perfect for beginners and advanced shooters in a pinch in that the “Program” mode sets all of the important settings for you! Light meter also functioning.',
  price: '66.00',
  sold: 'false'
)

Item.create!(
  seller_id: '4',
  img_url: 'def.xyz',
  description: '📦only $12 for 3-day shipping!📦 A classic vintage Canon TLb 35mm SLR film camera with a standard lens, strap, and battery! Shutter tested on all speeds as well as the light meter, this is a much less expensive way to dive into film photography with one of the best brands available. the body is in amazing condition.',
  price: '90.00',
  sold: 'false'
)

Item.create!(
  seller_id: '5',
  img_url: '123.com',
  description: 'CANON SURE SHOT Super mint canon af35mii with box and polaroid side bag! Previous owner stored it for 19 years This is hard to let go. I love this camera but im going full digital Takes 35mm film Looks good as new! Shutter works perfectly, no battery corrosion Battery works perfectly Comes with a 40mm 1.8 lens Great point and shoot camera overall 10/10 supreme vintage condition ACCEPTING REASONABLE OFFERS',
  price: '150.00',
  sold: 'false'
)

Item.create!(
  seller_id: '1',
  img_url: '456.org',
  description: '#PRICEDROP Selling my Cannon EOS Rebel t5 📸 Set includes: - EF-S 18-55mm IS II standard zoom lens - 75-300mm telephoto zoom lens - Battery and charger - Manual book - Bag NOTE: I\'ve been getting dark spots on my photos lately i think it’s sensor dust.. It appears when photos are taken at a higher aperture.. needs to be checked/ cleaned Other than that it\'s in good working condition. No swaps!',
  price: '300.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: 'def.xyz',
  description: 'Sony Alpha A7ii 24 megapixel full-frame digital camera body Has IBIS (in-body image stabilization) Great condition Clean sensor Comes with body cap, charger Firmware version 4.0.1 ',
  price: '800.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: '456.org',
  description: 'Canon EOS 10s 35mm Film SLR Film Camera (Body Only) Perfect for anyone with a digital SLR (with Canon EF lenses). You can swap your lenses over to this camera body. -Auto and Manual Exposure Modes -Easy-to-use single-lens reflex camera -Pop-up flash GUARANTEED WORKING!! NEW BATTERY AND BODY CAP INCLUDED!!',
  price: '85.00',
  sold: 'false'
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

Item.create!(
  seller_id: '1',
  img_url: '123.com',
  description: 'Olympus Infinity Stylus Zoom 140 Deluxe 35mm Film Camera Camera is in EXCELLENT working condition ❕❕❕❕❕❕ Has quartzdate and great zoom ability',
  price: '35.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: '456.org',
  description: 'Ultronic 35mm Film Camera 📷📷📷 Super cute and small camera -great for travel ❕❕❕ Comes with strap and case seen in photos !!! Camera doesn’t require batteries !! Great simple and easy to used film camera !! Film advance and shutter release work great ❕❕❕',
  price: '13.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: 'abc.xyz',
  description: '📦only $12 for 2-day shipping!📦 Beautiful vintage Canon T70 35mm SLR film camera with authentic standard lens, strap and fresh batteries! This one is perfect for beginners and advanced shooters in a pinch in that the “Program” mode sets all of the important settings for you! Light meter also functioning.',
  price: '66.00',
  sold: 'false'
)

Item.create!(
  seller_id: '4',
  img_url: 'def.xyz',
  description: '📦only $12 for 3-day shipping!📦 A classic vintage Canon TLb 35mm SLR film camera with a standard lens, strap, and battery! Shutter tested on all speeds as well as the light meter, this is a much less expensive way to dive into film photography with one of the best brands available. the body is in amazing condition.',
  price: '90.00',
  sold: 'false'
)

Item.create!(
  seller_id: '5',
  img_url: '123.com',
  description: 'CANON SURE SHOT Super mint canon af35mii with box and polaroid side bag! Previous owner stored it for 19 years This is hard to let go. I love this camera but im going full digital Takes 35mm film Looks good as new! Shutter works perfectly, no battery corrosion Battery works perfectly Comes with a 40mm 1.8 lens Great point and shoot camera overall 10/10 supreme vintage condition ACCEPTING REASONABLE OFFERS',
  price: '150.00',
  sold: 'false'
)

Item.create!(
  seller_id: '1',
  img_url: '456.org',
  description: '#PRICEDROP Selling my Cannon EOS Rebel t5 📸 Set includes: - EF-S 18-55mm IS II standard zoom lens - 75-300mm telephoto zoom lens - Battery and charger - Manual book - Bag NOTE: I\'ve been getting dark spots on my photos lately i think it’s sensor dust.. It appears when photos are taken at a higher aperture.. needs to be checked/ cleaned Other than that it\'s in good working condition. No swaps!',
  price: '300.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: 'def.xyz',
  description: 'Sony Alpha A7ii 24 megapixel full-frame digital camera body Has IBIS (in-body image stabilization) Great condition Clean sensor Comes with body cap, charger Firmware version 4.0.1 ',
  price: '800.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: '456.org',
  description: 'Canon EOS 10s 35mm Film SLR Film Camera (Body Only) Perfect for anyone with a digital SLR (with Canon EF lenses). You can swap your lenses over to this camera body. -Auto and Manual Exposure Modes -Easy-to-use single-lens reflex camera -Pop-up flash GUARANTEED WORKING!! NEW BATTERY AND BODY CAP INCLUDED!!',
  price: '85.00',
  sold: 'false'
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

Item.create!(
  seller_id: '1',
  img_url: '123.com',
  description: 'Olympus Infinity Stylus Zoom 140 Deluxe 35mm Film Camera Camera is in EXCELLENT working condition ❕❕❕❕❕❕ Has quartzdate and great zoom ability',
  price: '35.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: '456.org',
  description: 'Ultronic 35mm Film Camera 📷📷📷 Super cute and small camera -great for travel ❕❕❕ Comes with strap and case seen in photos !!! Camera doesn’t require batteries !! Great simple and easy to used film camera !! Film advance and shutter release work great ❕❕❕',
  price: '13.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: 'abc.xyz',
  description: '📦only $12 for 2-day shipping!📦 Beautiful vintage Canon T70 35mm SLR film camera with authentic standard lens, strap and fresh batteries! This one is perfect for beginners and advanced shooters in a pinch in that the “Program” mode sets all of the important settings for you! Light meter also functioning.',
  price: '66.00',
  sold: 'false'
)

Item.create!(
  seller_id: '4',
  img_url: 'def.xyz',
  description: '📦only $12 for 3-day shipping!📦 A classic vintage Canon TLb 35mm SLR film camera with a standard lens, strap, and battery! Shutter tested on all speeds as well as the light meter, this is a much less expensive way to dive into film photography with one of the best brands available. the body is in amazing condition.',
  price: '90.00',
  sold: 'false'
)

Item.create!(
  seller_id: '5',
  img_url: '123.com',
  description: 'CANON SURE SHOT Super mint canon af35mii with box and polaroid side bag! Previous owner stored it for 19 years This is hard to let go. I love this camera but im going full digital Takes 35mm film Looks good as new! Shutter works perfectly, no battery corrosion Battery works perfectly Comes with a 40mm 1.8 lens Great point and shoot camera overall 10/10 supreme vintage condition ACCEPTING REASONABLE OFFERS',
  price: '150.00',
  sold: 'false'
)

Item.create!(
  seller_id: '1',
  img_url: '456.org',
  description: '#PRICEDROP Selling my Cannon EOS Rebel t5 📸 Set includes: - EF-S 18-55mm IS II standard zoom lens - 75-300mm telephoto zoom lens - Battery and charger - Manual book - Bag NOTE: I\'ve been getting dark spots on my photos lately i think it’s sensor dust.. It appears when photos are taken at a higher aperture.. needs to be checked/ cleaned Other than that it\'s in good working condition. No swaps!',
  price: '300.00',
  sold: 'false'
)

Item.create!(
  seller_id: '2',
  img_url: 'def.xyz',
  description: 'Sony Alpha A7ii 24 megapixel full-frame digital camera body Has IBIS (in-body image stabilization) Great condition Clean sensor Comes with body cap, charger Firmware version 4.0.1 ',
  price: '800.00',
  sold: 'false'
)

Item.create!(
  seller_id: '3',
  img_url: '456.org',
  description: 'Canon EOS 10s 35mm Film SLR Film Camera (Body Only) Perfect for anyone with a digital SLR (with Canon EF lenses). You can swap your lenses over to this camera body. -Auto and Manual Exposure Modes -Easy-to-use single-lens reflex camera -Pop-up flash GUARANTEED WORKING!! NEW BATTERY AND BODY CAP INCLUDED!!',
  price: '85.00',
  sold: 'false'
)
