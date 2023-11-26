import { select, menuTodo } from "./constant.js";
import { Search_Notes } from "./function.js";

select.addEventListener("change", function Selection() {
  if (select.value == "DONE") {
    if (menuTodo.firstChild.className != "No_Notes") {
      Show_DoneNotes();
    }
  } else if (select.value == "DOING") {
    if (menuTodo.firstChild.className != "No_Notes") {
      Show_DoingNotes();
    }
  } else {
    Show_AllNotes();
  }
});

// Using for loop

function Show_AllNotes() {
  for (let i = 0; i < menuTodo.childElementCount; i++) {
    menuTodo.childNodes[i].style.display = "";
  }
  Search_Notes();
}
function Show_DoneNotes() {
  Show_AllNotes();
  for (let i = 0; i < menuTodo.childElementCount; i++) {
    if (
      menuTodo.childNodes[i].firstChild.firstChild.firstChild.checked === false
    ) {
      menuTodo.childNodes[i].style.display = "none";
    }
  }
}
function Show_DoingNotes() {
  Show_AllNotes();
  for (let i = 0; i < menuTodo.childElementCount; i++) {
    if (
      menuTodo.childNodes[i].firstChild.firstChild.firstChild.checked === true
    ) {
      menuTodo.childNodes[i].style.display = "none";
    }
  }
}
