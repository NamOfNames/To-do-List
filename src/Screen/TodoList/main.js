import { menuTodo, select, input_RewriteNotes } from "./constant.js";
import { Show_DoingNotes, Show_DoneNotes } from "./function.js";

function getTodoList(data) {
  const Notes = document.createElement("div");
  Notes.className = "notes";

  const Form = document.createElement("div");
  Form.className = "form-check";

  const Text = document.createElement("div");
  Text.className = "Text";

  const Input = document.createElement("input");
  Input.className = "form-check-input";
  Input.type = "checkbox";
  Input.id = data[0].id;
  Input.addEventListener("click", () => {
    if (select.value == "DONE") {
      if (menuTodo.firstChild.className != "No_Notes") {
        Show_DoneNotes();
      }
    } else if (select.value == "DOING") {
      if (menuTodo.firstChild.className != "No_Notes") {
        Show_DoingNotes();
      }
    }
  });

  const Label = document.createElement("label");
  Label.className = "form-check-label";
  Label.htmlFor = data[0].id;
  Label.innerText = data[0].task;

  const Change = document.createElement("div");
  Change.className = "Change";

  const Rewrite = document.createElement("input");
  Rewrite.type = "button";
  Rewrite.value = "🖊";
  Rewrite.id = data[0].id;
  Rewrite.dataset.toggle = "modal";
  Rewrite.dataset.target = "#RewriteNotes_ModalCenter";
  Rewrite.addEventListener("click", () => {
    localStorage.setItem("Number", Rewrite.id);
    console.log();
    input_RewriteNotes.innerHTML =
      menuTodo.childNodes[
        Rewrite.id
      ].childNodes[0].childNodes[0].childNodes[1].innerText;
  });

  const Trash_Bin = document.createElement("input");
  Trash_Bin.type = "button";
  Trash_Bin.value = "🗑";
  Trash_Bin.addEventListener("click", () => {
    Notes.parentNode.removeChild(Notes);
  });

  const Line = document.createElement("div");
  Line.className = "line";

  Text.appendChild(Input);
  Text.appendChild(Label);
  Change.appendChild(Rewrite);
  Change.appendChild(Trash_Bin);
  Form.appendChild(Text);
  Form.appendChild(Change);
  Notes.appendChild(Form);
  Notes.appendChild(Line);
  menuTodo.appendChild(Notes);
}

setInterval(function () {
  if (menuTodo.childNodes.length === 0) {
    Image = document.createElement("img");
    Image.className = "No_Notes";
    Image.src =
      "../../../assets/images/TodoListImages/Detective-check-footprint 1.png";
    menuTodo.appendChild(Image);
  } else {
  }
}, 100);

export { getTodoList };
