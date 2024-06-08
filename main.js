// Variables
const newJoke = document.getElementById("newJoke");
const jokeOutput = document.getElementById("jokeOutput");

// Get Jokes Data using Free api
const getRandomJokes = async () => {
  let URL = "https://api.chucknorris.io/jokes/random";
  let config = { method: "GET" };
  try {
    let data = await fetch(URL, config);
    let result = await data.json();
    return result;
  } catch (err) {
    return "Error:" + err;
  }
};

const getJoke = async () => {
  let joke = await getRandomJokes();
  if (!joke.value) {
    jokeOutput.textContent = "";
  } else {
    jokeOutput.textContent = joke.value;
  }
};

newJoke.addEventListener("click", getJoke);
