import { BOOKS_PER_PAGE, books } from "./data.js";
import {
  updateShowMoreButton,
  populateBookItems,
  populateDropdownSearchGenres,
  populateDropdownSearchAuthors,
} from "./scripts.js";

/**
 * Functions.
 */

populateBookItems(books, 0, BOOKS_PER_PAGE);
populateDropdownSearchGenres();
populateDropdownSearchAuthors();
updateShowMoreButton(books);
