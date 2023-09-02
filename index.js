// Code your solution here
const findMatching = (arr, searchedName) =>
  arr.filter((name) => name.toUpperCase() === searchedName.toUpperCase());

const fuzzyMatch = (arr, char) =>
  arr.filter((name) => name[char.length - 1] === char[char.length - 1]);

const matchName = (arr, searchedName) =>
  arr.filter(({ name }) => name.toUpperCase() === searchedName.toUpperCase());
