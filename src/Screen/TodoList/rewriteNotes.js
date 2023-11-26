import {
  menuTodo,
  btn_SubmitRewriteNotes,
  input_RewriteNotes,
} from "./constant.js";

btn_SubmitRewriteNotes.addEventListener("click", () => {
  if (input_RewriteNotes.value === "") {
    alert("vui lòng nhập vào input");
  } else {
    const Notes_Num = localStorage.getItem("Number");
    for (let i = 0; i < menuTodo.childNodes.length; i++) {
      if (
        menuTodo.childNodes[i].childNodes[0].childNodes[0].childNodes[0].id ==
        Notes_Num
      ) {
        menuTodo.childNodes[
          i
        ].childNodes[0].childNodes[0].childNodes[1].innerText =
          input_RewriteNotes.value;
      }
    }
    input_RewriteNotes.value = "";
  }
});
