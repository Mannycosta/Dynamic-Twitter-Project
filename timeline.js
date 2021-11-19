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


var allTweets = []
var tweetText = []
var tweetTime = []
var userId = []



for (var key in users) {
  userId.push(users[key].displayName)
  for (var text of users[key].tweets) {
    allTweets.push(text)
    
  }
}

allTweets.sort(function(a, b) {
  var c = new Date(a.timestamp);
  var d = new Date(b.timestamp);
  return c-d;
});

allTweets.reverse()






function isVerified(user) {
  if (user === true) {
    return users[key].displayName + ' <i class="bi bi-patch-check-fill"></i>'
  } else {
    return users[key].displayName
  }
}
var tweets = document.querySelector('.timeline-tweets')

userId.forEach(function (user, i) {
  console.log(user, i)
})


allTweets.forEach(function (tweet, i) {
  var rowDiv = document.createElement('div');
  rowDiv.className = "tweet-content"
  rowDiv.innerHTML = `
  <div class="tweet-photo">
    <img class="photo" src='${users[key].avatarURL}'>
  </div>
  <div class="tweet-stats">
    <div class="tweet-upper">
      <div>
        <h3 class="tweet-display-name">${isVerified(users[key].verified)}</h3>
      </div>
      <div>
        <p class="tweet-user-name">${users[key].userName}</p>
      </div>
      <div>
        <p class="tweet-time">${new Date(tweet.timestamp).toLocaleString()}</p>
      </div>
    </div>
    <div class="tweet-lower">
      <div>
        <p class="tweet-text">${tweet.text}</p>
      </div>
    </div>
  </div>
    `;
  tweets.appendChild(rowDiv) } )