// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


const cardCompanies = [3, 4, 5, 6];
const lengths = [13, 16];


// Check if the array contains a valid or invalid credit card number
const validateCred = arr => {
  let lastDigit = arr[arr.length - 1];
  let newArray = [];
  let sumArray = [];

  // Iterates in reverse excluding the last digit
  for (let i = arr.length - 2; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  // Every other index is doubled
  for (let j = 0; j < newArray.length; j++) {
    if (j % 2 === 0) {
      let doubledValue = newArray[j] * 2;
      // If doubled digit exceeds 9, less 9
      if (doubledValue > 9) {
        sumArray.push(doubledValue - 9);
      }
      else {
        sumArray.push(doubledValue);
      }
    }
    if (j % 2 === 1) {
      sumArray.push(newArray[j]);
    }
  }
  // Sum up all the digits of newArray including lastDigit
  const sum = sumArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue}) + lastDigit;
  // If sum modulo 10 is 0 return true
  if (sum % 10 == 0) {
    return 'Valid'; // Valid credit card number
  }
  else {
    return 'Invalid';  // Invalid credit card number
  }
};


// Test functions:
/*
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false
*/


// Check through the nested array which numbers are invalid
const findInvalidCards = arr => {
  const invalidCards = [];

  for (let i = 0; i < arr.length; i++) {
    if (validateCred(arr[i]) === false) {
      invalidCards.push(arr[i]);
    }
  }

  return invalidCards;
};


// Test functions:
/*
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));
// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5]));
// Should print all of the numbers
console.log(findInvalidCards(batch));
// Test what the mystery numbers are
*/

// Identify credit card company
const idInvalidCardCompanies = arr => {
  // Get the first digit of the card number
  let firstDigit = arr.map((element) => {
    return element[0];
  })

  // Unique first digits of companies
  let companies = firstDigit.map((element) => {
    return element === 3 ? 'AMEX'
      : element === 4 ? 'Visa'
      : element === 5 ? 'Mastercard'
      : element === 6 ? 'Discover'
      : 'Company not found'
  })

  // Removes duplicates from companies array
  companies = companies.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
  })
  return companies;
}


// Test functions:
/*
console.log(idInvalidCardCompanies([invalid1]));
// Should print['visa']
console.log(idInvalidCardCompanies([invalid2]));
// Should print ['mastercard']
console.log(idInvalidCardCompanies(batch));
// Find out which companies have mailed out invalid cards
*/


// Splits input into individual digits in array
const cardNumber = input => {
  let digits = input.toString().split('');
  let numbers = digits.map(Number);
  console.log(validateCred(numbers) + ', ' + idInvalidCardCompanies([numbers]));
}


// Function to reverse the array of digits
const strrev = (str) => {
   if (!str) return '';
   let revstr = '';
   for (i = str.length - 1; i >= 0; i--)
       revstr += str.charAt(i);
   return revstr;
}


// Generate a valid card number: First and consecutive digits
const completeCardNumber = (prefix, length) => {
  let ccnumber = prefix.toString();

  // generate digits
  while (ccnumber.length < (length - 1)) {
    ccnumber += Math.floor(Math.random() * 10);
  }

  // reverse number and convert to int
  let reversedCCnumberString = strrev(ccnumber);

  let reversedCCnumber = new Array();
  for (let i = 0; i < reversedCCnumberString.length; i++) {
    reversedCCnumber[i] = parseInt(reversedCCnumberString.charAt(i));
  }

  // calculate sum
  let sum = 0;
  let pos = 0;

  while (pos < length - 1) {
    let odd = reversedCCnumber[ pos ] * 2;
    if (odd > 9) {
      odd -= 9;
    }
    sum += odd;

    if ( pos !== (length - 2) ) {
      sum += reversedCCnumber[ pos +1 ];
    }
    pos += 2;
  }

  // calculate check digit
  let checkdigit = ((Math.floor(sum / 10) + 1) * 10 - sum) % 10;
  ccnumber += checkdigit;

  return ccnumber;
}


const generateCardNumber = () => {
    let ccnumber = cardCompanies[Math.floor(Math.random() * 4)];
    let digitLength = lengths[Math.floor(Math.random() * 2)];
    let result = completeCardNumber(ccnumber, digitLength);
    console.log(`Credit Card Number: ${result}`);
}


/* // Input your card number
Valid card numbers prints: 'Valid, [card company]'
Invalid card numbers prints: 'Invalid, [card company]' */

cardNumber(3538798084022);

// Prints out a valid card number
generateCardNumber();