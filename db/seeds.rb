# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Item.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("items")

u01 = User.create!(
  username: 'guest',
  password: 'password',
  first_name: 'guest_info',
  last_name: 'guest_info',
  email: 'guest_info',
  location: 'guest_location',
)

u02 = User.create!(
  username: 'owen',
  password: '123123',
  first_name: 'Owen',
  last_name: 'Haupt',
  email: 'owen@owen.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/02.jpg')
u02.profile_pic.attach(io: file, filename: '02.jpg')

u03 = User.create!(
  username: 'dolly',
  password: '123456',
  first_name: 'Dolly',
  last_name: 'Shin',
  email: 'dolly@dolly.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/01.jpg')
u03.profile_pic.attach(io: file, filename: '01.jpg')

u04 = User.create!(
  username: 'alia',
  password: '123456',
  first_name: 'Alia',
  last_name: 'Shafi',
  email: 'alia@alia.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/03.jpg')
u04.profile_pic.attach(io: file, filename: '03.jpg')

u05 = User.create!(
  username: 'ernie',
  password: '123456',
  first_name: 'Ernest',
  last_name: 'Man',
  email: 'ernie@ernie.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/04.jpg')
u05.profile_pic.attach(io: file, filename: '04.jpg')

u06 = User.create!(
  username: 'jeff',
  password: '123456',
  first_name: 'Jeffrey',
  last_name: 'Bui',
  email: 'jeffrey@jeffrey.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/05.jpg')
u06.profile_pic.attach(io: file, filename: '05.jpg')

u07 = User.create!(
  username: 'lwin',
  password: '123456',
  first_name: 'Lwin',
  last_name: 'Ye',
  email: 'lwin@lwin.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/06.jpg')
u07.profile_pic.attach(io: file, filename: '06.jpg')

u08 = User.create!(
  username: 'ronil',
  password: '123456',
  first_name: 'Ronil',
  last_name: 'Bhatia',
  email: 'ronil@ronil.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/07.jpg')
u08.profile_pic.attach(io: file, filename: '07.jpg')

u09 = User.create!(
  username: 'mineru',
  password: 'ilovekiyo',
  first_name: 'Mineru',
  last_name: 'Suzuki',
  email: 'mineru@mineru.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/08.jpg')
u09.profile_pic.attach(io: file, filename: '08.jpg')

u10 = User.create!(
  username: 'kevin',
  password: '123456',
  first_name: 'Kevin',
  last_name: 'Kaminski',
  email: 'kevin@kevin.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/09.jpg')
u10.profile_pic.attach(io: file, filename: '09.jpg')

u11 = User.create!(
  username: 'lina',
  password: '123456',
  first_name: 'Lina',
  last_name: 'Kherchi',
  email: 'lina@lina.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/10.jpg')
u11.profile_pic.attach(io: file, filename: '10.jpg')

u15 = User.create!(
  username: 'taehoon',
  password: '123456',
  first_name: 'Taehoon',
  last_name: 'Song',
  email: 'taetae@taetae.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/11.jpg')
u15.profile_pic.attach(io: file, filename: '11.jpg')

u12 = User.create!(
  username: 'vanessa',
  password: '123456',
  first_name: 'Vanessa',
  last_name: 'Chen',
  email: 'vanessa@vanessa.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/12.jpg')
u12.profile_pic.attach(io: file, filename: '12.jpg')

u13 = User.create!(
  username: 'drew',
  password: 'hamlover9',
  first_name: 'Eric',
  last_name: 'Dew',
  email: 'eric@r.dew',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/13.jpg')
u13.profile_pic.attach(io: file, filename: '13.jpg')

u14 = User.create!(
  username: 'elir237',
  password: '123456',
  first_name: 'Eli',
  last_name: 'Ramirez',
  email: 'eli@aim.com',
  location: 'United States',
)
file = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/profile-pics/14.jpg')
u14.profile_pic.attach(io: file, filename: '14.jpg')

i01 = Item.create!(
  seller_id: '6',
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
# upload files then add photos key in item, then have variable names in an array

i02 = Item.create!(
  seller_id: '2',
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
  seller_id: '4',
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
  seller_id: '4',
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
  seller_id: '12',
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
  seller_id: '12',
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
  seller_id: '13',
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
  seller_id: '5',
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
  seller_id: '10',
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
  seller_id: '10',
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
  seller_id: '13',
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
  seller_id: '7',
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
  seller_id: '13',
  description: 'Sony FE 28mm f/2 full-frame wide-angle prime lens Works with full-frame and APS-C E-mount cameras Great condition, clean glass Comes with front and back caps, and lens hood',
  price: '380.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Q00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Q01.jpg')
i18.photos.attach(io: file1, filename: 'Q00.jpg')
i18.photos.attach(io: file2, filename: 'Q01.jpg')

i19 = Item.create!(
  seller_id: '8',
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

i22 = Item.create!(
  seller_id: '3',
  description: 'Chinon cm-5 film camera TESTED AND WORKING EXCELLENT! Lens- 50mm 1.4 Takes any 35mm film',
  price: '100.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/U00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/U01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/U02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/U03.jpg')
i22.photos.attach(io: file1, filename: 'U00.jpg')
i22.photos.attach(io: file2, filename: 'U01.jpg')
i22.photos.attach(io: file3, filename: 'U02.jpg')
i22.photos.attach(io: file4, filename: 'U03.jpg')

i23 = Item.create!(
  seller_id: '3',
  description: 'Olympus Stylus Epic DLX film camera TESTED AND WORKING EXCELLENT! Lens: 35mm 2.8 Takes 35mm film',
  price: '300.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/V00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/V01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/V02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/V03.jpg')
i23.photos.attach(io: file1, filename: 'V00.jpg')
i23.photos.attach(io: file2, filename: 'V01.jpg')
i23.photos.attach(io: file3, filename: 'V02.jpg')
i23.photos.attach(io: file4, filename: 'V03.jpg')

i24 = Item.create!(
  seller_id: '3',
  description: 'Olympus Stylus epic zoom 80 film camera Tested and working excellent Takes 35mm film',
  price: '100.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/W00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/W01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/W02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/W03.jpg')
i24.photos.attach(io: file1, filename: 'W00.jpg')
i24.photos.attach(io: file2, filename: 'W01.jpg')
i24.photos.attach(io: file3, filename: 'W02.jpg')
i24.photos.attach(io: file4, filename: 'W03.jpg')

i25 = Item.create!(
  seller_id: '3',
  description: 'Polaroid 600 instax film camera TESTED AND WORKING EXCELLENT! Takes 600 film',
  price: '40.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/X00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/X01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/X02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/X03.jpg')
i25.photos.attach(io: file1, filename: 'X00.jpg')
i25.photos.attach(io: file2, filename: 'X01.jpg')
i25.photos.attach(io: file3, filename: 'X02.jpg')
i25.photos.attach(io: file4, filename: 'X03.jpg')

i26 = Item.create!(
  seller_id: '3',
  description: 'Minolta supreme freedom zoom film camera Tested and working excellent Takes 35mm film',
  price: '35.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Y00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Y01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Y02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Y03.jpg')
i26.photos.attach(io: file1, filename: 'Y00.jpg')
i26.photos.attach(io: file2, filename: 'Y01.jpg')
i26.photos.attach(io: file3, filename: 'Y02.jpg')
i26.photos.attach(io: file4, filename: 'Y03.jpg')

i27 = Item.create!(
  seller_id: '3',
  description: 'Olympus infinity zoom 105 film camera Tested and working excellent Takes 35mm film',
  price: '40.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Z00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Z01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Z02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/Z03.jpg')
i27.photos.attach(io: file1, filename: 'Z00.jpg')
i27.photos.attach(io: file2, filename: 'Z01.jpg')
i27.photos.attach(io: file3, filename: 'Z02.jpg')
i27.photos.attach(io: file4, filename: 'Z03.jpg')

i28 = Item.create!(
  seller_id: '14',
  description: 'Sears KS Super II (SR2000) SLR film camera. Circa 1981. Takes 35mm film. Has a 50mm, f/2.0 AUTO Sears lens and a 70-210mm zoom lens. Has a vertically moving electronically-controlled, metal focal plane shutter with speeds from 1 to 1/500 sec, self-timer, split-image focusing, TTL full open exposure meter, and an ISO range of 12-3200. Cleaned and checked by me to be in excellent working condition. Zoom lens has fungus, but shouldn’t affect the images too much. Can be professionally cleaned. Photo example in slide 4 by Jim Grey. Tags / / iso wishlist looking for camera vintage antique tech Polaroid film cameras old cute instant swap in search of wanted photography photo trendy',
  price: '85.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AA00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AA01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AA02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AA03.jpg')
i28.photos.attach(io: file1, filename: 'AA00.jpg')
i28.photos.attach(io: file2, filename: 'AA01.jpg')
i28.photos.attach(io: file3, filename: 'AA02.jpg')
i28.photos.attach(io: file4, filename: 'AA03.jpg')

i29 = Item.create!(
  seller_id: '14',
  description: 'Kodak Stereo rangefinder stereo film camera. Circa 1954. Takes 35mm film. Takes a pair of 23x24mm format pictures at each exposure with dual Kodak Anaston 35mm, f/3.5 lenses. Has an aperture speed range from 1/25 to 1/200 plus B. The viewfinder is between the two lenses with a spirit level visible through it. This is Kodak’s last stereo camera. Comes with case, strap, and lens cap. Makes AWESOME 3D pictures. Check lomography for a tutorial. Cleaned and checked by me to be in excellent working condition. Photo example in slide 4 by paulmaccca. Tags / / iso wishlist looking for camera vintage antique tech Polaroid film cameras old cute instant swap in search of wanted photography photo trendy',
  price: '200.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AB00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AB01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AB02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AB03.jpg')
i29.photos.attach(io: file1, filename: 'AB00.jpg')
i29.photos.attach(io: file2, filename: 'AB01.jpg')
i29.photos.attach(io: file3, filename: 'AB02.jpg')
i29.photos.attach(io: file4, filename: 'AB03.jpg')

i30 = Item.create!(
  seller_id: '11',
  description: 'Nikon Nikomat (Nikkormat) EL w/ 28mm Nikkor lens, 35mm SLR film camera w/ UV filter, lens hood, shutter release cable, and free shipping. Features: -SLR camera -28mm f3.5 Nikkor lens -working battery -neck strap -UV haze filter -lens hood -shutter release cable -free shipping Let’s clear this up, the Nikomat is the same as the Nikkormat but was only sold in Japan, which makes this one more rare. Back in the early 70’s Nikon’s line of SLR’s only included their pro F series, the Nikomat were their consumer cameras, imagine that this camera is a Nikon FE with a different name. The EL used an electronic shutter which includes an Aperture priority mode. This camera is in excellent shape and everything is fully functional.',
  price: '180.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AC00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AC01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AC02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AC04.jpg')
i30.photos.attach(io: file1, filename: 'AC00.jpg')
i30.photos.attach(io: file2, filename: 'AC01.jpg')
i30.photos.attach(io: file3, filename: 'AC02.jpg')
i30.photos.attach(io: file4, filename: 'AC04.jpg')

i31 = Item.create!(
  seller_id: '9',
  description: 'Olympus Stylus Zoom DLX. Extremely good condition. • Zooms from 35-70mm • Has Data stamp which works • Come with original Olympus Strap • Comes with brand new Panasonic battery 🔋 NOT: Nikon Pentax Film Camera Yashica T4 Olympus FujiFilm 35mm Holga Polaroid Sigma Sony Minolta Leica Contax T2 Foulplay Stray Rats Supreme Palace Fucking Awesome Bianca Chandon Fuct Utmost Burma Stussy Dertbag FTP Photography Range Finder Portra 400 Lomography Mamiya Carl Zeiss Ektar 100 Ektachrome Ricoh Hasselblad',
  price: '113.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AD00.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AD02.jpg')
i31.photos.attach(io: file1, filename: 'AD00.jpg')
i31.photos.attach(io: file3, filename: 'AD02.jpg')

i32 = Item.create!(
  seller_id: '9',
  description: 'Canon Sure Shot 35mm Camera!! • Comes with batteries & strap • All functions of the camera work • Comes with Samsonite Camera side bag NOT: Nikon Pentax Film Camera Yashica T4 Olympus FujiFilm 35mm Holga Polaroid Sigma Sony Minolta Leica Contax T2 Foulplay Stray Rats Supreme Palace Fucking Awesome Bianca Chandon Fuct Utmost Burma Stussy Dertbag FTP Photography Range Finder Portra 400 Lomography Mamiya Carl Zeiss Ektar 100 Ektachrome Ricoh Hasselblad',
  price: '135.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AE00.jpg')
i32.photos.attach(io: file1, filename: 'AE00.jpg')

i33 = Item.create!(
  seller_id: '11',
  description: 'RARE Vintage / antique 1940’s Voigtlander Vito II 35mm analog folding bellows Film Camera ! Shutter still works great and is accurate as well as the Aperture is smooth ! World renown Voigtlander German Brand Camera, Sharp Color-Skopar 50mm f3.5 lens (allows for proper colors when color film is used), Fully manual, Super clean copy (practically looks new), And Comes with a snazzy genuine leather case ! Technician tested and working great ! Please see photos ! Please view my other listings for bundle discounts or combined shipping ! Enjoy!',
  price: '89.99',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AF00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AF01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AF02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AF03.jpg')
i33.photos.attach(io: file1, filename: 'AF00.jpg')
i33.photos.attach(io: file2, filename: 'AF01.jpg')
i33.photos.attach(io: file3, filename: 'AF02.jpg')
i33.photos.attach(io: file4, filename: 'AF03.jpg')

i34 = Item.create!(
  seller_id: '5',
  description: 'Canon Sure Shot 105 zoom date 35mm point and shoot camera 🌶 Spice up what’s last of your summer by getting a 35mm cam! What do you got to lose?! 38-105mm zoom lens! Autofocus, so you never get a blurry shot! Straight from the 90s to your door! Message us for any details. Free shipping Tested and guaranteed working! Takes 35mm film Takes one 3.0 volt CR2 123 battery',
  price: '44.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AG00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AG01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AG02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AG03.jpg')
i34.photos.attach(io: file1, filename: 'AG00.jpg')
i34.photos.attach(io: file2, filename: 'AG01.jpg')
i34.photos.attach(io: file3, filename: 'AG02.jpg')
i34.photos.attach(io: file4, filename: 'AG03.jpg')

i35 = Item.create!(
  seller_id: '5',
  description: 'Canon Rebel EOS K2 35mm Film SLR Film Camera (Body Only) Perfect for someone who has been shooting Canon DSLRs but wanted to get into shooting film (will not work with EF-S Lenses) -Automatic or manual focus for new and skilled photographers alike -Autoexposure plus 5 preset exposure modes -Easy-to-use single-lens reflex camera -Automatic pop-up flash GUARANTEED WORKING!!',
  price: '75.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AH00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AH01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AH02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AH03.jpg')
i35.photos.attach(io: file1, filename: 'AH00.jpg')
i35.photos.attach(io: file2, filename: 'AH01.jpg')
i35.photos.attach(io: file3, filename: 'AH02.jpg')
i35.photos.attach(io: file4, filename: 'AH03.jpg')

i36 = Item.create!(
  seller_id: '5',
  description: 'Mamiya 500TL DTL 35mm Film SLR w/ 50mm F/2 Lens All functions except light meter are working properly on this camera. However the glass is the prism is a bit dusty and scratched, but this wont effect the photo at all. Guaranteed Working!',
  price: '125.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AI00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AI01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AI02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AI03.jpg')
i36.photos.attach(io: file1, filename: 'AI00.jpg')
i36.photos.attach(io: file2, filename: 'AI01.jpg')
i36.photos.attach(io: file3, filename: 'AI02.jpg')
i36.photos.attach(io: file4, filename: 'AI03.jpg')

i37 = Item.create!(
  seller_id: '5',
  description: 'Pentax K1000 35mm Film SLR w/ 50mm f/2 lens This is a great first camera for a student, or for a seasoned photographer! Body is a little scratched up but nothing major. All camera functions are working properly and glass is clean and scratch/fungus free Includes: -Pentax K-1000 Camera Body -50mm f2 Lens(no lens cap, sorry) -Fresh Battery',
  price: '178.00',
  sold: 'false'
)
file1 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AJ00.jpg')
file2 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AJ01.jpg')
file3 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AJ02.jpg')
file4 = open('https://candidpop-seeds.s3-us-west-1.amazonaws.com/item-images/AJ03.jpg')
i37.photos.attach(io: file1, filename: 'AJ00.jpg')
i37.photos.attach(io: file2, filename: 'AJ01.jpg')
i37.photos.attach(io: file3, filename: 'AJ02.jpg')
i37.photos.attach(io: file4, filename: 'AJ03.jpg')