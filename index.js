var user1 = {
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
};

var user2 = {
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
};
var user3 = {
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
};


function getParameter(parameterName) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(parameterName)
}


function abbreviateNumber(num, fixed) {
  if (num === null) {
    return null;
  } // terminate early
  if (num === 0) {
    return '0';
  } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}

function isVerified(user) {
  if (user === true) {
    return window[getParameter('user')].displayName + ' <i class="bi bi-patch-check-fill"></i>'
  } else {
    return window[getParameter('user')].displayName
  }
}

var tweetCount = window[getParameter('user')].tweets.length;
var header = document.querySelector('.header');
header.innerHTML = `
  <div>
    <button class="timeline-btn" onclick="window.location.href='timeline.html';"><i class="bi bi-arrow-left-short"></i></button>
  </div>
  <div class="header-name">
    <h2>${isVerified(window[getParameter('user')].verified)}</h2>
    <p>${tweetCount} Tweets</p>
  </div>
  <div>
    <button class="sticky-btn">Follow</button>
  </div`;
var photoContainer = document.querySelector('.cover-photo-container');
photoContainer.style.backgroundImage = `url('${window[getParameter('user')].coverPhotoURL}')`;
var profileImage = document.querySelector('.profile-image');
profileImage.style.backgroundImage = `url('${window[getParameter('user')].avatarURL}')`
var profileInfo = document.querySelector('.profile-info-section');
profileInfo.innerHTML = `
  <div class="follow-container">
    <button class="follow-btn">Follow</button>
  </div>
  <div class="user-info">
    <h2>${isVerified(window[getParameter('user')].verified)}</h2>
  </div>
  <div class="user-name">
    <p>${window[getParameter('user')].userName}</p>
  </div>
  <div class="joined-date">
    <p><i class="bi bi-calendar3"></i> Joined ${window[getParameter('user')].joinedDate}</p>
  </div>
  <div class="following">
    <p><span class="follow-num">${abbreviateNumber(window[getParameter('user')].followingCount)}</span> Following</p>
    <p><span class="follow-num">${abbreviateNumber(window[getParameter('user')].followerCount)}</span> Followers</p>
  </div>`;
var tabs = document.querySelector('.tabs-section');
tabs.innerHTML = `
  <button>Tweets</button>
  <button><span>Tweets & Replies</span></button>
  <button>Media</button>
  <button>Likes</button>`
var tweets = document.querySelector('.tweets-section');


var tweetText = []
for (let tweet of window[getParameter('user')].tweets) {
  tweetText.push(tweet.text)
}
var tweetTime = []
for (let tweet of window[getParameter('user')].tweets) {
  tweetTime.push(tweet.timestamp)
}

if (window[getParameter('user')].tweets.length > 0) {
  window[getParameter('user')].tweets.forEach(function (tweet, i) {
    var rowDiv = document.createElement('div');
    rowDiv.className = "tweet-content"
    rowDiv.innerHTML = `
    <div class="tweet-photo">
      <img class="photo" src='${window[getParameter('user')].avatarURL}'>
    </div>
    <div class="tweet-stats">
      <div class="tweet-upper">
        <div>
          <h3 class="tweet-display-name">${isVerified(window[getParameter('user')].verified)}</h3>
        </div>
        <div>
          <p class="tweet-user-name">${window[getParameter('user')].userName}</p>
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
    <p class="no-tweets">${window[getParameter('user')].userName} hasnt tweeted yet</p>`
}

window.onscroll = function () {
  stickyHeader();
  hiddenButton();
};

var sticky = header.offsetTop;
var stickyBtn = document.querySelector('.sticky-btn')

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function hiddenButton() {
  if (document.body.scrollTop > 193 || document.documentElement.scrollTop > 193) {
    stickyBtn.style.visibility = "visible";
  } else {
    stickyBtn.style.visibility = "hidden";
  }
}



