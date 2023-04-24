//Transforming an array of strings into a secret message!

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();//removing last string of the array.

console.log(secretMessage.length);//Checking the number of items in the array.

secretMessage.push('to','Program');//Adding 'to' and 'Program' as seperate strings to the end of the array.
 
console.log(secretMessage.indexOf('easily'));//Checking the index of the string 'easily' in the array.

secretMessage[7] = 'right';//replacing the word 'easily' to 'right'.

secretMessage.shift();//Removing first string of the array.

secretMessage.unshift('Programming');//Adding string 'Programming' to the beginning of the array. 

secretMessage.splice(6, 5,'know');//Removing the strings 'get', 'right', 'the', 'first', 'time', and replacing them with a single string 'know'.

console.log(secretMessage.join(''));//Printing the secret message in one line using .join()