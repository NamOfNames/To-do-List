import { Search, menuTodo, select } from "./constant.js";
import { Show_AllNotes, Show_DoingNotes, Show_DoneNotes } from "./function.js";

Search.onkeyup = function Search_Notes() {
  if (menuTodo.firstChild.className != "No_Notes") {
    for (let i = 0; i < menuTodo.childElementCount; i++) {
      var txtValue =
        menuTodo.childNodes[i].firstChild.firstChild.lastChild.innerText;
      if (txtValue.toUpperCase().indexOf(Search.value.toUpperCase()) > -1) {
        if (select.value == "DONE") {
          if (menuTodo.firstChild.className != "No_Notes") {
            menuTodo.childNodes[i].style.display = "";
            Show_DoneNotes();
          }
        } else if (select.value == "DOING") {
          if (menuTodo.firstChild.className != "No_Notes") {
            menuTodo.childNodes[i].style.display = "";
            Show_DoingNotes();
          }
        } else {
          menuTodo.childNodes[i].style.display = "";
          Show_AllNotes();
        }
      } else {
        menuTodo.childNodes[i].style.display = "none";
      }
    }
  }
};
