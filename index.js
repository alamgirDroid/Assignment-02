// 1 Answer
function calculateDifference(a, b) {
  return a - b;
  
}
let result = calculateDifference(10, 4);
console.log(result);

//2 Answer
function isOdd(num) {
  return num % 2 !== 0;
}
let result1 = isOdd(3);
console.log(result1);
let result2 = isOdd(2);
console.log(result2);

//3 Answer

function findMin(array) {
  let minValue = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i] < minValue) {
          minValue = array[i];
      }
  }
  return minValue;
}

const array = [5, 3, 9, 1, 7];
console.log(findMin(array));

// 4 Answer
function filterEvenNumbers(array1) {
  return array1.filter(num => num % 2 === 0);
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterEvenNumbers(array1));

//5 Answer 
function sortArrayDescending(array2) {
  let sortedArr = [...array2];
  sortedArr.sort((a, b) => b - a);

  return sortedArr;
}
const array2 = [5, 2, 9, 1, 7]
console.log(sortArrayDescending(array2)); 

//6 Answer
function lowercaseFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello")); 

//7 Answer
function countVowels(str1) {
  
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
      if (vowels.includes(str1[i])) {
          count++; 
      }
    }
  return count;
}

let str1 = "Hello World!";
console.log(countVowels(str1));

//8 Answer
function findAverage(array3) {
  const sum = array3.reduce((acc, val) => acc + val, 0);
  const average = sum / array3.length;

  return average;
}

const array3 = [10, 20, 30, 40, 50];
console.log(findAverage(array3));  


    
















