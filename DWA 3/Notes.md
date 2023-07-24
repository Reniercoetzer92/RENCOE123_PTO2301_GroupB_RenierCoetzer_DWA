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

# Gherkin is a line-oriented language that uses indentation to define structure.Either spaces or tabs may be used for indentation. One line should be treated as one step and mostly it starts with a keyword . #

# a line that starts with a hash sign (#) is treated as comment

# Gherkin Syntax
## Feature:
### Scenario: 
      Given:
      when:
      and:
      Then:

## Feature: Tally count App - Increment Count with "+"

Scenario: User increments the tally count using the "+" button
    Given the user is on the main screen of the Tally App
    When the user selects a tally to update
    And the user taps the "+" button
    Then the tally count should increase by 1

## Feature: Tally count App - Rapidly Increment Count with "+"

Scenario: User rapidly increments the tally count using the "+" button
    Given the user is on the main screen of the Tally App
    When the user selects a tally to update
    And the user holds down the "+" button for 2 seconds
    Then the tally count should increase rapidly at a consistent rate

## Feature: Tally count App - Customizable Increment Value with "+"

Scenario: User increments the tally count with a custom value using the "+" button
    Given the user is on the main screen of the Tally App
    And the user has selected a tally with a custom increment value of 5
    When the user taps the "+" button
    Then the tally count should increase by 5

## Feature: Tally count App - Undo Last Increment with "+"

Scenario: User undoes the last increment using the "+" button
    Given the user is on the main screen of the Tally App
    When the user selects a tally to update
    And the user taps the "+" button twice
    And the user taps the "Undo" button
    Then the tally count should revert to the previous value

## Feature: Tally count App - Increment Multiple Tallies with "+"

Scenario: User increments multiple tallies using the "+" button
    Given the user is on the main screen of the Tally App
    When the user selects multiple tallies
    And the user taps the "+" button
    Then the count of all selected tallies should increase by 1

## Feature: Tally count App - Visual Feedback for "+"

Scenario: User receives visual feedback when using the "+" button
    Given the user is on the main screen of the Tally App
    When the user selects a tally to update
    And the user taps the "+" button
    Then a visual indicator, such as a brief animation or color change, should appear to confirm the button press

### Feature: Tally App - Decrement Count with "-"

Scenario: User decrements the tally count using the "-" button
    Given the user is on the main screen of the Tally App
    When the user selects a tally to update
    And the user taps the "-" button
    Then the tally count should decrease by 1

### Feature: Tally App - Rapidly Decrement Count with "-"

Scenario: User rapidly decrements the tally count using the "-" button
    Given the user is on the main screen of the Tally App
    When the user selects a tally to update
    And the user holds down the "-" button for 2 seconds
    Then the tally count should decrease rapidly at a consistent rate

### Feature: Tally App - Customizable Decrement Value with "-"

Scenario: User decrements the tally count with a custom value using the "-" button
    Given the user is on the main screen of the Tally App
    And the user has selected a tally with a custom decrement value of 5
    When the user taps the "-" button
    Then the tally count should decrease by 5

### Feature: Tally App - Undo Last Decrement with "-"

Scenario: User undoes the last decrement using the "-" button
    Given the user is on the main screen of the Tally App
    When the user selects a tally to update
    And the user taps the "-" button twice
    And the user taps the "Undo" button
    Then the tally count should revert to the previous value

### Feature: Tally App - Decrement Multiple Tallies with "-"

Scenario: User decrements multiple tallies using the "-" button
    Given the user is on the main screen of the Tally App
    When the user selects multiple tallies
    And the user taps the "-" button
    Then the count of all selected tallies should decrease by 1

### Feature: Tally App - Visual Feedback for "-"

Scenario: User receives visual feedback when using the "-" button
    Given the user is on the main screen of the Tally App
    When the user selects a tally to update
    And the user taps the "-" button
    Then a visual indicator, such as a brief animation or color change, should appear to confirm the button press