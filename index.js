const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "t4MIlb9rHF4xrrmm8/WAAA==64OnUxtgDMaJIVsS";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function getJoke() {
  try {
    jokeEl.innerText = "updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "an error happened";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  }
}

btnEl.addEventListener("click", getJoke);
