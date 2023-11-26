import { Theme } from "./constant.js";

Theme.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (Theme.value == "☾") {
    Theme.value = "☼";
  } else {
    Theme.value = "☾";
  }
});
