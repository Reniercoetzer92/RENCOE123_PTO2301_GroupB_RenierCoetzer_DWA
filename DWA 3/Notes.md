# header 1 #
## header 2 ##
### header 3 ###
#### header 4 ####

// <!-- omit in toc --!> - This will exclude something from the file

Just a normal text.

*incline text*

_incline text_

~~ strikethroug text ~~

***Strong emphasized text***

__Strong emphasized text___ 

[Named Link](http://www.google.fr/ "Named link title") and http://www.google.fr/ or <http://example.com/>

[heading-1](#heading-1 "Goto heading-1")

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  |  \| 

Left aligned Header | Right aligned Header | Center aligned Header
| :--- | ---: | :---:
Content Cell  | Content Cell | Content Cell
Content Cell  | Content Cell | Content Cell

😀😄🤣🤩😔🤕

* ```javascript //if you want to add a javascript snipit
              ```

![picture alt](http://via.placeholder.com/200x150 "Title is optional")

* Bullet list
  
      * Nested bullet

      * Sub-nested bullet etc
    * Bullet list item 2

 1. A numbered list
    1. A nested numbered list
   
    2. Which is numbered
          1. Which is numbered

- [ ] An uncompleted task
- [x] A completed task

<details>
    <summary>Title 1</summary>
    <p>Content 1 Content 1 Content 1 Content 1 Content 1</p>
    </details>

<h3>HTML</h3>
<p> Some HTML code here </p>

 [text goes here](#section_name)
          section_title<a name="section_name"></a>  

/**
 * @description The first name of a person.
 * @type {string}
 */
const firstName = 'John';

/**
 * @description The age of a person.
 * @type {number}
 */
const age = 35;

/**
 * @description The hobby of a person.
 * @type {string}
 */
const hobby = 'Coding';

/**
 * @description Logs the given parameter twice to the console.
 * @param {any} parameter - The value to be logged.
 * @returns {void}
 */
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

/**
 * @description Calls the logTwice function with a formatted message.
 * @returns {void}
 */
const iLoveCoding = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
};

// Call the iLoveCoding function.
iLoveCoding();

// @ts-check

/**
 * A simple function to add two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function addNumbers(a, b) {
  return a + b;
}

// Test the function
const result = addNumbers(5, 10);
console.log(result); // Output: 15

// @ts-check

/**
 * A simple function to add two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function addNumbers(a, b) {
    return a + b;
  }
  
  // Test the function
  const result = addNumbers(5, 10);
  console.log(result); // Output: 15