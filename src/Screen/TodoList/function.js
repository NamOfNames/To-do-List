import { menuTodo, Search, select } from "./constant.js";

export function Search_Notes() {
  if (menuTodo.firstChild.className != "No_Notes") {
    for (let i = 0; i < menuTodo.childElementCount; i++) {
      var txtValue =
        menuTodo.childNodes[i].firstChild.firstChild.lastChild.innerText;
      if (txtValue.toUpperCase().indexOf(Search.value.toUpperCase()) > -1) {
        if (select.value == "ALL");
        menuTodo.childNodes[i].style.display = "";
      } else {
        menuTodo.childNodes[i].style.display = "none";
      }
    }
  }
}

export function Show_AllNotes() {
  for (let i = 0; i < menuTodo.childElementCount; i++) {
    menuTodo.childNodes[i].style.display = "";
  }
  Search_Notes();
}
export function Show_DoneNotes() {
  Show_AllNotes();
  for (let i = 0; i < menuTodo.childElementCount; i++) {
    if (
      menuTodo.childNodes[i].firstChild.firstChild.firstChild.checked === false
    ) {
      menuTodo.childNodes[i].style.display = "none";
    }
  }
}
export function Show_DoingNotes() {
  Show_AllNotes();
  for (let i = 0; i < menuTodo.childElementCount; i++) {
    if (
      menuTodo.childNodes[i].firstChild.firstChild.firstChild.checked === true
    ) {
      menuTodo.childNodes[i].style.display = "none";
    }
  }
}
