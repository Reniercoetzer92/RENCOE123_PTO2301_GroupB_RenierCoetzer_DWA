import { BOOKS_PER_PAGE, books } from "../Modules/data.js";
import {
  populateBookItems,
  updateShowMoreButton,
  populateDropdownSearchGenres,
  populateDropdownSearchAuthors,
} from "../scripts.js";

/**
 * Functions.
 */
populateBookItems(books, 0, BOOKS_PER_PAGE);
populateDropdownSearchGenres();
populateDropdownSearchAuthors();
updateShowMoreButton(books);
