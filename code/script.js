"use strict";

const hider = document.getElementById("hider");
const text = document.querySelector("#text");

hider.addEventListener("click", () => {
  text.style.display = "none";
});

document.body.insertAdjacentHTML(
  "afterbegin",
  "<div id='card'><h2>Vaniko</h2><a href='#'>Go to Profile</a></div>"
);

const card = document.querySelector("#card");
card.style.backgroundColor = "red";
