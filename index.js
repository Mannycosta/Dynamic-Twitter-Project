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
  ],
};
function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
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
function abbreviateNumber(num, fixed) {
  if (num === null) { return null; } // terminate early
  if (num === 0) { return '0'; } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}

function isVerified(user) {
  if (user === true) {
    return user1.displayName + ' <i class="bi bi-patch-check-fill"></i>'
  } else {
    return user1.displayName
  }
}

function getParameter(parameterName) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(parameterName)
}

if (getParameter('user') === 'user1') {
  var tweetCount = user1.tweets.length;
var header = document.querySelector('.header');
header.innerHTML = `
        <h2>${isVerified(user1.verified)}</i></h2>
        <p>${tweetCount} Tweets</p>`;
var photoContainer = document.querySelector('.cover-photo-container');
photoContainer.style.backgroundImage = `url('${user1.coverPhotoURL}')`;
var profileImage = document.querySelector('.profile-image');
profileImage.style.backgroundImage = `url('${user1.avatarURL}')`
var profileInfo = document.querySelector('.profile-info-section');
profileInfo.innerHTML = `
  <div class="follow-container">
    <button class="follow-btn">Follow</button>
  </div>
  <div class="user-info">
    <h2>${isVerified(user1.verified)}</h2>
  </div>
  <div class="user-name">
    <p>${user1.userName}</p>
  </div>
  <div class="joined-date">
    <p><i class="bi bi-calendar3"></i> Joined ${user1.joinedDate}</p>
  </div>
  <div class="following">
    <p><span class="follow-num">${abbreviateNumber(user1.followingCount)}</span> Following</p>
    <p><span class="follow-num">${abbreviateNumber(user1.followerCount)}</span> Followers</p>
  </div>`;
  var tabs = document.querySelector('.tabs-section');
  tabs.innerHTML = `
  <button>Tweets</button>
  <button><span>Tweets & Replies</span></button>
  <button>Media</button>
  <button>Likes</button>`
  var tweets = document.querySelector('.tweets-section');
  

var tweetText = []
for (let tweet of user1.tweets) {
  tweetText.push(tweet.text)
}
var tweetTime = []
for (let tweet of user1.tweets) {
  tweetTime.push(tweet.timestamp)
}

  if (user1.tweets.length > 0){
    user1.tweets.forEach(function (tweet, i) {
      var rowDiv = document.createElement('div');
      rowDiv.className = "tweet-content"
      rowDiv.innerHTML = `
      <div class="tweet-photo">
      <img class="photo" src='${user1.avatarURL}'>
    </div>
    <div class="tweet-stats">
      <div class="tweet-upper">
      <div>
        <h3 class="tweet-display-name">${isVerified(user1.verified)}</h3>
      </div>
      <div>
        <p class="tweet-user-name">${user1.userName}</p>
      </div>
      <div>
        <p class="tweet-time">${new Date(tweetTime[i]).toLocaleString()}</p>
      </div>
    </div>
    <div class="tweet-lower">
      <div>
        <p class="tweet-text">${tweetText[i]}</p>
      </div>
    </div>
    </div>
      `;
      tweets.appendChild(rowDiv)
    })
  } else {
    tweets.innerHTML = `
    <p class="no-tweets">${user1.userName} hasnt tweeted yet</p>`
  }
}

if (getParameter('user') === 'user2') {
  var tweetCount = user2.tweets.length;
var header = document.querySelector('.header');
header.innerHTML = `
        <h2>${isVerified(user2.verified)}</i></h2>
        <p>${tweetCount} Tweets</p>`;
var photoContainer = document.querySelector('.cover-photo-container');
photoContainer.style.backgroundImage = `url('${user2.coverPhotoURL}')`;
var profileImage = document.querySelector('.profile-image');
profileImage.style.backgroundImage = `url('${user2.avatarURL}')`
var profileInfo = document.querySelector('.profile-info-section');
profileInfo.innerHTML = `
  <div class="follow-container">
    <button class="follow-btn">Follow</button>
  </div>
  <div class="user-info">
    <h2>${isVerified(user2.verified)}</h2>
  </div>
  <div class="user-name">
    <p>${user2.userName}</p>
  </div>
  <div class="joined-date">
    <p><i class="bi bi-calendar3"></i> Joined ${user2.joinedDate}</p>
  </div>
  <div class="following">
    <p><span class="follow-num">${abbreviateNumber(user2.followingCount)}</span> Following</p>
    <p><span class="follow-num">${abbreviateNumber(user2.followerCount)}</span> Followers</p>
  </div>`;
  var tabs = document.querySelector('.tabs-section');
  tabs.innerHTML = `
  <button>Tweets</button>
  <button><span>Tweets & Replies</span></button>
  <button>Media</button>
  <button>Likes</button>`
  var tweets = document.querySelector('.tweets-section');
  

var tweetText = []
for (let tweet of user2.tweets) {
  tweetText.push(tweet.text)
}
var tweetTime = []
for (let tweet of user2.tweets) {
  tweetTime.push(tweet.timestamp)
}

  if (user2.tweets.length > 0){
    user2.tweets.forEach(function (tweet, i) {
      var rowDiv = document.createElement('div');
      rowDiv.className = "tweet-content"
      rowDiv.innerHTML = `
      <div class="tweet-photo">
      <img class="photo" src='${user2.avatarURL}'>
    </div>
    <div class="tweet-stats">
      <div class="tweet-upper">
      <div>
        <h3 class="tweet-display-name">${isVerified(user2.verified)}</h3>
      </div>
      <div>
        <p class="tweet-user-name">${user2.userName}</p>
      </div>
      <div>
        <p class="tweet-time">${new Date(tweetTime[i]).toLocaleString()}</p>
      </div>
    </div>
    <div class="tweet-lower">
      <div>
        <p class="tweet-text">${tweetText[i]}</p>
      </div>
    </div>
    </div>
      `;
      tweets.appendChild(rowDiv)
    })
  } else {
    tweets.innerHTML = `
    <p class="no-tweets">${user2.userName} hasnt tweeted yet</p>`
  }
}




  
  
