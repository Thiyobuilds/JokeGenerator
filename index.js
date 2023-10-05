const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById("joke");

const apiKey = "NU3aul9P0Tq28JRppgzGqA==4GUocskrSXx1bmvw";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
        jokeEl.innerText = "Generating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke 😂";
    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An Error Happened, Try Again Later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke 😂";
        console.log(error);
    }
    
}

btnEl.addEventListener("click", getJoke)