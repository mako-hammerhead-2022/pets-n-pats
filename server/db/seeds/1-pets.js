/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // await knex('pets').insert({
  //   id: 1,
  //   userId: 'auth0|something',
  //   name: 'Orel',
  //   bio: 'Ameliorated dedicated extranet',
  //   animal: 'dog',
  //   points: 0,
  // })
  return await knex('pets').insert([
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Aileen',
      bio: 'Fully-configurable intermediate focus group',
      imageUrl:
        '["https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg", "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4","https://www.northogdencity.com/sites/default/files/styles/full_node_primary/public/imageattachments/police/page/1971/golden-retriever-puppy.jpg?itok=3B6EF9n4","https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/03/GettyImages-512366437-e1583519258231-920x598.jpg"]',
      animal: 'dog',
      points: 11,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Giralda',
      bio: 'Customizable holistic conglomeration',
      imageUrl:
        '["https://cdn2.thecatapi.com/images/MTg0NjE0OQ.jpg","https://www.jwoodvet.co.uk/wp-content/uploads/2018/07/green-eyed-cat-1.jpg","https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=85&auto=format&fit=max&s=21718fb1379918410ea10054db89f665","https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s800-c85.webp"]',
      animal: 'cat',
      points: 17,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Letizia',
      bio: 'Open-architected systemic groupware',
      imageUrl:
        '["https://images.dog.ceo/breeds/tervuren/yoda_in_garden.jpg","https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg","https://www.thesprucepets.com/thmb/EhX1rvgbEhzPlTQe-fE1o6R44OA=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/most-obedient-dog-breeds-4796922-hero-4440a0ccec0e42c98c5e58821fc9f165.jpg","https://live-production.wcms.abc-cdn.net.au/ff1221fbfdb2fe163fdda15df5f77676?impolicy=wcms_crop_resize&cropH=394&cropW=700&xPos=0&yPos=37&width=862&height=485"]',
      animal: 'dog',
      points: 83,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Dominique',
      bio: 'Reverse-engineered intermediate data-warehouse',
      imageUrl:
        '["https://cdn2.thecatapi.com/images/b5TojsXM1.jpg", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=980:*", "https://img.rasset.ie/0014a2a1-800.jpg", "https://s01.sgp1.cdn.digitaloceanspaces.com/article/51036-cwobnirfka-1580816618.jpeg"]',
      animal: 'cat',
      points: 190,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Bob',
      bio: "For you I'll create, Artistic works of poo, since You save them in bags",
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_6205.jpg","https://imageio.forbes.com/specials-images/imageserve/5db4c7b464b49a0007e9dfac/Photo-of-Maltese-dog/960x0.jpg?format=jpg&width=960","https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/609c031f84017b001f224989.jpg","https://www.rd.com/wp-content/uploads/2022/01/GettyImages-912084898-e1641834261695.jpg"]',
      animal: 'dog',
      points: 2500,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Bodhi',
      bio: 'Focused for four-legged fur friends fun, frolicking fast forever from fantastically frightening flickering ferns',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/unknown2.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARWiBjeYxqWzj_B_iCYW5SCXM52BNBZNUxKL8280D108-4bSN0xEfEIHhYJVDShTQmCg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_55mEv1xu6EPOe27D7dPAnFj985TNqmPo3hxPHreNz9dLt5VTEAm8sMXxfE-8r5243aA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBPsu96Zjq40MTjexUZchzTXmqvY8DXt2qSx3fY2fVM1zGbYmmu2NwBtzKqbQufCPgDM&usqp=CAU"]',
      animal: 'dog',
      points: 2500,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Bean',
      bio: 'It is 2am, time to lick your face until you pat me',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/76640151_417269875631782_438672244328103936_n.jpg","https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop","https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F09%2Fcat-giving-high-five-1215118956-2000.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnJ1EveCuAlbs_CbCrTS1dgZy6NdMdVMhA0L9H83faiZUUJxMdu9Yfn9gg5toDKwc9rI&usqp=CAU"]',
      animal: 'cat',
      points: 50,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Soxis',
      bio: "One step closer and I'll show you what-for",
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/20200827_223755.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwXJAjZGY2F0vSjkRjSTf1tcFcM8ByAp-OW7sBVyQmDKPVJow8nT1SpMIOwZh1KioYqc&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4Ew8sdgeQvJVvK-OM7y2mWyCfOJ5PodIlQgUdcfnyZycDiOn9kXB8eh_zI7pZThyAns&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4Ew8sdgeQvJVvK-OM7y2mWyCfOJ5PodIlQgUdcfnyZycDiOn9kXB8eh_zI7pZThyAns&usqp=CAU"]',
      animal: 'cat',
      points: 100,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Missy',
      bio: 'Hold fast to dreams, For if dreams die, Life is a broken-winged bird, That cannot fly. Hold fast to dreams, For when dreams go, Life is a barren field, Frozen with snow.',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_20220429_151501.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg0lHXBoIG5b1cuNeH1hWvoiMz7qT7JtY67BML4mpStkn2lKnmDLdYNvlZPnGGj2uKBA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE482L3P_P3-11STL8zHfHOU9GAsfEIQMthxkeTKIHgrfqUNFZAoMnslVGWLGxFIzdHtE&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgd868PzuX772hTfPdXOn0CVuRNpfiykptgK7124yjz-Oy0guI6GXm7SjbHqokHMb97aY&usqp=CAU"]',
      animal: 'cat',
      points: 30,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Mr. Piggy',
      bio: 'Carrots and hay I welcome, bacon and ham no thanks',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/20210523_155753.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGkyNF1lvV4FLhjN5Fg0k-EgsXKdVff_ST2QSWwBP7xfsJPv5jWOVdkrGhqs12s87B2c&usqp=CAU"]',
      animal: 'dog',
      points: 90,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Bounty',
      bio: 'I want my mouse pad please',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/SPOILER_13084240_10154139378190522_22079373_n.jpg","https://www.waipadc.govt.nz/repository/libraries/id:26zgz4o7s1cxbyk7hfo7/hierarchy/our-council/haveyoursay/Animal%20Nuisance%20Bylaw/Dog%20Stock%20image","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGkyNF1lvV4FLhjN5Fg0k-EgsXKdVff_ST2QSWwBP7xfsJPv5jWOVdkrGhqs12s87B2c&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcvudxkl2N5jlYEZCsSRpS4ZcCqj1SfnpTeYhDdVwRa8mdsXVxghFfLdZmb9Ct6PalPc&usqp=CAU"]',
      animal: 'dog',
      points: 30,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Summer',
      bio: "I am snug. I am snug. Don't get mad, when I pee on rug.",
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/Snapchat-2118970990__01.jpg","https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-01/220128-chihuahua-mb-0853-a252ab.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWs1NcUacvqfaoj2EeMi_dV7ZZwwP632OLU9ALHNJRMdIoFBOOryB7dzUchp27iuMFOZU&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPvhtxr3JdrQ3pPndrsmgkvol5yRqjja_yCoYg3rEc7VGA6HBMblyqksYQ9_7QicmXpM&usqp=CAU"]',
      animal: 'dog',
      points: 200,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Dixie',
      bio: 'wizard cat, she likes to walk up to you and cast spells',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/20200912_202919.jpg","https://i.pinimg.com/originals/1f/98/bb/1f98bb3d8bd083252bc68a87235fc989.jpg"]',
      animal: 'cat',
      points: 125,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Hugo',
      bio: "I'm hungry but my bowl is only 80% full, time to YELL",
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/54DEEFAF-230F-4F18-B499-AC00966F533F.jpg","https://i.pinimg.com/736x/2b/c6/b2/2bc6b28dbe42f8be2783016f39b6dc3a.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQokoGht-w_vuSUeH2ljopcSkf3zrXhHo4g&usqp=CAU"]',
      animal: 'cat',
      points: 130,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Scout',
      bio: 'I once met a dog from Peru, who\'d freely walk up to you: "That dinner was swell, But I had to expel, So I need to you to pick up my poo.',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_4777.jpg","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F09%2F25%2Fblack-and-white-maine-coon-1049979626-2000.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTNFk2mARkdOMqENWBrrqove5W2X-dBvpUw&usqp=CAU"]',
      animal: 'cat',
      points: 125,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Brazen',
      bio: "Violets are blue, roses are red. It's 2am, you'll sleep when you're dead",
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_5928.jpg","https://www.purina.co.nz/sites/default/files/2020-11/7-Grey-Cat-BreedsHERO.jpg","https://www.purina.co.nz/sites/default/files/2020-12/Cat_645742370_Teaser.jpg"]',
      animal: 'cat',
      points: 140,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Frankie',
      bio: "Roses are blue, violets are red. I'm a dog I can't see colours",
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_0057.jpg","https://www.desicomments.com/wp-content/uploads/Black-Kelpie-Dog-On-Grass-ADB65DB23DC0DC23.jpg","https://healthyhomemadedogtreats.com/wp-content/uploads/2020/09/Labrador-Kelpie.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCofO4DlKdAH8quRAruucKI987LxvwXjS7F9L8wPLr8iO3TDMURpfH8EcF5LYoSmoiLqQ&usqp=CAU"]',
      animal: 'dog',
      points: 50,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Jubbers',
      bio: 'Jubbers loves towels,all towels belong to Jubbers.',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/unknown4.png","https://www.thesprucepets.com/thmb/c2VQLm8dyYzXvibJ55OxwPGWf0A=/1080x1080/filters:no_upscale():max_bytes(150000):strip_icc()/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg"]',
      animal: 'dog',
      points: 190,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Eriks Cat',
      bio: 'Always sitting on the fence, never taking sides',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_6362.JPG","https://i.pinimg.com/736x/fe/88/ef/fe88ef82fa95a09c0635ff5e366a4312--grey-and-white-white-cats.jpg","https://i.pinimg.com/originals/1f/98/bb/1f98bb3d8bd083252bc68a87235fc989.jpg"]',
      animal: 'cat',
      points: 125,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'George',
      bio: "I'll take a rest and then clear out the pests",
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_6307.JPG","https://kittentoob.com/wp-content/uploads/2018/06/Grey-tabby-Cat-750x444.jpg","https://excitedcats.com/wp-content/uploads/2020/12/Gray-striped-cat-_OlhaTsiplyar_shutterstock.jpg"]',
      animal: 'cat',
      points: 175,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Barkley',
      bio: "I'm Barkley the builder! Lets go to Bunnings!",
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_7948.JPG", "https://www.purina.com.au/-/media/project/purina/main/breeds/puppies/puppy-german-shepherd.jpg","https://i.redd.it/yhb5z1nx96731.jpg"]',
      animal: 'cat',
      points: 110,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Baldy',
      bio: "You're The Best Evil Son An Evil Dad Could Ever Ask For.",
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/pets/IMG_7586.PNG", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F08%2Fsphynx-green-robe-1012208470-2000.jpg", "https://www.scienceabc.com/wp-content/uploads/ext-www.scienceabc.com/wp-content/uploads/2019/01/Sphynx-Cat-1-1.jpg-.jpg"]',
      animal: 'cat',
      points: 125,
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Polar Bear',
      bio: 'Fluffy Cloud',
      animal: 'dog',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/samoyed.jpg"]',
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Hazel',
      bio: 'I was a tidy cat but now I am fat!',
      animal: 'cat',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/Hazel.png"]',
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Zelda',
      bio: 'Who cares how many toys I have, cardboard IS the best toy',
      animal: 'cat',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/6F2B4230-8947-4607-9388-33291BCB8C60.jpg"]',
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Kitty',
      bio: "My owner weren't very original",
      animal: 'cat',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/20151207_191721.jpg"]',
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Mickey',
      bio: "On the Internet, nobody knows you're a dog",
      animal: 'dog',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/20151202_233200.jpg"]',
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Hooch',
      bio: '1 going on 60, reads Nietzsche and listens to hard house. Only stretches by leaving his back legs on the couch as he contemplates if floor food is worth getting up for.',
      animal: 'dog',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/Hooch-3.jpg","https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/Hooch-2.jpg","https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/Hooch-1.jpg"]',
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Molly',
      bio: 'I can be nice or not so nice...',
      animal: 'dog',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/20151201_133014.jpg","https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/molly1.jpg"]',
    },
    {
      userId: 'auth0|62c51507db258278248c7a0c',
      name: 'Jack',
      bio: 'I am Louis’ parents’ cat. I live a lazy life. I normally am full of fur. This is a photo of me after shave. All I do is sleep (and eat occasionally). I love my life. Come pat me pawlease !!',
      animal: 'cat',
      imageUrl:
        '["https://pets-n-pats.s3.ap-southeast-2.amazonaws.com/3D4315E3-FF63-4BD4-AB2E-49965BC8EC9C.jpg"]',
    },
  ])
}
