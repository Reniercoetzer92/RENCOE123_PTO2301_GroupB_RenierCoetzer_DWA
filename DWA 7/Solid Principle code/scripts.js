// @ts-check

import { state, Task } from "./Modules/state";
import { addTaskToHtml,  updateHtmlTask } from "./Modules/tasks.js";

window.addEventListener("error", () => {
  document.body.innerHTML = "Something went very very wrong, Please Refresh!"
})

addTaskToHtml

addTaskToHtml("test");
updateHtmlTask("test", { title: "wash the dog", });