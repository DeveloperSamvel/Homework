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

const parseIntegerVersion3 = (arr) => {
  return arr.filter((item) => {
    return typeof item === "number" && !isNaN(item);
  });
};

console.log(parseIntegerVersion3(arr));
