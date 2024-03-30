function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function createPoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "facba5oe04e0d0e2497c5fe825bta3c4";
  let context =
    "You are a romantic poem expert and you need to create a poem about what love means. It has to contain only 4 paragraphs, and doesn't need to have a Title. It has to be in Portuguese language and in basic HTML.";
  let prompt = `Create a Portuguese Poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating a Portuguese Poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#form-poem");
poemFormElement.addEventListener("submit", createPoem);
