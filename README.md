# Credit Card Number Validator and Generator

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/Codecademy-FFF0E5?style=for-the-badge&logo=codecademy&logoColor=303347"/>

![Credit Card Checker Logo](https://i.postimg.cc/hvg39DQw/credit-card-checker-banner.png)

<br>

## Project Overview

This project is a JavaScript-based solution to check the validity of credit card numbers using the Luhn algorithm. It optimizes the verification process by utilizing JavaScript functions and loops, allowing for the validation of multiple credit card numbers simultaneously.

<br>

## Project Requirements

- Determine whether a given set of credit card numbers are valid or not.
- The provided credit card numbers are organized into arrays, each with specific prefixes denoting their status: valid for valid numbers, invalid for invalid numbers, and mystery for numbers with uncertain validity.
- Each time an array is checked, it should return `valid` or `invalid`.

<br>

## Usage

To use this credit card validator, follow these steps:

1. Clone the repository to your local machine.
2. Open the main.js file in your preferred JavaScript environment.
3. Input the number you want to validate in `cardNumber()`.
4. Run the `cardNumber()` function to initiate the validation process.
5. At the same time, the `generateCardNumber()` function will run and print out a valid card number.

<br>

## Process: Luhn Algorithm

The validation process employs the Luhn algorithm, also known as the "modulus 10" or "mod 10" algorithm. This algorithm verifies the authenticity of a credit card number by performing a specific formula on its digits. If the result is divisible by 10, the credit card number is considered valid. Here is a visual outline of the steps:

<br>

![Luhn Algorithm](https://i.postimg.cc/kGDQkGZL/Screenshot-127.png)

<br>

## Project Extensions

The project has been extended to include additional features:

### Validate User Input
Users can input a credit card number and receive instant feedback on its validity. The `cardNumber()` function takes a credit card number as input and prints whether the card number is valid `Valid, [ Card Company ]` or not `Invalid, [ Card Company ]` along with the card company's name.

### Generate Valid Card Number
The project can also generate a valid credit card number for any of the accepted credit card companies. The `generateCardNumber()` function generates card numbers for Amex, Visa, Mastercard, or Discover and is validated through Luhn check.

<br>

## Reflections

I find myself immersed in solving this project even when I'm not facing my computer. I needed to understand the Luhn algorithm, as this was my first time hearing this special math. And because this is my first project in JavaScript, I knew I would face setbacks during the development.

Sometimes, I got stuck and things got confusing, especially in creating the card generator function. Thankfully, I got answers from helpful resources in Stack Overflow. Getting to deeply understand functions through reading in MDN Docs fine-tuned the code I wrote.

Feel free to explore, use, and extend this project to suit your credit card validation needs!

<br>

@Aug 2023
