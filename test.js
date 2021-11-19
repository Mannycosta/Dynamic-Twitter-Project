var users = {
  user1 : {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    verified: true,
    tweets: [{
        text: 'I am the first to reach 200 Billion dollars, pretty cool',
        timestamp: '09/02/2021 10:21:19'
      },
      {
        text: 'I admit to judging books by their cover',
        timestamp: '2/10/2021 00:01:20'
      },
      {
        text: 'Starship to the moon',
        timestamp: '2/09/2021 18:37:12'
      },
      {
        text: 'Out on launch pad, engine swap underway',
        timestamp: '2/09/2021 12:11:51'
      },
    ],
  },
  
  user2 : {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    verified: true,
    tweets: [{
        text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
        timestamp: '2/10/2021 00:01:20'
      },
      {
        text: 'Should I start tweeting memes? Let me know in a comment.',
        timestamp: '2/09/2021 18:37:12'
      },
      {
        text: 'In 2020, I read a book every hour.',
        timestamp: '2/09/2021 12:11:51'
      }
    ]
  },
  user3 : {
    userName: '@mannycosta',
    displayName: 'Manny Costa',
    joinedDate: 'May 2011',
    followingCount: 1560,
    followerCount: 1928,
    avatarURL: 'assets/code.jpg',
    coverPhotoURL: 'assets/baseball.jpg',
    verified: false,
    tweets: [{
        text: 'This is my dynamic twitter project',
        timestamp: '2/10/2021 00:01:20'
      },
      {
        text: 'Testing to see if it\'ll work with unlimited users',
        timestamp: '2/09/2021 18:37:12'
      },
      {
        text: 'Also to see the tweet count change',
        timestamp: '2/09/2021 12:11:51'
      },
      {
        text: 'And checking if verified feature works',
        timestamp: '2/09/2021 18:37:12'
      },
      {
        text: 'So far so good',
        timestamp: '2/09/2021 18:37:12'
      },
      {
        text: 'Adding tweets to test the scroll feature',
        timestamp: '2/09/2021 18:37:12'
      },
      {
        text: 'Let me know how I did!',
        timestamp: '2/09/2021 18:37:12'
      },
      {
        text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        timestamp: '2/09/2021 18:37:12'
      },
      {
        text: 'Euismod lacinia at quis risus sed vulputate odio. Semper viverra nam libero justo laoreet. Suspendisse potenti nullam ac tortor vitae purus. Ultricies mi quis hendrerit dolor magna eget est lorem. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Sem et tortor consequat id porta nibh venenatis cras. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor.',
        timestamp: '2/09/2021 18:37:12'
      },
    ],
  }
}

var tweetText = []
var tweetTime = []
var userId = []
var allTweets = []


for (var key in users) {
  userId.push(key)
  for (var text of users[key].tweets) {
    tweetText.push(text.text)
    tweetTime.push(text.timestamp)
    allTweets.push(text)
  }
}

tweetTime.sort(function(a, b) {
  var c = new Date(a);
  var d = new Date(b);
  return c-d;
});

tweetTime.reverse();

console.log(tweetTime)





  

 // if query string reads user1, then change the name of variable to user1
 // if query string reads user1, look for object named user1, if it exists then change the name of the variable to user1