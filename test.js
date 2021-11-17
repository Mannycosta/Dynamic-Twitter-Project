var user2 = {
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
};

var user1 = {
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
};
var tweetCount = 0
var tweetText = []
for (let tweet of user1.tweets) {
  tweetText.push(tweet.timestamp)
  console.log(tweet.timestamp)
}

console.log(tweetText[0])

const date1 = new Date(tweetText[0]).toLocaleString();

console.log(date1)

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
var aDay = 24*60*60*1000;
console.log(timeSince(new Date(Date.now()-new Date(tweetText[0]).toLocaleString())));
console.log(timeSince(new Date(Date.now()-aDay*2)));