var users = {
  user2 : {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    verified : false,
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
  
  user1 : {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    verified : true,
    tweets: [{
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
      }
    ]
  },
}
var tweetText = []
for (let tweet of users.user1.tweets) {
  tweetText.push(tweet.text)
}
console.log(tweetText[0])




function getParameter(parameterName) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(parameterName)
}
var userId = ''

  if (getParameter('user') === 'user1') {
    userId = `${getParameter('user')}`
  }
  if (getParameter('user') === 'user2') {
    userId = `${getParameter('user')}`
  }

  console.log(users)
  

  

 // if query string reads user1, then change the name of variable to user1
 // if query string reads user1, look for object named user1, if it exists then change the name of the variable to user1