import { getTodoList } from "./main.js";
import { menuTodo, btn_AddNotes, input_AddNotes } from "./constant.js";

btn_AddNotes.addEventListener("click", function addTodoList() {
  fetch("../../../src/Data/TodoListData.json")
    .then((res) => res.json())
    .then((data) => {
      if (input_AddNotes.value === "") {
        alert("vui lòng nhập vào input");
      } else {
        if (menuTodo.childNodes[0].className == "No_Notes") {
          menuTodo.removeChild(Image);
        }
        const newItem = {
          // private key
          id: menuTodo.childNodes.length,
          task: input_AddNotes.value,
        };
        data.push(newItem);
        input_AddNotes.value = "";
        getTodoList(data);
      }
    });
});
