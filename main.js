// Remmber to realx and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE: please use the console to test your code :)



//=============================================================================
/*                              Q1                                           */
//=============================================================================
  //lets make a user profile using closures
  //create a function person when invoking sayMyName returns the name of that person

  function person(name){
    //your code is here
  }

  var personA=person("jack")
  var personB=person("Mark")
  var personC=person("Sara")

  personA.sayMyName(); // "jack"
  personB.sayMyName(); // "Mark"

  //now modify that closure and add a function that says hello to that person;
  personA.sayHello(); // hello jack
  personB.sayHello(); // hello Mark

  //how about we let jack and mark meet toghter!
  //modify your closure and add function addFriend that accepts object of functions a let jack meets his friends.

  personA.addFriend(personB); // "you just became friend with Mark"
  personA.addFriend(personC); // "you just became friend with Mark and Sara"

  //modify your closure to tell mark how many friends does he have

  personA.listFriends(); // "Mark! you have 2 friends"


//=============================================================================
/*                                  Q2                                    */
//=============================================================================
  //lets create a football team using OOP concept,
  // a - we need to create the players (lets create only one for now), the player declaration should take the name of the player   
    
  function player(name){
    //writ your code here .....
  }

  var player1 = player("messi");

  // b - we need function to add the other info for the player with addInfo function
  
   
  var addInfo = function(??){
    //writ your code here .....
  }

  player1.addInfo("age", "position", "level", "availability");

  // c- create another function to increase the the level for the player by n value 
   
  var increaseLevel = function(){
    //writ your code here .....
  }

  player1.increaseLevel(4); 

  // d - we need another function to check the player state, if the player is available it should return true , if not it should return false
  //      note that the default state of the player is false.
    
  var isAvailable = function(){
    //writ your code here .....
  }

  player1.isAvailable();  // false

  // f- in order to change the state of the player, create a function called chageState, when called it will make the player avaliablity true,
  //    and when called again it will make it false.

  var chageState = function(){
    //writ your code here .....
  }

  player1.chageState(); // true
  player1.chageState(); // false


//=============================================================================
/*                                  Q3                                  */
//=============================================================================
 
 // you can only use MDN as a resource in case you need one (https://developer.mozilla.org/en-US/docs/Learn/HTML) 
 // Create a new html file called html_yourname.html and do the following:
 //    a. Change the title to : My easy Assessment
 //    d. Add horizital line
 //    e. Create a new div with id myInfo
 //        1. Add header : HTML is Eazy
 //        2. Add the following paragraph: 
 //            HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. 
 //    f. create an input text and a button called Add
// Create css file and link it to your HTML file, and write css code for the following: 
//     a. Change the background color for the whole page.
//     b. Change the font family for the header of the page  
//     c. Enlarge the input text (both: width & height)
// 2. Connect jQuery library to the HTML file
// 3. Write javascript function when user type text inside the input text and click the "Add" 
//     button it will add the text to the ul elemtn

