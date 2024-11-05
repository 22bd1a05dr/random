// Creating Regular Expressions

// 1. Using the RegExp Constructor
const regex1 = new RegExp('pattern', 'flags');

// 2. Using Literal Notation
const regex2 = /pattern/flags;

// Common Flags
// - `g`: Global search (find all matches)
// - `i`: Case-insensitive search
// - `m`: Multiline search

// Basic Patterns

// Literal Characters
const literal = /abc/; // Matches "abc"

// Character Classes
const charClass = /[abc]/; // Matches "a", "b", or "c"

// Negated Character Classes
const negatedClass = /[^abc]/; // Matches any character not in the set

// Quantifiers
const zeroOrMore = /a*/; // Matches zero or more occurrences of "a"
const oneOrMore = /a+/; // Matches one or more occurrences of "a"
const zeroOrOne = /a?/; // Matches zero or one occurrence of "a"
const exactN = /a{3}/; // Matches exactly 3 occurrences of "a"
const atLeastN = /a{2,}/; // Matches at least 2 occurrences of "a"
const betweenNAndM = /a{2,4}/; // Matches between 2 and 4 occurrences of "a"

// Anchors
const startOfString = /^hello/; // Matches "hello" at the start of a string
const endOfString = /world$/; // Matches "world" at the end of a string

// Groups and Ranges
const groupMatch = /(abc)/; // Matches "abc" as a group
const alternation = /(a|b)/; // Matches "a" or "b"

// Special Characters
const anyChar = /./; // Matches any character except newline
const digit = /\d/; // Matches any digit (equivalent to [0-9])
const nonDigit = /\D/; // Matches any non-digit
const wordChar = /\w/; // Matches any word character (letters, digits, underscores)
const nonWordChar = /\W/; // Matches any non-word character
const whitespace = /\s/; // Matches any whitespace character (spaces, tabs)
const nonWhitespace = /\S/; // Matches any non-whitespace character

// Using Regular Expressions

// Test Method
const regexTest = /hello/i; // Case-insensitive match for "hello"
console.log(regexTest.test("Hello, World!")); // true

// Match Method
const str = "The rain in SPAIN stays mainly in the plain";
const matches = str.match(/ain/g); // Global match for "ain"
console.log(matches); // ["ain", "ain", "ain"]

// Replace Method
const replacedStr = str.replace(/apples/g, "oranges");
console.log(replacedStr); // "I love oranges and oranges are my favorite fruit."

// Split Method
const splitStr = "one,two;three four|five";
const parts = splitStr.split(/[,; |]+/); // Split by commas, semicolons, spaces, or pipes
console.log(parts); // ["one", "two", "three", "four", "five"]

// Example: Validating an Email Address
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(isValidEmail("example@test.com")); // true
console.log(isValidEmail("invalid-email")); // false
