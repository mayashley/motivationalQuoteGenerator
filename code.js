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
  "https://images.unsplash.com/photo-1479968129048-7372423067cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1486182810355-b1c079a9e78b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1447053045554-f150ffa257da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1524654458049-e36be0721fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1492252719637-c7b68468489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1456066775592-f14f4ea694a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1462651567147-aa679fd1cfaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1470062434883-174352796ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1541800569-95a8b25835f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1486728297118-82a07bc48a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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