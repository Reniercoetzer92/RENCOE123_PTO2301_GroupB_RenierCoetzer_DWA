import { toggleListDialog, showMoreBooks, toggleSearchDialog, toggleSettingsDialog, handleSearchFormSubmit, handleSettingFormSubmit } from './scripts.js'
import { html } from './querySelectors.js'

/**
 * event listeners.
 */
html.search.cancel.addEventListener('click', toggleSearchDialog)
html.search.form.addEventListener('submit', handleSearchFormSubmit)
html.list.close.addEventListener('click', toggleListDialog)
html.list.button.addEventListener('click', showMoreBooks)
html.header.search.addEventListener('click', toggleSearchDialog)
html.header.settings.addEventListener('click', toggleSettingsDialog)
html.settings.cancel.addEventListener('click', toggleSettingsDialog)
html.settings.form.addEventListener('submit', handleSettingFormSubmit)