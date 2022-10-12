const jContainer = document.getElementById("saka");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?blacklistFlags=religious,political";



let sakaGetir = () => {


    jContainer.classList.remove("fade");
    fetch(url)
        .then(data => data.json())
        .then(item => {

            jContainer.textContent = `${item.joke}`;
            jContainer.classList.add("fade");

        });

}
btn.addEventListener("click", sakaGetir);
sakaGetir();