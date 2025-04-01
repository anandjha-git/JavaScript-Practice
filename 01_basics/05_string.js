// // String creation -------------------------
// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
// const string3 = `Yet another string primitive`;
// const string4 = new String("A String object");

// // Character class----------------------------------
// console.log("cat".charAt(1)); ; // gives value "a"
// console.log("cat"[1]);  // gives value "a"
// // When using bracket notation for character access, 
// // attempting to delete or assign a value to these properties will not succeed. 
// // The properties involved are neither writable nor configurable.


// // Comparing String------------------------------------
// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// // Note that all comparison operators, including === and ==, compare strings case-sensitively. 
// // A common way to compare strings case-insensitively is 
// // to convert both to the same case (upper or lower) before comparing them.

// function areEqualCaseInsensitive(str1, str2) {
//     return str1.toUpperCase() === str2.toUpperCase();
//   }

// console.log(areEqualCaseInsensitive('a','A'));

// const areEqualInUpperCase = (str1, str2) =>
//     str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) =>
//     str1.toLowerCase() === str2.toLowerCase();
  
// areEqualInUpperCase("ß", "ss"); // true; should be false
// areEqualInLowerCase("ı", "I"); // false; should be true
  
// const areEqual = (str1, str2, locale = "en-US") =>
//     str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;
  
// areEqual("ß", "ss", "de"); // false
// areEqual("ı", "I", "tr"); // true
  

// // String primitives and String objects--------------------------------------------
// const strPrim = "foo"; // A literal is a string primitive
// const strPrim2 = String(1); // Coerced into the string primitive "1"
// const strPrim3 = String(true); // Coerced into the string primitive "true"
// const strObj = new String("strPrim"); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"

// strPrim.concat(strPrim2);
// console.log(strPrim);

// //Warning: You should rarely find yourself using String as a constructor.

// // String primitives and String objects also give different results when using eval(). 
// // Primitives passed to eval are treated as source code; 
// // String objects are treated as all other objects are, by returning the object.

// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(s1);
// console.log(s2);

// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"

// // A String object can always be converted to its primitive counterpart with the valueOf() method.
// console.log(eval(s2.valueOf())); // returns the number 4
// console.log(eval(s1.valueOf())); // returns the number 4

// // String coercion-----------------------------------------------
// console.log(new String(undefined));//[String: 'undefined']
// console.log(new String(null));//[String: 'null']
// console.log(new String(new String(10n)));//[String: '10']
// console.log(new String(true));//[String: 'true']
// console.log(new String(new String(10)));//[String: '10']

// // Constructor-------------------------------------------------
// // String() constructor
// // The String() constructor creates String objects. When called as a function, it returns primitive values of type String.
// // Note: String() can be called with or without new, but with different effects.
// // String constructor and String function
// const aa = new String("Hello world"); // aa === "Hello world" is false
// const bb = String("Hello world"); // bb === "Hello world" is true
// aa instanceof String; // is true
// bb instanceof String; // is false
// typeof aa; // "object"
// typeof bb; // "string"

// // Using String() to stringify a symbol
// // const sym = Symbol("example");
// // `${sym}`; // TypeError: Cannot convert a Symbol value to a string
// // "" + sym; // TypeError: Cannot convert a Symbol value to a string
// // "".concat(sym); // TypeError: Cannot convert a Symbol value to a string

// const sym1 = Symbol("example");
// console.log(String(sym1)); // "Symbol(example)"

// // Static methods--------------------------------------------------


// // String.fromCharCode()++++++++++++++++++++++++++++++++++++++++++
// // The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.
// String.fromCharCode(65, 66, 67); // returns "ABC"
// String.fromCharCode(0x2014); // returns "—"
// String.fromCharCode(0x12014); // also returns "—"; the digit 1 is truncated and ignored
// String.fromCharCode(8212); // also returns "—"; 8212 is the decimal form of 0x2014
// console.log(String.fromCharCode(65));

// // String.fromCodePoint()++++++++++++++++++++++++++++++++++++
// // The String.fromCodePoint() static method returns a string created from the specified sequence of code points.
// String.fromCodePoint(42); // "*"
// String.fromCodePoint(65, 90); // "AZ"
// console.log(String.fromCodePoint(0x404)); // "\u0404" === "Є"
// String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
// String.fromCodePoint(194564); // "\uD87E\uDC04"
// String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
// console.log(String.fromCodePoint(0x1f303));// or 127747 in decimal

// // String.raw()++++++++++++++++++++++++++++++++++
// // Returns a string created from a raw template string.
// const filePath = String.raw`C:\Development\profile\about.html`;
// console.log(`The file was uploaded from: ${filePath}`);//The file was uploaded from: C:\Development\profile\about.html
// String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
// // 'test' is treated as ['t', 'e', 's', 't']. The following is equivalent to `t${0}e${1}s${2}t`


// // Instance properties-------------------------------------
// // These properties are defined on String.prototype and shared by all String instances.

// // Object.prototype.constructor+++++++++++++++++++++
// // The constructor function that created the instance object. For String instances, the initial value is the String constructor.
// // These properties are own properties of each String instance.
// // String: length++++++++++++++++++++++++++++++++
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(`${text} ${text.length}`);

// // String.prototype.at()+++++++++++++
// // Returns the character (exactly one UTF-16 code unit) at the specified index. 
// // Accepts negative integers, which count back from the last string character.

// const sentence = "The quick brown fox jumps over the lazy dog.";

// let index = 5;

// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// // Expected output: "An index of 5 returns the character u"

// index = -4;

// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// // Expected output: "An index of -4 returns the character d"

// // String.prototype.charAt()+++++++++++++++++++
// // Returns the character (exactly one UTF-16 code unit) at the specified index.
// index = 4;
// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// // Expected output: "The character at index 4 is q"

// // String.prototype.charCodeAt()+++++++++++++++
// // Returns a number that is the UTF-16 code unit value at the given index.

// console.log(
//   `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
//     index,
//   )}`,
// );
// // Expected output: "Character code 113 is equal to q"

// // String.prototype.codePointAt()+++++++++++++++++
// "ABC".codePointAt(0); // 65
// "ABC".codePointAt(0).toString(16); // 41
// // "ABC".codePointAt(0) returns the Unicode code point of the character at index 0, which is 'A'. The Unicode code point for 'A' is 65.
// // 65.toString(16) converts the number 65 to a hexadecimal string. The hexadecimal representation of 65 is "41".

// const icons = "☃★♲";

// console.log(icons.codePointAt(1));
// // Expected output: "9733"

// // Property Access [ ]
// const name = "W3Schools";
// let letter = name[2]; //S
// // Property access might be a little unpredictable:

// // It makes strings look like arrays (but they are not)
// // If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// // It is read only. str[0] = "A" gives no error (but does not work!)

// // String.prototype.concat()+++++++++++++++++++++++
// // Combines the text of two (or more) strings and returns a new string.
// const str1 = "Hello";
// const str2 = "World";

// console.log(str1.concat(" ", str2));
// // Expected output: "Hello World"

// console.log(str2.concat(str1));
// // Expected output: "WorldHello"

// const greetList = ["Hello", " ", "Venkat", "!"];
// "".concat(...greetList); // "Hello Venkat!"
// console.log("Hi ".concat(...greetList)); // "Hi Hello Venkat!"

// // String.prototype.endsWith()++++++++++++++++
// // Determines whether a string ends with the characters of the string searchString.
//  str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));
// // Expected output: true

// console.log(str1.endsWith("best", 17));
// // Expected output: true
// // The length argument is 17, so the string is treated as "Cats are the best" (the first 17 characters).
// // The truncated string ends with "best".
// // Output: true.

//  str2 = "Is this a question?";

// console.log(str2.endsWith("question"));
// // Expected output: false

// // String.prototype.includes()++++++++++++++++++++
// // Determines whether the calling string contains searchString.
// "Blue Whale".includes("blue"); // returns false
// "Blue Whale".toLowerCase().includes("blue"); // returns true

// const str = "To be, or not to be, that is the question.";
// console.log(str.includes("To be")); // true
// console.log(str.includes("")); // true

// const sentences = "The quick brown fox jumps over the lazy dog.";

// const word = "fox";

// console.log(
//   `The word "${word}" ${
//     sentences.includes(word) ? "is" : "is not"
//   } in the sentence`,
// );
// // Expected output: "The word "fox" is in the sentence"

// // String.prototype.indexOf()+++++++++++++
// // Returns the index within this string of the first occurrence of searchValue, or -1 if not found.
// "Blue Whale".indexOf("Blue"); // returns  0
// "Blue Whale".indexOf("Wale"); // returns -1
// "Blue Whale".indexOf("blue"); // returns -1
// console.log("hello world".indexOf("o", 5)); // returns 7

// // String.prototype.isWellFormed()+++++++++++++++++++++++
// // Returns a boolean indicating whether this string contains any lone surrogates.
// // Lone surrogates are invalid Unicode code points that can occur when strings are improperly encoded or manipulated.
// // A surrogate pair consists of a high surrogate (in the range 0xD800 to 0xDBFF) and a low surrogate (in the range 0xDC00 to 0xDFFF).
// const strr1 = "Hello, world!";
// console.log(strr1.isWellFormed()); // true
// const strr2 = "Hello\uD800World"; // \uD800 is a lone high surrogate
// console.log(strr2.isWellFormed()); // false
// const strr3 = "Hello\uD83D\uDE00"; // \uD83D\uDE00 is a valid surrogate pair (😀)
// console.log(strr3.isWellFormed()); // true
// const strr4 = "Hello\uDE00"; // \uDE00 is a lone low surrogate
// console.log(strr4.isWellFormed()); // false

// // String.prototype.lastIndexOf()+++++++++++++++++++++++++++++++++++++++
// // Returns the index within this string of the last occurrence of searchValue, or -1 if not found.
// "canal".lastIndexOf("a"); // returns 3
// "canal".lastIndexOf("a", 2); // returns 1
// "canal".lastIndexOf("a", 0); // returns -1
// "canal".lastIndexOf("x"); // returns -1
// // 'hello world hello'.lastIndexOf('world', 4) returns -1 — because, while the substring world does occurs at index 6, that position is not less than or equal to 4.
// // 'hello world hello'.lastIndexOf('hello', 99) returns 12 — because the last occurrence of hello at a position less than or equal to 99 is at position 12.
// // 'hello world hello'.lastIndexOf('hello', 0) and 'hello world hello'.lastIndexOf('hello', -5) both return 0 — because both cause the method to only look for hello at index 0.

// // String.prototype.localeCompare()+++++++++++++
// // Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.
// const sstr1 = "apple";
// const sstr2 = "banana";

// console.log(sstr1.localeCompare(sstr2)); // -1 (or a negative number)
// // "apple" comes before "banana" in alphabetical order, so the result is negative.

// console.log("c".localeCompare("b"));
// // Expected output: 1
// console.log("banana".localeCompare("banana"));
// // Expected output: 0

// // String.prototype.match()++++++++++++++++++++++
// // Used to match regular expression regexp against a string.
// const strr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// const regexp = /[A-E]/gi;
// const matches = strr.match(regexp);

// console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// String.prototype.matchAll()+++++++++++++++++
// Returns an iterator of all regexp's matches.
// const st = "Hello world! Hello everyone!";
// const regex = /Hello/g;

// const matches1 = st.matchAll(regex);

// for (const match of matches1) {
//   console.log(match);
// }
// ["Hello", index: 0, input: "Hello world! Hello everyone!"]
// ["Hello", index: 13, input: "Hello world! Hello everyone!"]

// String.prototype.normalize()+++++++++++++++
// Returns the Unicode Normalization Form of the calling string value.
// const str1 = "\u00E9";          // "é" (composed)
// const str2 = "\u0065\u0301";    // "é" (decomposed)

// console.log(str1 === str2); // false (different representations)
// console.log(str1.normalize() === str2.normalize()); // true (both become "NFC")

// const str = "Café"; // "Café" in NFC

// // Decompose the string into NFD
// const nfdStr = str.normalize("NFD");
// console.log(nfdStr); // "Cafe\u0301" (displayed as "Café")

// // Revert to NFC
// console.log(nfdStr.normalize("NFC")); // "Café"

// const ligature = "ﬃ"; // Ligature "ffi" (U+FB03)

// // Compatibility decomposition replaces ligature with "ffi"
// console.log(ligature.normalize("NFKD")); // "ffi"

// //const input1 = "café";
// const input2 = "cafe\u0301";
// console.log(input1 === input2.normalize()); // true (after normalization)

// String.prototype.padEnd()+++++++++++++++++++
// Pads the current string from the end with a given string and returns a new string of the length targetLength.

// "abc".padEnd(10); // "abc       "
// "abc".padEnd(10, "foo"); // "abcfoofoof"
// "abc".padEnd(6, "123456"); // "abc123"
// "abc".padEnd(1); // "abc"

// String.prototype.padStart()++++++++++++++++
// Pads the current string from the start with a given string and returns a new string of the length targetLength.
// "abc".padStart(10); // "       abc"
// "abc".padStart(10, "foo"); // "foofoofabc"
// "abc".padStart(6, "123465"); // "123abc"
// "abc".padStart(8, "0"); // "00000abc"
// "abc".padStart(1); // "abc"

// String.prototype.repeat()++++++++++++++++++++
// Returns a string consisting of the elements of the object repeated count times.
// "abc".repeat(-1); // RangeError
// "abc".repeat(0); // ''
// "abc".repeat(1); // 'abc'
// "abc".repeat(2); // 'abcabc'
// "abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
// "abc".repeat(1 / 0); // RangeError
// const mood = "Happy! ";

// console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

// String.prototype.replace()+++++++++++++++++++++++
// Used to replace occurrences of searchFor using replaceWith. 
// searchFor may be a string or Regular Expression, and replaceWith may be a string or function.
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", "my"));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /Dog/i;
// console.log(paragraph.replace(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your dog!"
// "xxx".replace("", "_"); // "_xxx"
// const date = "2023-10-05";
// // Swap day and month using regex groups
// console.log(date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")); 
// // Output: "05/10/2023"

// const str = "3 apples and 5 oranges";
// const doubled = str.replace(/\d+/g, (match) => 2 * Number(match));
// console.log(doubled); 
// // Output: "6 apples and 10 oranges"

// const str = "ID: 123, Name: John";
// str.replace(/(\d+)/, (match, p1) => `USER_${p1}`);
// Output: "ID: USER_123, Name: John"


// String.prototype.replaceAll()++++++++++++++++++++++
// Used to replace all occurrences of searchFor using replaceWith. 
// searchFor may be a string or Regular Expression, and replaceWith may be a string or function.
// const str = "apple, banana, apple";
// console.log(str.replaceAll("apple", "orange"));
// // Output: "orange, banana, orange"

// const str = "Hello world! Hello everyone!";
// console.log(str.replaceAll(/Hello/g, "Hi"));
// // Output: "Hi world! Hi everyone!"

// const str = "APPLE Apple apple";
// console.log(str.replaceAll(/apple/g, "orange"));
// // Output: "APPLE Apple orange"

// const str = "APPLE Apple apple";
// console.log(str.replaceAll(/apple/gi, "orange"));
// // Output: orange orange orange"

// const str = "2023-10-05";
// console.log(str.replaceAll(/-/g, "/"));
// // Output: "2023/10/05"

// const str = "3 apples and 5 oranges";
// const doubled = str.replaceAll(/\d+/g, (match) => 2 * Number(match));
// console.log(doubled);
// // Output: "6 apples and 10 oranges"

// console.log("aabbcc".replaceAll(/b/g, ".")); //aa..cc

// String.prototype.search()++++++++++++++++++
// Search for a match between a regular expression regexp and the calling string.
// const str = "Hello, world!";
// console.log(str.search("world")); // 7 (index of "world")
// console.log(str.search("xyz"));   // -1 (no match)

// const str = "Hello, WORLD!";
// console.log(str.search(/world/i)); // 7 (ignores case)

// const str = "Price: $100";
// console.log(str.search(/\d+/)); // 8 (index of "100")

// const str = "file.txt";
// console.log(str.search(/\.txt/)); // 4 (index of ".txt")

// const str = "Hello, World!";
// console.log(str.search("world"));    // -1 (case-sensitive)
// console.log(str.indexOf("World"));   // 7 (exact match)

// const str = "file.txt";
// console.log(str.search("."));    // 0 (matches any character)
// console.log(str.search("\\."));  // 4 (matches literal ".")

// const url = "https://example.com";
// const protocolIndex = url.search(/^https?:\/\//);
// console.log(protocolIndex); // 0 (matches "https://")

// String.prototype.slice()++++++++++++++
// Extracts a section of a string and returns a new string.