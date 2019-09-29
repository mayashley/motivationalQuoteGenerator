const quotes = [
  '"Try not to become a person of success, but rather try to become a person of value." --Albert Einstein',
  "\"I have not failed. I've just found 10,000 ways that won't work.\" --Thomas A. Edison",
  '"If you don\'t value your time, neither will others. Stop giving away your time and talents--start charging for it." --Kim Garst',
  '"A successful man is one who can lay a firm foundation with the bricks others have thrown at him." --David Brinkley',
  '"No one can make you feel inferior without your consent." --Eleanor Roosevelt',
  '"The whole secret of a successful life is to find out what is one\'s destiny to do, and then do it." --Henry Ford',
  '"What seems to us as bitter trials are often blessings in disguise." --Oscar Wilde',
  '"No masterpiece was ever created by a lazy artist." --Anonymous',
  '"Do one thing every day that scares you." --Anonymous',
  '"Life is not about finding yourself. Life is about creating yourself." --Lolly Daskal',
  '"Your problem isn\'t the problem. Your reaction is the problem." --Anonymous',
  '"Innovation distinguishes between a leader and a follower." --Steve Jobs',
  '"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed." --Ray Goforth',
  '"Success is the sum of small efforts, repeated day-in and day-out." --Robert Collier',
  '"Courage is resistance to fear, mastery of fear--not absence of fear." --Mark Twain',
  '"The only place where success comes before work is in the dictionary." --Vidal Sassoon',
  '"Don\'t let the fear of losing be greater than the excitement of winning." --Robert Kiyosaki',
  '"If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!" --T. Harv Eke'
];

const images = [
  "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1475738972911-5b44ce984c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1498713301984-508015049dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1473654729523-203e25dfda10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1520475178495-a8d5b36f1782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1484893341013-5f1d9c91a96e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1439367774447-505de3bd8423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1506333438925-a6203045b492?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1444033260440-c91ea1bfb5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1525220964737-6c299398493c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];
let firstTime = true;
function newQuote() {
    if(firstTime) {
        document.getElementById("projectTitle").innerHTML = null;
        firstTime = false;
    }
  const randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById(
    "imageDisplay"
  ).style.backgroundImage = `url(${images[randomNumber]})`;
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
  console.log(`url(${images[randomNumber]})`);
}



//  add new images as time allows for better user experience