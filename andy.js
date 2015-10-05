// More Function Exercises !!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.

function minimum(x,y) {
if(x<y) {
  console.log(x + " is smallest");
}
  else {
    console.log(y +  " is smallest");
  }
}
minimum(100,22);

// 2. Create a new function called minimum3() to find the smallest of three numbers

function minimum3(x,y,z) {
if(x<y && x<z) {
  console.log(x + " is smallest");
}
else if (y<x && y<z) {
    console.log(y +  " is smallest");
  }
  else {
    console.log(z+ " is smallest")
  }
}
minimum(2,3,4);


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
 do a split add & join

 var total = 0;
 function sum(x) {
   for (i=0; i<x.length; i++) {
   total += x[i];
   }
     console.log(total);
 }
 sum([1,2,3,4]);

//or just do:

var total1 = [1, 2, 3, 4].reduce(function(a, b) {
  return a + b;
});

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

var total = 1;
function multiply(x) {
  for (i=0; i<x.length; i++) {
  total *= x[i];
  }
     console.log(total);
}
multiply([1,2,3,4]);

//or this

var total2 = [1, 2, 3, 4].reduce(function(a, b) {
  return a * b;
});


// 5. Write a function called filterSixPlus() that takes the following array and returns words
//    that are six characters or longer.
var sixLetterArray = [];
var words = ["window", "table", "barstool", "glass", "charger", "outlet"];
function filterSixPlus(x) {
for (i=0; i<x.length; i++ ) {
  if (x[i].length >= 6) {
    sixLetterArray.push(x[i]);
  }
}
console.log(sixLetterArray);
}

filterSixPlus(words);


// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.

var f = "0";
var temp = prompt("What is the temp in Celsius?");
function celsiusConvert(temp) {
  f = temp * 1.8 + 32;
  console.log("A " +temp+ " Celsius temp is equal to " +f+ " degrees Fahrenheit");
}
celsiusConvert(temp);


// 7. Adding to the code in #2, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

var f = "0";
var c = "0";
var temp = prompt("What is the temp?");
var cOrF = prompt("Would you like Fahrenheit to Celsius or Celsius to Fareinheit? Say Either F to C or C to F");
  function celsiusConvert(temp) {
  f = temp * 1.8 + 32;
  console.log("A " +temp+ " Celsius temp is equal to " +f+ " degrees Fahrenheit");
 }
  function farenheitConvert(temp) {
  c = temp/ 1.8 - 32;
  console.log("A " +temp+ " Farenheight temp is equal to " +c+ " degrees Celsius");
  }
while ((cOrF != "C to F") && (cOrF != "F to C")) {
cOrF = prompt("Please Enter Either F to C or C to F. Would you like Fahrenheit to Celsius or Celsius to Fareinheit?");
}

if (cOrF == "C to F") {
 celsiusConvert(temp);
}
else  {
  farenheitConvert(temp);
}

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

var bcount = 0;
var string = "Bros and Bros and Bros";
function countBs(b) {
  for (i=0; i<b.length; i++) {
    if (b.charAt(i) == "B") {
        bcount = bcount +1;
    }
  }
    console.log("There are " +bcount+ " Bs in your string");
}
countBs(string);

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

var charcount = prompt("What letter do you want to count?");
var bcount = 0;
var string = "fox jumped over a Dog";
function countChars(b) {
  for (i=0; i<b.length; i++) {
    if (b.charAt(i) == charcount) {
        bcount = bcount +1;
    }
  }
    if (bcount == 1) {
    console.log ("There is " +bcount+ " " +charcount+ " in your string");
    }
    else {
    console.log("There are " +bcount+ " " +charcount+ "'s in your string");
    }
}
countChars(string);


// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.
//Easy Way
var string = "Soon you will master functions!";
    var newstring = string.replace(/o/g, "0");
    console.log(newstring);

//Hard Way

var string = "Soon you will master functions!";
function ohZero(z) {
  var newstring = z.split("");
  for (i=0; i<z.length; i++) {
      if (z[i] == "o") {
        newstring[i] == "0";
      }
  }
  newstring = newstring.join("");
  console.log(newstring);
};
ohZero(string);

// 11. Write function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"
//For words that begin with consonant sounds, the initial consonant or consonant cluster is moved to the end of the word, and "ay" (some people just add "a") is added, as in the following examples:

//"pig" → "igpay"
//"banana" → "ananabay"
//"trash" → "ashtray"
//For words which begin with vowel sounds or silent letter, one just adds "yay" to the end. Examples are:
//"eat" → "eatyay"
//"omelet" → "omeletyay"
//"are" → "areyay"

var translate = "turn this string into another pig latin";
var pigOut= translate.split(" ");
function piglatin () {
for (i=0; i<pigOut.length; i++) {
if (pigOut[i].substring(0,1) == 'a'|| pigOut[i].substring(0,1) == 'e'
|| pigOut[i].substring(0,1) == 'i' || pigOut[i].substring(0,1) == 'o'
|| pigOut[i].substring(0,1) == 'u') {
  pigOut[i] = (pigOut[i] + 'yay');
}
else if (pigOut[i].substring(0,1) != 'a'|| pigOut[i].substring(0,1) != 'e'
|| pigOut[i].substring(0,1) != 'i' || pigOut[i].substring(0,1) != 'o'
|| pigOut[i].substring(0,1) != 'u') {
pigOut[i] = (pigOut[i].slice(1) + pigOut[i].slice(0,1) + 'ay');
}
else {
console.log("What else could there be - need to figure out the 2 letter combo");
     }
 }
 console.log(pigOut.join(' '));
}
piglatin();


//look at replace function rather than substraction



// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
var sing = " Bottles of Beer on the wall " ;
var end = " Bottle of Beer on the wall ";

function beer() {
  for (i=99, z=98; i>=3; i--, z--) {
  console.log( i+ sing + i + " Bottles of Beer.  Take 1 down, pass it around, " + z + sing + "\n");
  }
  console.log( i+ sing + i + " Bottles of Beer.  Take 1 down, pass it around, " + z + end + "\n");
  console.log( 1+ end + 1 + " Bottle of Beer.  Take 1 down, pass it around, " + 0 + sing);
}
beer();

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

var number = Math.floor((Math.random() * 100) + 1);
var userNumber = prompt("Try to guess the computer's number between 1-100:");
console.log(number);
function numberGuess () {
while (number != userNumber) {
if (number > userNumber) {
  userNumber = prompt("your number is too low, try again!");
}
else {
  userNumber = prompt("your number is too high, try again!");
}
}
alert("You nailed it!");
}
numberGuess();


// 14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!


/// Challenge Code ///
var largestPhoneNumber =  ['888-888-8888','191-999-9999','555-555-5456','222-121-2121','999-999-9999', '9898888888'];
var newPhone = [];
var phoneTotal = [];
var largest = 0;
var indexNum = 0;

function phoneSum (x) {
  for (i=0; i<x.length; i++) {
  newPhone[i] = x[i].split('').filter(Number);      // insert into array strings split by commas and delete dash
  var newPhoneSum = 0;                                  // set newPhoneSum to 0 every time we go through the loop
  for (z=0; z<10; z++) {                                 // second loop within first that converts to integers and adds up the 10 nums
    newPhoneSum += parseInt(newPhone[i][z], 10);
     }
    phoneTotal[i] = newPhoneSum;                 // populate phoneTotal with sums from each number
  }
for (y=0; y<phoneTotal.length; y++) {            // new loop that figures out highest number & array index position
  if (phoneTotal[y] >= largest) {
    largest = phoneTotal[y];
    indexNum = y;
    console.log(indexNum);
    }
 }
return "The largest phone number is ......." +largestPhoneNumber[indexNum];
}
phoneSum(largestPhoneNumber);


//switch example

function transform(text) {
    var s = text.split('');
    for (var i = 0; i < s.length; i++) {
        // Caesar cipher
        switch(s[i]) {
          case ' ':
            break;
          case 'z':
            s[i] = 'a';
            break;
          case 'Z':     // One case you forgot to handle
            s[i] = 'A';
            break;
          default:
            s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        // Upper-case vowels
        switch(s[i]) {
          case 'a': case 'e': case 'i': case 'o': case 'u':
            s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}
