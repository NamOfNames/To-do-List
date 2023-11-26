const menuTodo = document.querySelector(".content");
const btn_SubmitRewriteNotes = document.querySelector(
  ".btn_submit_RewriteNotes"
);
const input_RewriteNotes = document.querySelector(".Rewrite_Notes");
const Theme = document.getElementById("Mode_Theme");
const btn_AddNotes = document.querySelector(".btn_submit_AddNotes");
const input_AddNotes = document.querySelector(".form-control");
const select = document.getElementById("selection");
const Search = document.getElementById("Search_Notes");
const TYPE = {
  done: "DONE",
  doing: "DOING",
  All: "ALL",
};

export {
  menuTodo,
  btn_SubmitRewriteNotes,
  input_RewriteNotes,
  Theme,
  btn_AddNotes,
  input_AddNotes,
  select,
  Search,
  TYPE,
};
