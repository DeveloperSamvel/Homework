"use strict";

const arr = [
  1,
  2,
  "a",
  true,
  {},
  undefined,
  55,
  false,
  "hi",
  null,
  166,
  NaN,
  "6",
];

// with method parseInt
const parseInteger = (arr) => {
  return arr.filter((item) => item === item * 1);
};

console.log(parseInteger(arr));

// with method parseInt
const parseIntegerVersion2 = (arr) => {
  return arr.filter((item) => item === parseInt(item));
};

// console.log(parseIntegerVersion2(arr));

const parseIntegerVersion3 = (arr) => {
  return arr.filter((item) => item === Number(item));
};

// console.log(parseIntegerVersion3(arr));
