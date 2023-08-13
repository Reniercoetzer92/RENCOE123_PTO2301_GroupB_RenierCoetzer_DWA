import {html} from lit
// @ts-check

import { createTask } from './Modules/tasks';
import {getHtml} from './Modules/helpers'

const createAddingHtml = () => {
  const element = getHtml({ dataAttr: "adding"});

  const button = document.createElement("button")
  button.className = "button";
  button.innerText = "Add Task"

  element.appendChild(button)

  const dialog = document.createElement('dialog')
  dialog.className = 'overlay'
  dialog.open = true

  dialog.innerHTML =  html`
      <h2 class="overlay__title">Add Task</h2>
       
      <label class="overlay__field">
        <div>title</div>
        <input class="overlay__input" />
      </label>

      <label class="overlay__field">
        <div>Label</div>
        <input class="overlay__input" />
      </label>

      <div class="overlay__row">
        <button class="button">Cancel</button>
        <button class="button">Delete</button>
      </div>
  `;

  element.appendChild(dialog)

};

createAddingHtml()

const list = [
  createTask({
    title: "Wash the dog",
    urgency: "high",
    due: null,
  }),

  createTask({
    title: "Write code",
    urgency: "high",
    due: null,
  }),
];

list[1].completed = true;