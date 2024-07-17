// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";


const Practice = () => {

    // const a = "satish is a  greatperso greatperdol greatpersop"
    // const s = a.split(" ")
    // const b = s.reduce((acc,val)=>{

    //     return val.length > acc.length ? val : acc
    // },"")
    // console.log(b)
 


    // const a = "satish is a greatperson greatpersop";

function findFirstLongestWord(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Use the reduce method to find the first longest word
  const longestWord = words.reduce((longest, currentWord) => {
    // If the current word's length is greater than the longest word's length, update the longest word
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');

  // Return the first longest word
  return longestWord;
}

// Call the function and log the result
// console.log(findFirstLongestWord(a));  // Output: "greatperson"


      
// string word trim
const strTrim = (hash) =>{
let str = "js is most papular la"
console.log(str.length)
if(str.length>22){
return false
}
let a = str.split(" ").map((val)=>{
    return val.charAt(0).toUpperCase() + val.slice(1)
})
return hash + a.join("")
}
// console.log(strTrim("#"))
const numOf = ()=>{
    let word ="MissIssippi"
    let str = word.toLocaleLowerCase().split("")
    console.log(str)
    let c = "i"

//     let obj ={}
// let b = str.forEach((val)=>{
   
//     if(obj.hasOwnProperty(val)==="i"){
//         obj[val] =obj[val]+1
//     }
//     else{
//         obj[val] =1 
//     }
// })

// return obj
   

   let b = str.reduce((acc ,val)=>{
    if(acc[val]===c){
   acc[val] = acc[val]+1
    } else{
        // return acc[val]
        return 0
    }
   },{})

   return b
   

    // let b = str.reduce((acc,val)=>{
    // // //    return acc[val] ? acc[val] = ++acc[val]:acc[val]=1 
    // // if(acc[val]){
    // //     acc[val] = 1
    // // }
    // // else{
    // //     acc[val]=1   
    // // }
    
    // },{})
    // return b

}

// console.log(numOf())




// find a maximum number 

const maxNum = ()=>{
let array = [-2,-3,-6,-71,-91,-10,-1]
let b = array.reduce((acc,val)=>{
return acc > val ? acc : val
})
return b
}
//  console.log(maxNum())

 const facto = (fc)=>{
// console.log(fc)
if(fc===0) return 1
let fact = 1
for(let i=1; i<=fc; i++){
fact = fact*i
// console.log(fact)
}
return fact
 }

// console.log(facto(0))
// console.log([1,2,3]==[1,2,3])


const numSum = (num)=>{
  // console.log(typeof num)
  let numA = num.toString().split('')
  console.log(numA)
  let b = numA.reduce((acc,val)=>{

return Number(acc) + Number(val)
  },0)
  return b

}

// console.log(numSum(923456789890987))
 
const checkVo = (str)=>{
// console.log(str.split(""))
let s = str.split("")
let count = 0
let vA= ["a","e","i","o","u"]

let b = s.map((val)=>{
  if(vA.includes(val)){
    count++
  }
  // return count
})
return count
// console.log(b)

}

// console.log(checkVo("js is a papoular langaa"))


const checkCube = (p)=>{

  let ans = false
  for(let i=1; i< p/2; i++){
    // console.log(i)
if (2**i===p) {
  ans = true
  // console.log(i)
  // break
}

  }
  return ans
}
// console.log(checkCube(322))

// array element squre and then addition 
const squreAddi =(arr)=>{
return arr.reduce((acc,val)=>acc+(val*val),0)
}
// console.log(squreAddi([1,2,3,4]))
const fk =()=>{
  let s ="hello"
let b = s.split("")
// console.log(b)
let  element =""
for (let index = b.length-1; index >= 0; index--) {
  element = element+b[index]
 }

return element
}

// console.log(fk())

// median solve 

const medianFun =(arr)=>{
// console.log(Math.floor(arr.length/2))

if(arr.length%2===0){
  console.log("even")
  let even = arr.length/2
  let e = arr[even]+arr[even-1]/2
  console.log(`Median is ${arr[even]+arr[even-1]/2}`)
}else{
  console.log("odd")
}

}
// console.log(medianFun([1,2,3,4,7,5,6,7,8,9,8,9]))

const findMode = (arr)=>{
// console.log(arr)
let count = 0;
let b = arr.reduce((acc,val)=>{
if(acc[val]){
  acc[val] = ++acc[val]
}
else{
  acc[val] = 1
}
return acc
},{})
// console.log(Object.entries(b))
let ans = Object.keys(b).reduce((acc,val)=>b[acc]>b[val]?acc:val)
return ans
}


// console.log(findMode([1,2,2,2,3,4,4,4,4,4,5,5]))

const factoWithRecurson = (num)=>{
if(num===1) { return 1 }
else{
  return num * factoWithRecurson(num-1)
}

}

// console.log(factoWithRecurson(6))

const repeatString =(a,b)=>{
  if(b<0){
    return false
  }
let arr = Array(b)
arr.fill(a)
return arr.join("")
let arr1 =[]
// console.log(a.repeat(5))

}
// console.log(repeatString("abc",9))

const trunkString =(a,c)=>{
let b = a.slice(0,c)
return `${b}...`
}
// console.log(trunkString("fhkjf jkfhk hf fjhfjk fhkhf k hfkhkfhhkjhkjf ",12))

const numrange = (ar,br)=>{
//   let abc = ar
//   abc.map((val,i)=>{
// return i++
//   })
// let s =0
let bc=[]
for(let i = ar; i<=br; i++){
 bc.push(ar)
 ar++
}
return bc

// return abc
}
// console.log(numrange(-2,1))

const dublicateArray = (a)=>{
// console.log(a)
// return a.filter((acc,i)=> i === a.indexOf(acc))
// return [...new Set(a)]
let uni=a.sort((a,b)=>{a-b}).reduce((acc,val)=>{
if(!acc[val]){
  // acc[val] = true;
  acc.push(val);
}
return acc
},[])
return uni

}
// console.log(dublicateArray([1,2,8,2,3,4,4,4,4,5,6,7,8,8,8,8,9]))

const indexOfMethed=()=>{
  const paragraph = "I think Ruth's dog is cuter than your dog!";

  const searchTerm = 'dog';
  const indexOfFirst = paragraph.indexOf(searchTerm);
  
  console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
  // Expected output: "The index of the first "dog" is 15"
  
  console.log(
    `The index of the second "${searchTerm}" is ${paragraph.indexOf(
      searchTerm,
      indexOfFirst + 1,
    )}`,
  );
  // Expected output: "The index of the second "dog" is 38"
  
}
// indexOfMethed()
// console.log(indexOfMethed())


// very imp find age any person with date 

const findAge = (brithDate)=>{
let currentDate = new Date()
// console.log(currentDate)
brithDate =new Date(brithDate)
// console.log(brithDate)
let age = currentDate.getFullYear() - brithDate.getFullYear()
let monthDiff= currentDate.getMonth() - brithDate.getMonth()
// console.log(monthDiff)
// console.log(age)
if(monthDiff<0 || monthDiff === 0 && currentDate.getDate() < brithDate.getDate()){
  age--
}
return age

}
// console.log(findAge("2000-11-15"))

// let arr =["","jj"]
// console.log(typeof arr.length,arr.length,arr[1])
const checkVowel = (st)=>{
let v ="aeiou"
for(let char of v){
  // console.log(char)
  if(!st.includes(char)){
    return false
  }

}
return true

}
// console.log(checkVowel("my name is satishou"))

const diffDate = (date,day,date1)=>{
// console.log(date)
let ab = date.setDate(date.getDate() +day)
// return new Date(ab)
let c = new Date(ab)
// console.log(c)
// let v =new Date(c- date)
return date1-date

}
// console.log(diffDate(new Date("2024-06-09"),7,new Date("2024-06-16")))

const diffDate1 = (date1,date2)=>{
  let oneday = 24*60*60*1000
let c= date2-date1
  return c/oneday
  }
  let d1 = new Date("2024-06-09")
  let d2 = new Date("2024-06-16")

  // console.log(diffDate1(d1,d2))


const numOfCount = (arr)=>{

let element=''
let num =0
for (let [i,arr1] of arr.entries()){
 let b = i + 1
//  console.log(b)
 for (let index = 0; index < arr1; index++) {
  // console.log(index)

   element += "*" ;
   
  
  // console.log(element)
 }

 `${b} = ${element += "\n"}`;

}

return `${element} ` 

}
// console.log(numOfCount([5,3,7,2]))

// second tarika
const numOfCount1 =(ar)=>{
  // for (const [i, v] of ['a', 'b', 'c'].entries()) {
  //   console.log(i, v)
  // }

  let b = ar.map((val,i)=>{
    return `${i+1}: ${"*".repeat(val)}`
  })
  return b.join("\n")
}
// console.log(numOfCount1([5,3,7,2]))

// luhn formula 3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9.


// Here are the steps  Luhn Algorithm Steps:
// Steps of the Luhn Algorithm
// Prepare the Number:
//? Start with the digits of the number. For example, if validating the number 79927398713.
//? Reverse the Digits:
//? Reverse the digits of the number. For the example, it becomes 31789379297.
//todo Double Every Second Digit:
// Starting from the first digit, double every second digit.
//todo For our example: 3, 1*2, 7, 8*2, 9, 3*2, 7, 9*2, 2, 7*2, 9.
//? Which translates to: 3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9.
//? Subtract 9 from Numbers Higher Than 9:

// 16 = 16 - 9 = 7
// 16 = 1 + 6 =7

// 14 = 14-9= 5
// 14= 1+4=5

// If doubling the number results in a number greater than 9, subtract 9 from it.
//? Now our series is: 3, 2, 7, 7, 9, 6, 7, 9, 2, 5, 9.
//todo Sum All Digits:
//? Add all the digits together.
//* 3 + 2 + 7 + 7 + 9 + 6 + 7 + 9 + 2 + 5 + 9 = 66.
//todo Check Modulo 10:
//? If the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
// 66 % 10 = 6, which is not 0, so 79927398713 is not a valid number according to Luhn.

const checkArr = (ar)=>{

return ar.map((val)=>{
  // console.log(val)
  return val > 9 ? val-9 : val 
})
}
// console.log(checkArr([3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9]))

const checkArr1 = (ar)=>{
  let ar1 = String(ar)
  let ar3 = ar1.split("").reverse()
  // console.log(ar1.split("").reverse())
  console.log(ar3)
  // let ar4 = "31789379297"
  // let ar5 = ar4.split("")
  let bc = ar3.map((val,i)=>{
    return i%2 !== 0 ? Number((val*2)) :Number(val)
  })
  console.log(bc)
  let cd = bc.map((val)=>val>9?val-9:val)
  console.log(cd)
  let res= cd.reduce((acc,val)=>acc+val,0)
  console.log(res)
  if(res%10 === 0 ){
    return "card is valid"
  }
  return "card not valid"

  }
  // console.log(checkArr1(4539148803436467))

  const litCode = (ar)=>{
let arr =[]
// console.log(ar[1])
for(let i=ar[0]; i <= ar[1]; i++){
// console.log(i)
arr.push(i)
}
let b = arr.map((val,i)=>{
  if(val%3==0 && val%5===0)
    {
      return "fizzBuzz"
    }else if(val%3===0){
      return "Fizz"
    }
    else if(val%5===0){
      return "Buzz"
    }
    else{
     return  val
    }
})
return b
  }
  // console.log(litCode([9,15]))

  const extractNum = (str) => {
    // Match all digits in the string and return them as an array
    let c=str.match(/\d+/g);
    let b = c.reduce((acc,val)=>{
return Number(acc) + Number(val)
    },0)
    return b
  };
  
  // console.log(extractNum("dghjg3gjh4gjh789j")); // Output: ["3", "4", "789"]
  // console.log(extractNum("dghjg1123gjh4gjh789j"));
  // console.log(extractNum("dghjg1gjh4gjh7j"));


    // const arr = ["abc", "123", "bcd", "100"];

const sumNumbers = (arr) => {
  return arr
    .map(item => parseInt(item)) // Convert each item to an integer
    .filter(num => !isNaN(num))  // Filter out non-numeric values
    .reduce((sum, num) => sum + num, 0); // Sum the remaining numbers
};

// console.log(sumNumbers(["abc", "123", "bcd", "100"])); 


const sumNumbers1 = (arr) => {
 
  if(typeof arr ==="object"){
  return arr
    .map(item => parseInt(item)) // Convert each item to an integer
    .filter(num => !isNaN(num))  // Filter out non-numeric values
    .reduce((sum, num) => sum + num, 0); // Sum the remaining numbers
  }
  else{
    let arr1 = arr.split("")
    return arr1
    .map(item => Number(item)) // Convert each item to an integer
    .filter(num => !isNaN(num))  // Filter out non-numeric values
    .reduce((sum, num) => sum + num, 0);
  }
};

// console.log(sumNumbers1(["abc", "123", "bcd", "100"]));// Output: 223
  // console.log(sumNumbers1("abc123bcd102"))

// some imp question 

// const impQues=()=>{
//   i talked to some of my friends and asked about some question in javascript developer machine coding round 

// Create a function that converts a JavaScript value to a JSON string.
// - Write a function that performs a deep copy of a value, ensuring it handles circular references correctly.
// - Implement a function that converts a JSON string back into a JavaScript value.
// - Create a function that merges two objects, deeply combining their properties.
// - Implement a function that deep freezes an object, preventing any changes.
// - Write a custom polyfill for the typeof operator that returns the correct type of a JavaScript value.
// - Create a function that converts a JavaScript object into a query string.
// - Write a function that parses a query string back into a JavaScript object.
// - Develop a function that returns the longest word in a string.



// Develop the functionality of Promise.any.
// - Create the functionality of Promise.allSettled.
// - Write a function to run N asynchronous tasks one after the other in series.
// - Create a function to execute N asynchronous tasks concurrently.
// - Design a function to execute N asynchronous tasks in a race condition.
// - Develop a throttling function for promises to limit API request rates.
// - Implement a function that caches identical API requests to avoid redundant calls.
// }


// function parseJSON(jsonString) {
//   console.log(jsonString)
//   try {
//       // Parse the JSON string
//       const value = JSON.parse(jsonString);
//       return value;
//   } catch (error) {
//       // Handle any errors that occur during parsing
//       console.error("Invalid JSON string:", error);
//       return null;
//   }
// }

// // Example usage:
// const jsonString = '{"name": "John", "age": 30, "isStudent": false, "address": {"city": "New York", "zip": "10001"}}';
// const parsedValue = parseJSON(jsonString);
// console.log(parsedValue);


function parseJSON1(jsonString) {
  // console.log(jsonString)
  try {
      // Parse the JSON string
      const value = JSON.stringify(jsonString);
      return value;
  } catch (error) {
      // Handle any errors that occur during parsing
      console.error("Invalid JSON string:", error);
      return null;
  }
}

// Example usage:
const jsonString1 = {
  name: "John",
  age: 30,
  isStudent: false,
  address: {
      city: "New York",
      zip: "10001"
  }
};
const parsedValue1 = parseJSON1(jsonString1);
// console.log(parsedValue1);


function deepCopy(value, visited = new Map()) {
  // console.log(typeof value)
  // Handle non-object types (primitives)
  if (value === null || typeof value !== 'object') {
      return value;
  }

  // Handle circular references
  if (visited.has(value)) {
      return visited.get(value);
  }

  // Handle arrays
  if (Array.isArray(value)) {
      const copy = [];
      visited.set(value, copy);
      value.forEach((item, index) => {
          copy[index] = deepCopy(item, visited);
      });
      return copy;
  }

  // Handle Date objects
  if (value instanceof Date) {
      return new Date(value);
  }

  // Handle RegExp objects
  if (value instanceof RegExp) {
      return new RegExp(value);
  }

  // Handle objects
  const copy = {};
  visited.set(value, copy);
  Object.keys(value).forEach(key => {
      copy[key] = deepCopy(value[key], visited);
  });

  return copy;
}

// Example usage:
const obj = {
  a: 1,
  b: {
      c: 2,
      d: [3, 4]
  }
};
obj.b.e = obj;  // Creating a circular reference
// console.log(obj)
const copiedObj = deepCopy(obj);
// console.log(copiedObj);


function objectToQueryString(obj) {
  // Initialize an array to hold query string components
  const queryParams = [];
  // console.log(Object.keys(obj).map((val)=>val))
  // Loop through each property in the object
  let b = Object.keys(obj).map((key)=>{
    // console.log(key)
    if(obj.hasOwnProperty(key)){
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(obj[key]);
      
      // Create the key=value pair string and push it to the array
      return (`${encodedKey}=${encodedValue}`);
    }

  });


  // for (const key in obj) {
  //   // console.log(key)
  //     if (obj.hasOwnProperty(key)) {
  //         // Encode the key and the value
  //         const encodedKey = encodeURIComponent(key);
  //         const encodedValue = encodeURIComponent(obj[key]);
          
  //         // Create the key=value pair string and push it to the array
  //         queryParams.push(`${encodedKey}=${encodedValue}`);
  //     }
  // }
  
  // Join all key=value pairs with an '&' and return the resulting string
  // return queryParams.join('&');


  // console.log(b)

  return b.join("&")
}

// Example usage:
const params = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
  job: 'Software Developer'
};

const queryString = objectToQueryString(params);
// console.log(queryString);  // Output: name=John%20Doe&age=30&city=New%20York&job=Software%20Developer


// const changeQureyToObejct = (query)=>{
// let b = query.split("&")
// console.log(b)
// let arr = [1,2,3,4,5,6]
// // console.log(Object.fromEntries(arr))
// }
// console.log(changeQureyToObejct("name=John%20Doe&age=30&city=New%20York&job=Software%20Developer"))


function queryStringToObject1(queryString) {
  // Initialize an empty object to hold the parsed key-value pairs
  const obj = {};

  // Remove the leading '?' if it exists
  if (queryString.startsWith('?')) {
      queryString = queryString.slice(1);
  }

  // Split the query string by '&' to get key-value pair strings
  const pairs = queryString.split('&');

  // Loop through each key-value pair string
  // for (const pair of pairs) {
  //     // Split the pair string by '=' to separate key and value
  //     const [key, value] = pair.split('=');

  //     // Decode the key and the value
  //     const decodedKey = decodeURIComponent(key);
  //     const decodedValue = decodeURIComponent(value);

  //     // Add the key-value pair to the object
  //     obj[decodedKey] = decodedValue;
  // }
  // console.log(pairs)
pairs.map((val)=>{
  let [key,value] = val.split("=")
  // console.log(key,value)
  // console.log(val.split("="))
       const decodedKey = decodeURIComponent(key);
      const decodedValue = decodeURIComponent(value);
return obj[decodedKey] = decodedValue;
})

  // Return the resulting object
  return obj;
}

// Example usage:
const queryString1 = '?name=John%20Doe&age=30&city=New%20York&job=Software%20Developer';
const params1 = queryStringToObject1(queryString1);
// console.log(params1);  // Output: { name: 'John Doe', age: '30', city: 'New York', job: 'Software Developer' }


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget)
// console.log(returnedTarget === target);
// Expected output: true


// marge two object 

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function deepMerge(target, source) {
  // Ensure both arguments are objects
  if (!isObject(target) || !isObject(source)) {
    throw new Error('Both target and source should be objects');
  }
  // console.log(isObject(target) , isObject(source))

//  const output = Object.assign({}, target); // Create a shallow copy of target
//    console.log(output)

   let output ={...target}
   console.log("b" ,output)


  for (const key in source) {
    // console.log(key)
    if (source.hasOwnProperty(key)) {
      if (isObject(source[key])) {
        // console.log(!(key in target))
        if (!(key in target)) {
          // If target does not have this key, just assign the source object
          Object.assign(output, { [key]: source[key] });
        } 
        else {
          // If target has the key, merge the objects
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        // If the value is not an object, overwrite with the source value
        Object.assign(output, { [key] : source[key] });
      }
    }
  }

  return output;
}

// Example usage:
const obj1 = {
  a: 1,
  b: {
    c: 3,
    d: 4
  },
  e: {
    f: 6
  }
};

const obj2 = {
  b: {
    d: 40,
    e: 50
  },
  e: {
    g: 70
  },
  h: 100
};

// const mergedObj = deepMerge(obj1, obj2);
// console.log(mergedObj);


function deepFreeze(obj) {
  // First, freeze the object itself
  Object.freeze(obj);

  // Retrieve the property names defined on the object
  const propNames = Object.keys(obj);
  // console.log(propNames)

  // Freeze properties before freezing self

  for (const name of propNames) {
      const value = obj[name];
      // console.log(value)
      // console.log(Object.isFrozen(value))
      // If the property is an object and is not already frozen, recursively freeze it
      if (value && typeof value === 'object' && !Object.isFrozen(value)) {
          deepFreeze(value);
      }
  }

  // Return the frozen object
  return obj;
}

// Example usage:
const person = {
  name: "John",
  address: {
      city: "New York",
      zip: "10001"
  }
};

deepFreeze(person);

// Trying to change the frozen object will fail silently in non-strict mode or throw an error in strict mode
// person.name = "Jane"; // This will not change the name property
// person.address.city = "Los Angeles"; // This will not change the city property

// console.log(person.name); // Output: John
// console.log(person.address.city); // Output: New York

function customTypeOf(value) {
  if (value === null) {
      return 'null';
  }

  if (Array.isArray(value)) {
      return 'array';
  }

  if (typeof value === 'object') {
      if (value instanceof Date) {
          return 'date';
      }
      if (value instanceof RegExp) {
          return 'regexp';
      }
  }

  return typeof value;
}

// Examples
// console.log(customTypeOf(null));        // "null"
// console.log(customTypeOf([]));          // "array"
// console.log(customTypeOf({}));          // "object"
// console.log(customTypeOf(42));          // "number"
// console.log(customTypeOf("hello"));     // "string"
// console.log(customTypeOf(undefined));   // "undefined"
// console.log(customTypeOf(true));        // "boolean"
// console.log(customTypeOf(Symbol()));    // "symbol"
// console.log(customTypeOf(function(){})); // "function"
// console.log(customTypeOf(new Date()));  // "date"
// console.log(customTypeOf(/regex/));     // "regexp"

// console.log([...Array(21).keys()].slice(1))


// Function to simulate an asynchronous task
function asyncTask(id, delay) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(`Task ${id} completed`);
          resolve(`Result of task ${id}`);
      }, delay);
  });
}

// Function to execute N asynchronous tasks concurrently
function executeConcurrentTasks(tasks) {
  // Execute all tasks concurrently using Promise.all
  return Promise.all(tasks)
      .then(results => {
          console.log('All tasks completed');
          return results;
      })
      .catch(error => {
          console.error('One of the tasks failed:', error);
          throw error;
      });
}

// Define N asynchronous tasks
// const tasks = [
//   asyncTask(1, 1000), // Task 1 will complete in 1 second
//   asyncTask(2, 2000), // Task 2 will complete in 2 seconds
//   asyncTask(3, 1500), // Task 3 will complete in 1.5 seconds
//   asyncTask(4, 500),  // Task 4 will complete in 0.5 seconds
// ];

// Execute the tasks concurrently
// executeConcurrentTasks(tasks)
//   .then(results => {
//       console.log('Results:', results);
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });

const unionFunc = (arr1,arr2)=>{
return arr1.filter((val)=>arr2.includes(val))
}
// console.log(unionFunc([1,2,3,4,5,6],[2,3,4,10,11,14]))

const commonFunc = (arr1,arr2)=>{
  let arr3 = [...arr1,...arr2]
arr3.sort((a,b)=>a-b)
return [...new Set(arr3)]
  }
  // console.log(commonFunc([1,2,3,4,15,61],[2,3,4,10,11,14]))

const uniqvalue = (arr,i,ar)=>{
  // console.log(ar)
return arr.filter((val,i,ar)=>ar.indexOf(val)!==i)
}
// console.log(uniqvalue([1,2,3,3,3,4,5,6,6,7,7]))
// Example string
// var sentence = 'This is a sample sentence';
// // console.log(sentence.includes("a"))
// // Finding the index of a substring in the string
// var index = sentence.indexOf('sample');

// // Checking if the substring was found
// if (index !== -1) {
//     console.log('Index of "sample":', index);
// } else {
//     console.log('Substring not found in the string');
// }

const feboNecci =()=>{
let x=0
let y= 1
let fn = x+y
let num =100
// for (let index = fn; fn < num; index++) {
//   fn = x+y
//   x=y
//   y=fn
  
// }
while(fn<num){
  fn =x+y
  x=y
  y=fn
  console.log(fn)

}

return fn

}
// console.log(feboNecci())


// Function to generate Fibonacci sequence up to a given number n
function generateFibonacci(n) {
  // Initialize an array to store Fibonacci numbers
  let fibonacciSequence = [];

  // Handle the edge cases
  if (n <= 0) {
      return fibonacciSequence; // Return empty array for non-positive n
  } else if (n === 1) {
      fibonacciSequence.push(0); // Only one number in the sequence
      return fibonacciSequence;
  }

  // Start with the first two Fibonacci numbers
  fibonacciSequence.push(0); // F(0)
  fibonacciSequence.push(1); // F(1)

  // Generate the sequence up to the nth number
  for (let i = 2; i < n; i++) {
      // The next number is the sum of the two preceding numbers
      let nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextNumber);
  }

  // Return the full Fibonacci sequence up to the nth number
  return fibonacciSequence;
}

// Example usage:
let n = 10; // Change this value to generate a different length of the Fibonacci sequence
let fibonacciSequence = generateFibonacci(n);
// console.log(`Fibonacci sequence up to ${n} numbers:`, fibonacciSequence);

// febonneci recuurtion approch 

let febinocci = (n)=>{
let seq =[]
if(n<= 0){
  return seq
}else if(n===1){
  seq.push(0)
  return seq
}
seq.push(0)
seq.push(1)
// if(seq[i])
for(let i=2; i<n; i++){
  // if(seq[i] > n){
  seq.push(seq[i-1]+seq[i-2])
  // }
}
return seq
}

// console.log(febinocci(11).join(" "))

const rgbChnageToHex =(a,b1,c)=>{
  let r = Number(a).toString(16)
  let g = Number(b1).toString(16)
  let b = Number(c).toString(16)
  console.log(typeof r)
  return `#${r}${g}${b}`

}

// let [r1,setR]=useState("")
// console.log(rgbChnageToHex(r1,45,67))
// console.log(r1)
const changehexToRGB =(hex)=>{
// console.log(hex[1])
let r = parseInt(hex[1]+hex[2],16).toString()
let g = parseInt(hex[3]+hex[4],16).toString()
let b = parseInt(hex[5]+hex[6],16).toString()

console.log(r,g,b)

}
// console.log(changehexToRGB('#e2f2d3'))

function genCharArray(charA, charZ,str) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  // console.log(String.fromCharCode(120))
  // console.log(str.includes("9"))
  for (; i <= j; i++) {
      a.push(String.fromCharCode(i));
  }
  // return a.join("");
  for (const r of a) {
    // console.log(r)
   if (!str.includes(r)){
    return false
   }
  }

  return true
}
// console.log(genCharArray('a', 'z',"abcdefgh ijklmnop qrstuv wxyz")); // ["a", ..., "z"]

// console.log(typeof Number("9") + "10")

// const data1 = [[1],[2],[[[3],[4]]]];

// function flattenArray(arr) {
//   let result = [];

//  let a =  arr.map(element => {
//     if (Array.isArray(element)) {
//       return (flattenArray(element));
//     } else {
//       return element;
//     }
//   });
// //   console.log(a.flat())

//   return a.flat();
// }
// const flattenedData = flattenArray(data1);
// console.log(flattenedData); // Output: [1, 2, 3, 4]




const data1 = [[1],[2],[[[3],[4]]]];

function flattenArray(arr) {
  let result = [];

  let a= arr.map(element => {
    if (Array.isArray(element)) {
      return [...flattenArray(element)];
    } else {
    //   result.push(element);
    return element
    }
  });

  return a.flat();
}

const flattenedData = flattenArray(data1);
console.log(flattenedData); // Output: [1, 2, 3, 4]

const promiseResolve =async (r)=>{
  // console.log(r)
  let b = await new Promise((res,rej)=>{
    // console.log(res("klj"))
    if(r==="res"){
    res("promises resolve")
    }
    else{
      rej("reject")
    }
  })
  return b
}

const fun =(r)=>{
 return promiseResolve(r).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
}
// console.log(b)

const pro = async()=>{
 let b= await "satish"
 return b
}
// console.log(pro())
  return (
 <>
   <div 
 style={{
//  backgroundColor: rgbChnageToHex(r1,45,67)
//  backgroundColor:`#e6d2f3`
 }}
 className='flex justify-center items-center mt-12 flex-col min-hscreen'>
 {/* <div>
  <input type="range" min={0} max={255} onChange={(e)=>setR(e.target.value)}/>
 </div> */}
<h1 className='text-center'> Practice</h1>
<div >
        <input
          type="checkbox"
          className="peer absolute -left-[65rem]"
          id="dn-toggle-bs"
        />
        <label
          htmlFor="dn-toggle-bs"
          className="toggle relative inline-block h-6 w-12 cursor-pointer overflow-clip rounded-full border border-sky-300 bg-sky-300 transition-colors duration-200 peer-checked:border-sky-800 peer-checked:bg-sky-800 peer-disabled:cursor-not-allowed peer-checked:[&_.crater]:opacity-100 peer-checked:[&_.star-1]:left-2 peer-checked:[&_.star-1]:top-3 peer-checked:[&_.star-1]:h-0.5 peer-checked:[&_.star-1]:w-0.5 peer-checked:[&_.star-2]:left-4 peer-checked:[&_.star-2]:top-1.5 peer-checked:[&_.star-2]:h-1 peer-checked:[&_.star-2]:w-1 peer-checked:[&_.star-3]:left-4 peer-checked:[&_.star-3]:top-4 peer-checked:[&_.star-3]:h-0.5 peer-checked:[&_.star-3]:w-0.5 peer-checked:[&_.toggle-handler]:-left-4 peer-checked:[&_.toggle-handler]:translate-x-10 peer-checked:[&_.toggle-handler]:rotate-0 peer-checked:[&_.toggle-handler]:bg-amber-100"
        >
          <span className="toggle-handler relative left-0 top-0 z-10 inline-block h-6 w-6 -rotate-45 rounded-full bg-amber-300 shadow transition-all duration-[400ms]">
            <span className="crater absolute left-1 top-2 h-px w-px rounded-full bg-amber-200 opacity-0 transition-opacity duration-200"></span>
            <span className="crater absolute left-2.5 top-3.5 h-1 w-1 rounded-full bg-amber-200 opacity-0 transition-opacity duration-200"></span>
            <span className="crater absolute left-3 top-1 h-1.5 w-1.5 rounded-full bg-amber-200 opacity-0 transition-opacity duration-200"></span>
          </span>
          <span className="star-1 absolute left-3 top-4 h-4 w-4 rounded-full bg-white transition-all duration-300"></span>
          <span className="star-2 absolute left-6 top-3.5 h-4 w-4 rounded-full bg-white transition-all duration-300"></span>
          <span className="star-3 absolute left-9 top-2 h-5 w-5 rounded-full bg-white transition-all duration-300"></span>
          <span className="sr-only">toggle switch</span>
        </label>
      </div>

    {/* <App1/>   */}
  </div>
 
 <div className="flex justify-center items-center mt-10">
  <button
  // onClick={()=>fun("rej")}
   className="p-4 bg-red-500 text-white rounded-lg">Submit </button>
 </div>
 </>
  );


}


export default Practice




// function App1() {

//     const [dark, setDark] = React.useState(false);

//     const darkModeHandler = () => {
//         setDark(!dark);
//         document.body.classList.toggle("dark");
//     }

//     return (
//         <div className="bg-yellow-100 dark:bg-blue-900">
//             <button onClick={()=> darkModeHandler()}>
//                 {
                    
//                     dark && <IoSunny />
//                 }
//                 {
//                     !dark && <IoMoon />
//                 }
//             </button>
//         </div>
//     );
// }

// export default App;