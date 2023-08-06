import { BOOKS_PER_PAGE, books } from './data.js'
import { updateShowMoreButton, populateBookItems, populateDropdownSearchGenres, populateDropdownSearchAuthors } from './Abstraction.js'
import { toggleListDialog, showMoreBooks, toggleSearchDialog, toggleSettingsDialog, handleSearchFormSubmit, handleSettingFormSubmit } from './Abstraction.js'

export const html = {
    header: {
        search: document.querySelector('[data-header-search]'),
        settings: document.querySelector('[data-header-settings]')
    },
    list: {
        items: document.querySelector('[data-list-items]'),
        message: document.querySelector('[data-list-message]'),
        button: document.querySelector('[data-list-button]'),
        overlay: document.querySelector('[data-list-active]'),
        blur: document.querySelector('[data-list-blur]'),
        image: document.querySelector('[data-list-image]'),
        title: document.querySelector('[data-list-title]'),
        subtitle: document.querySelector('[data-list-subtitle'),
        description: document.querySelector('[data-list-description]'),
        close: document.querySelector('[data-list-close]')
    },
    search: {
        overlay: document.querySelector('[data-search-overlay]'),
        form: document.querySelector('[data-search-form]'),
        title: document.querySelector('[data-search-title]'),
        genres: document.querySelector('[data-search-genres]'),
        authors: document.querySelector('[data-search-authors]'),
        cancel: document.querySelector('[data-search-cancel]')
    },
    settings: {
        overlay: document.querySelector('[data-settings-overlay]'),
        form: document.querySelector('[data-settings-form]'),
        theme: document.querySelector('[data-settings-theme]'),
        cancel: document.querySelector('[data-settings-cancel]') 
    }
}

/**
 * Functions
 */

populateBookItems(books, 0, BOOKS_PER_PAGE)
populateDropdownSearchGenres()
populateDropdownSearchAuthors()
updateShowMoreButton(books)

/**
 * event listeners
 */
html.search.cancel.addEventListener('click', toggleSearchDialog)
html.search.form.addEventListener('submit', handleSearchFormSubmit)
html.list.close.addEventListener('click', toggleListDialog)
html.list.button.addEventListener('click', showMoreBooks)
html.header.search.addEventListener('click', toggleSearchDialog)
html.header.settings.addEventListener('click', toggleSettingsDialog)
html.settings.cancel.addEventListener('click', toggleSettingsDialog)
html.settings.form.addEventListener('submit', handleSettingFormSubmit)