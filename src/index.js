function createPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Love Love Love",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#form-poem");
poemFormElement.addEventListener("submit", createPoem);
