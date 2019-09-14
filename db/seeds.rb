# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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

i01 = Item.create!(
  seller_id: '3',
  description: 'Canon ae1 works Film Camera',
  price: '100.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/A00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/A01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/A02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/A03.jpg')
i01.photos.attach(io: file1, filename: 'A00.jpg')
i01.photos.attach(io: file2, filename: 'A01.jpg')
i01.photos.attach(io: file3, filename: 'A02.jpg')
i01.photos.attach(io: file4, filename: 'A03.jpg')

i02 = Item.create!(
  seller_id: '3',
  description: 'canon sureshot 80 tele vintage 35mm film camera + bag 8/10 condition, film-tested (see last photo) this is one of my favorite camera models out right now! i have had 7 or 8 of the 80 tele & they all have been amazing & this one was no different! incredibly durable, insanely sharp & everything works flawlessly including the flash & the zoom!! huge come up!! also comes with a cool bag! **batteries included $50 or best offer ships in 1-2 business days w/ tracking *if you message me before purchasing, i can throw in an entire box of film for only $10 extra(normally $15-20) or 2 boxes for $20!! please message me with any questions or offers you might have!',
  price: '50.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/P00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/P01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/P02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/P03.jpg')
i02.photos.attach(io: file1, filename: 'P00.jpg')
i02.photos.attach(io: file2, filename: 'P01.jpg')
i02.photos.attach(io: file3, filename: 'P02.jpg')
i02.photos.attach(io: file4, filename: 'P03.jpg')

i03 = Item.create!(
  seller_id: '3',
  description: 'Canon EOS Rebel GII 35m Camera. Body only',
  price: '15.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/B00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/B01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/B02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/B03.jpg')
i03.photos.attach(io: file1, filename: 'B00.jpg')
i03.photos.attach(io: file2, filename: 'B01.jpg')
i03.photos.attach(io: file3, filename: 'B02.jpg')
i03.photos.attach(io: file4, filename: 'B03.jpg')

i04 = Item.create!(
  seller_id: '2',
  description: 'Yashica Lynx 500F Rangefinder Film Camera Has some wear to it as shown in photos, but has been used and works perfectly Comes with one roll of 35mm colored Fujifilm open to offers',
  price: '40.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/C00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/C01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/C02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/C03.jpg')
i04.photos.attach(io: file1, filename: 'C00.jpg')
i04.photos.attach(io: file2, filename: 'C01.jpg')
i04.photos.attach(io: file3, filename: 'C02.jpg')
i04.photos.attach(io: file4, filename: 'C03.jpg')

i05 = Item.create!(
  seller_id: '2',
  description: 'Canon EOS RebelG 35mm SLR Camera. Great condition, some small scuffs on grip but nothing major! Comes with 35-85mm lens! Great combo👏🏼',
  price: '40.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/D00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/D01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/D02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/D03.jpg')
i05.photos.attach(io: file1, filename: 'D00.jpg')
i05.photos.attach(io: file2, filename: 'D01.jpg')
i05.photos.attach(io: file3, filename: 'D02.jpg')
i05.photos.attach(io: file4, filename: 'D03.jpg')

i06 = Item.create!(
  seller_id: '2',
  description: 'kodak vr35 k80 vintage 35mm film camera 10/10 condition, film-tested (see last photo) this is an awesome camera to carry around & just capture moments on! not a lot of different settings to mess with, so it’s incredibly simple to use! you just point & shoot!! it’s got a nice weight to it as well, feels durable, & it’s so easy to just slip into your pocket! incredibly sharp prime lens, so convenient & makes great images! a must cop!! $45 or best offer ships in 1-2 business days w/ tracking *for an extra $10, i can throw in a full box of film(retails at $17-25)!! or 2 boxes for $20! just shoot me a message before you purchase & i will change the price (: **or i can throw TWO full boxes of film for only $20 more!!** please message me with any questions or offers you might have!',
  price: '45.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/E00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/E01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/E02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/E03.jpg')
i06.photos.attach(io: file1, filename: 'E00.jpg')
i06.photos.attach(io: file2, filename: 'E01.jpg')
i06.photos.attach(io: file3, filename: 'E02.jpg')
i06.photos.attach(io: file4, filename: 'E03.jpg')

i07 = Item.create!(
  seller_id: '2',
  description: 'Olympus Infinity Stylus Zoom 140 Deluxe 35mm Film Camera Camera is in EXCELLENT working condition ❕❕❕❕❕❕ Has quartzdate and great zoom ability',
  price: '35.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/F00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/F01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/F02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/F03.jpg')
i07.photos.attach(io: file1, filename: 'F00.jpg')
i07.photos.attach(io: file2, filename: 'F01.jpg')
i07.photos.attach(io: file3, filename: 'F02.jpg')
i07.photos.attach(io: file4, filename: 'F03.jpg')

i08 = Item.create!(
  seller_id: '2',
  description: 'Ultronic 35mm Film Camera 📷📷📷 Super cute and small camera -great for travel ❕❕❕ Comes with strap and case seen in photos !!! Camera doesn’t require batteries !! Great simple and easy to used film camera !! Film advance and shutter release work great ❕❕❕',
  price: '13.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/G00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/G01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/G02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/G03.jpg')
i08.photos.attach(io: file1, filename: 'G00.jpg')
i08.photos.attach(io: file2, filename: 'G01.jpg')
i08.photos.attach(io: file3, filename: 'G02.jpg')
i08.photos.attach(io: file4, filename: 'G03.jpg')

i09 = Item.create!(
  seller_id: '2',
  description: '📦only $12 for 2-day shipping!📦 Beautiful vintage Canon T70 35mm SLR film camera with authentic standard lens, strap and fresh batteries! This one is perfect for beginners and advanced shooters in a pinch in that the “Program” mode sets all of the important settings for you! Light meter also functioning.',
  price: '66.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/H00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/H01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/H02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/H03.jpg')
i09.photos.attach(io: file1, filename: 'H00.jpg')
i09.photos.attach(io: file2, filename: 'H01.jpg')
i09.photos.attach(io: file3, filename: 'H02.jpg')
i09.photos.attach(io: file4, filename: 'H03.jpg')

i10 = Item.create!(
  seller_id: '2',
  description: '📦only $12 for 3-day shipping!📦 A classic vintage Canon TLb 35mm SLR film camera with a standard lens, strap, and battery! Shutter tested on all speeds as well as the light meter, this is a much less expensive way to dive into film photography with one of the best brands available. the body is in amazing condition.',
  price: '90.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/I00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/I01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/I02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/I03.jpg')
i10.photos.attach(io: file1, filename: 'I00.jpg')
i10.photos.attach(io: file2, filename: 'I01.jpg')
i10.photos.attach(io: file3, filename: 'I02.jpg')
i10.photos.attach(io: file4, filename: 'I03.jpg')

i11 = Item.create!(
  seller_id: '2',
  description: '#PRICEDROP Selling my Cannon EOS Rebel t5 📸 Set includes: - EF-S 18-55mm IS II standard zoom lens - 75-300mm telephoto zoom lens - Battery and charger - Manual book - Bag NOTE: I\'ve been getting dark spots on my photos lately i think it’s sensor dust.. It appears when photos are taken at a higher aperture.. needs to be checked/ cleaned Other than that it\'s in good working condition. No swaps!',
  price: '300.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/J00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/J01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/J02.jpg')
i11.photos.attach(io: file1, filename: 'J00.jpg')
i11.photos.attach(io: file2, filename: 'J01.jpg')
i11.photos.attach(io: file3, filename: 'J02.jpg')

i12 = Item.create!(
  seller_id: '2',
  description: 'Sony Alpha A7ii 24 megapixel full-frame digital camera body Has IBIS (in-body image stabilization) Great condition Clean sensor Comes with body cap, charger Firmware version 4.0.1',
  price: '800.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/K00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/K01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/K02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/K03.jpg')
i12.photos.attach(io: file1, filename: 'K00.jpg')
i12.photos.attach(io: file2, filename: 'K01.jpg')
i12.photos.attach(io: file3, filename: 'K02.jpg')
i12.photos.attach(io: file4, filename: 'K03.jpg')

i13 = Item.create!(
  seller_id: '2',
  description: 'Canon EOS 10s 35mm Film SLR Film Camera (Body Only) Perfect for anyone with a digital SLR (with Canon EF lenses). You can swap your lenses over to this camera body. -Auto and Manual Exposure Modes -Easy-to-use single-lens reflex camera -Pop-up flash GUARANTEED WORKING!! NEW BATTERY AND BODY CAP INCLUDED!!',
  price: '85.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/L00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/L01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/L02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/L03.jpg')
i13.photos.attach(io: file1, filename: 'L00.jpg')
i13.photos.attach(io: file2, filename: 'L01.jpg')
i13.photos.attach(io: file3, filename: 'L02.jpg')
i13.photos.attach(io: file4, filename: 'L03.jpg')

i14 = Item.create!(
  seller_id: '2',
  description: 'Konica Hexanon AR mount 40mm 1.8 lens with free shipping!!! The Konica 40mm 1.8 is unique for being a 1.8 at a focal length of 40mm, but it’s also got exception build quality and is super sharp! The aperture is snappy and smooth and in excellent condition, scratch and fungus free. Also included is a lens cap and rear cap.',
  price: '50.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/M00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/M01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/M02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/M03.jpg')
i14.photos.attach(io: file1, filename: 'M00.jpg')
i14.photos.attach(io: file2, filename: 'M01.jpg')
i14.photos.attach(io: file3, filename: 'M02.jpg')
i14.photos.attach(io: file4, filename: 'M03.jpg')

i15 = Item.create!(
  seller_id: '2',
  description: 'Pentax SMC 50mm f2 lens with free shipping!!! The Pentax 50mm f2 is legendary and for me it’s among the top three of my favorite lenses. Compact, shape, and renders beautifully. This lens is in excellent condition with a snappy aperture, scratch and fungus free.',
  price: '35.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/N00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/N01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/N02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/N03.jpg')
i15.photos.attach(io: file1, filename: 'N00.jpg')
i15.photos.attach(io: file2, filename: 'N01.jpg')
i15.photos.attach(io: file3, filename: 'N02.jpg')
i15.photos.attach(io: file4, filename: 'N03.jpg')

i16 = Item.create!(
  seller_id: '2',
  description: 'Neewer 35mm f/1.7 Manual Prime Fixed Lens ** For Sony E-Mount Digital Mirrorless Cameras NEX 3 NEX 3N NEX 5 NEX 5T NEX 5R NEX 6 7 A5000, A5100, A6000, A6100,A6300 A6500 A9.**',
  price: '70.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/O00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/O01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/O02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/O03.jpg')
i16.photos.attach(io: file1, filename: 'O00.jpg')
i16.photos.attach(io: file2, filename: 'O01.jpg')
i16.photos.attach(io: file3, filename: 'O02.jpg')
i16.photos.attach(io: file4, filename: 'O03.jpg')

i17 = Item.create!(
  seller_id: '2',
  description: 'CANON SURE SHOT Super mint canon af35mii with box and polaroid side bag! Previous owner stored it for 19 years This is hard to let go. I love this camera but im going full digital Takes 35mm film Looks good as new! Shutter works perfectly, no battery corrosion Battery works perfectly Comes with a 40mm 1.8 lens Great point and shoot camera overall 10/10 supreme vintage condition ACCEPTING REASONABLE OFFERS',
  price: '150.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/03.jpg')
i17.photos.attach(io: file1, filename: '00.jpg')
i17.photos.attach(io: file2, filename: '01.jpg')
i17.photos.attach(io: file3, filename: '02.jpg')
i17.photos.attach(io: file4, filename: '03.jpg')

i18 = Item.create!(
  seller_id: '2',
  description: 'Sony FE 28mm f/2 full-frame wide-angle prime lens Works with full-frame and APS-C E-mount cameras Great condition, clean glass Comes with front and back caps, and lens hood',
  price: '380.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Q00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Q01.jpg')
i18.photos.attach(io: file1, filename: 'Q00.jpg')
i18.photos.attach(io: file2, filename: 'Q01.jpg')

i19 = Item.create!(
  seller_id: '2',
  description: 'Vintage Soligor C/D Zoom+Macro 75-250mm 1:4.5 Lens for 35mm Film Cameras. Please do your research and make sure this will fit your camera before you buy! Lens is in good condition, it just needs some cleaning!',
  price: '7.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/R00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/R01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/R02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/R03.jpg')
i19.photos.attach(io: file1, filename: 'R00.jpg')
i19.photos.attach(io: file2, filename: 'R01.jpg')
i19.photos.attach(io: file3, filename: 'R02.jpg')
i19.photos.attach(io: file4, filename: 'R03.jpg')

i20 = Item.create!(
  seller_id: '2',
  description: 'Canon FTb QL - 35mm SLR Comes with f/1.8 50mm lens Very solid single lens reflex camera, great for beginners, features such as changeable ISO, Shutter speed, & aperture',
  price: '100.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/S00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/S01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/S02.jpg')
i20.photos.attach(io: file1, filename: 'S00.jpg')
i20.photos.attach(io: file2, filename: 'S01.jpg')
i20.photos.attach(io: file3, filename: 'S02.jpg')

i21 = Item.create!(
  seller_id: '2',
  description: '📦 FREE US SHIPPING 📦 Canon TLb film camera with three lenses: Canon ENS FD 50mm 1:1.8, Vivitar MC Macro Zoom 28-200mm -:3.5-5.3 and an MC Soligor U/S Zoom Macro 28-80mm 1:3.3-4.5 lens. And one focal MC 2X converter compatible with the lenses. The camera passed battery powered inspections for basic electronic and mechanical functions. The light meter is functioning. The lenses are clean, no scratches or fungus. Smooth rotations and aperture movements. The camera has new light seals. The camera was tested with a flash for shutter synchronization. -includes one brand new 625A battery -uses 35mm film -includes two lens filters -includes two front lens caps and one lens back cap -includes a hard leather case for the Soligor lens -includes a colorful camera shoulder strap -see sample photo',
  price: '250.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/T00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/T01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/T02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/T03.jpg')
i21.photos.attach(io: file1, filename: 'T00.jpg')
i21.photos.attach(io: file2, filename: 'T01.jpg')
i21.photos.attach(io: file3, filename: 'T02.jpg')
i21.photos.attach(io: file4, filename: 'T03.jpg')

# Item.create!(
#   seller_id: '2',
#   description: 'canon sureshot 80 tele vintage 35mm film camera + bag 8/10 condition, film-tested (see last photo) this is one of my favorite camera models out right now! i have had 7 or 8 of the 80 tele & they all have been amazing & this one was no different! incredibly durable, insanely sharp & everything works flawlessly including the flash & the zoom!! huge come up!! also comes with a cool bag! **batteries included $50 or best offer ships in 1-2 business days w/ tracking *if you message me before purchasing, i can throw in an entire box of film for only $10 extra(normally $15-20) or 2 boxes for $20!! please message me with any questions or offers you might have!',
#   price: '50.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Olympus Infinity Stylus Zoom 140 Deluxe 35mm Film Camera Camera is in EXCELLENT working condition ❕❕❕❕❕❕ Has quartzdate and great zoom ability',
#   price: '35.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Ultronic 35mm Film Camera 📷📷📷 Super cute and small camera -great for travel ❕❕❕ Comes with strap and case seen in photos !!! Camera doesn’t require batteries !! Great simple and easy to used film camera !! Film advance and shutter release work great ❕❕❕',
#   price: '13.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: '📦only $12 for 2-day shipping!📦 Beautiful vintage Canon T70 35mm SLR film camera with authentic standard lens, strap and fresh batteries! This one is perfect for beginners and advanced shooters in a pinch in that the “Program” mode sets all of the important settings for you! Light meter also functioning.',
#   price: '66.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: '📦only $12 for 3-day shipping!📦 A classic vintage Canon TLb 35mm SLR film camera with a standard lens, strap, and battery! Shutter tested on all speeds as well as the light meter, this is a much less expensive way to dive into film photography with one of the best brands available. the body is in amazing condition.',
#   price: '90.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'CANON SURE SHOT Super mint canon af35mii with box and polaroid side bag! Previous owner stored it for 19 years This is hard to let go. I love this camera but im going full digital Takes 35mm film Looks good as new! Shutter works perfectly, no battery corrosion Battery works perfectly Comes with a 40mm 1.8 lens Great point and shoot camera overall 10/10 supreme vintage condition ACCEPTING REASONABLE OFFERS',
#   price: '150.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: '#PRICEDROP Selling my Cannon EOS Rebel t5 📸 Set includes: - EF-S 18-55mm IS II standard zoom lens - 75-300mm telephoto zoom lens - Battery and charger - Manual book - Bag NOTE: I\'ve been getting dark spots on my photos lately i think it’s sensor dust.. It appears when photos are taken at a higher aperture.. needs to be checked/ cleaned Other than that it\'s in good working condition. No swaps!',
#   price: '300.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Sony Alpha A7ii 24 megapixel full-frame digital camera body Has IBIS (in-body image stabilization) Great condition Clean sensor Comes with body cap, charger Firmware version 4.0.1 ',
#   price: '800.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Canon EOS 10s 35mm Film SLR Film Camera (Body Only) Perfect for anyone with a digital SLR (with Canon EF lenses). You can swap your lenses over to this camera body. -Auto and Manual Exposure Modes -Easy-to-use single-lens reflex camera -Pop-up flash GUARANTEED WORKING!! NEW BATTERY AND BODY CAP INCLUDED!!',
#   price: '85.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Yashica Lynx 500F Rangefinder Film Camera Has some wear to it as shown in photos, but has been used and works perfectly Comes with one roll of 35mm colored Fujifilm open to offers',
#   price: '40.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'canon sureshot 80 tele vintage 35mm film camera + bag 8/10 condition, film-tested (see last photo) this is one of my favorite camera models out right now! i have had 7 or 8 of the 80 tele & they all have been amazing & this one was no different! incredibly durable, insanely sharp & everything works flawlessly including the flash & the zoom!! huge come up!! also comes with a cool bag! **batteries included $50 or best offer ships in 1-2 business days w/ tracking *if you message me before purchasing, i can throw in an entire box of film for only $10 extra(normally $15-20) or 2 boxes for $20!! please message me with any questions or offers you might have!',
#   price: '50.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Olympus Infinity Stylus Zoom 140 Deluxe 35mm Film Camera Camera is in EXCELLENT working condition ❕❕❕❕❕❕ Has quartzdate and great zoom ability',
#   price: '35.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Ultronic 35mm Film Camera 📷📷📷 Super cute and small camera -great for travel ❕❕❕ Comes with strap and case seen in photos !!! Camera doesn’t require batteries !! Great simple and easy to used film camera !! Film advance and shutter release work great ❕❕❕',
#   price: '13.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: '📦only $12 for 2-day shipping!📦 Beautiful vintage Canon T70 35mm SLR film camera with authentic standard lens, strap and fresh batteries! This one is perfect for beginners and advanced shooters in a pinch in that the “Program” mode sets all of the important settings for you! Light meter also functioning.',
#   price: '66.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: '📦only $12 for 3-day shipping!📦 A classic vintage Canon TLb 35mm SLR film camera with a standard lens, strap, and battery! Shutter tested on all speeds as well as the light meter, this is a much less expensive way to dive into film photography with one of the best brands available. the body is in amazing condition.',
#   price: '90.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'CANON SURE SHOT Super mint canon af35mii with box and polaroid side bag! Previous owner stored it for 19 years This is hard to let go. I love this camera but im going full digital Takes 35mm film Looks good as new! Shutter works perfectly, no battery corrosion Battery works perfectly Comes with a 40mm 1.8 lens Great point and shoot camera overall 10/10 supreme vintage condition ACCEPTING REASONABLE OFFERS',
#   price: '150.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: '#PRICEDROP Selling my Cannon EOS Rebel t5 📸 Set includes: - EF-S 18-55mm IS II standard zoom lens - 75-300mm telephoto zoom lens - Battery and charger - Manual book - Bag NOTE: I\'ve been getting dark spots on my photos lately i think it’s sensor dust.. It appears when photos are taken at a higher aperture.. needs to be checked/ cleaned Other than that it\'s in good working condition. No swaps!',
#   price: '300.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Sony Alpha A7ii 24 megapixel full-frame digital camera body Has IBIS (in-body image stabilization) Great condition Clean sensor Comes with body cap, charger Firmware version 4.0.1 ',
#   price: '800.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Canon EOS 10s 35mm Film SLR Film Camera (Body Only) Perfect for anyone with a digital SLR (with Canon EF lenses). You can swap your lenses over to this camera body. -Auto and Manual Exposure Modes -Easy-to-use single-lens reflex camera -Pop-up flash GUARANTEED WORKING!! NEW BATTERY AND BODY CAP INCLUDED!!',
#   price: '85.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Yashica Lynx 500F Rangefinder Film Camera Has some wear to it as shown in photos, but has been used and works perfectly Comes with one roll of 35mm colored Fujifilm open to offers',
#   price: '40.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'canon sureshot 80 tele vintage 35mm film camera + bag 8/10 condition, film-tested (see last photo) this is one of my favorite camera models out right now! i have had 7 or 8 of the 80 tele & they all have been amazing & this one was no different! incredibly durable, insanely sharp & everything works flawlessly including the flash & the zoom!! huge come up!! also comes with a cool bag! **batteries included $50 or best offer ships in 1-2 business days w/ tracking *if you message me before purchasing, i can throw in an entire box of film for only $10 extra(normally $15-20) or 2 boxes for $20!! please message me with any questions or offers you might have!',
#   price: '50.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Olympus Infinity Stylus Zoom 140 Deluxe 35mm Film Camera Camera is in EXCELLENT working condition ❕❕❕❕❕❕ Has quartzdate and great zoom ability',
#   price: '35.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Ultronic 35mm Film Camera 📷📷📷 Super cute and small camera -great for travel ❕❕❕ Comes with strap and case seen in photos !!! Camera doesn’t require batteries !! Great simple and easy to used film camera !! Film advance and shutter release work great ❕❕❕',
#   price: '13.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: '📦only $12 for 2-day shipping!📦 Beautiful vintage Canon T70 35mm SLR film camera with authentic standard lens, strap and fresh batteries! This one is perfect for beginners and advanced shooters in a pinch in that the “Program” mode sets all of the important settings for you! Light meter also functioning.',
#   price: '66.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: '📦only $12 for 3-day shipping!📦 A classic vintage Canon TLb 35mm SLR film camera with a standard lens, strap, and battery! Shutter tested on all speeds as well as the light meter, this is a much less expensive way to dive into film photography with one of the best brands available. the body is in amazing condition.',
#   price: '90.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'CANON SURE SHOT Super mint canon af35mii with box and polaroid side bag! Previous owner stored it for 19 years This is hard to let go. I love this camera but im going full digital Takes 35mm film Looks good as new! Shutter works perfectly, no battery corrosion Battery works perfectly Comes with a 40mm 1.8 lens Great point and shoot camera overall 10/10 supreme vintage condition ACCEPTING REASONABLE OFFERS',
#   price: '150.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: '#PRICEDROP Selling my Cannon EOS Rebel t5 📸 Set includes: - EF-S 18-55mm IS II standard zoom lens - 75-300mm telephoto zoom lens - Battery and charger - Manual book - Bag NOTE: I\'ve been getting dark spots on my photos lately i think it’s sensor dust.. It appears when photos are taken at a higher aperture.. needs to be checked/ cleaned Other than that it\'s in good working condition. No swaps!',
#   price: '300.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Sony Alpha A7ii 24 megapixel full-frame digital camera body Has IBIS (in-body image stabilization) Great condition Clean sensor Comes with body cap, charger Firmware version 4.0.1 ',
#   price: '800.00',
#   sold: 'false'
# )

# Item.create!(
#   seller_id: '2',
#   description: 'Canon EOS 10s 35mm Film SLR Film Camera (Body Only) Perfect for anyone with a digital SLR (with Canon EF lenses). You can swap your lenses over to this camera body. -Auto and Manual Exposure Modes -Easy-to-use single-lens reflex camera -Pop-up flash GUARANTEED WORKING!! NEW BATTERY AND BODY CAP INCLUDED!!',
#   price: '85.00',
#   sold: 'false'
# )
