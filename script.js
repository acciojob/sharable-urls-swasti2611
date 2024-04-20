let form = document.getElementById("form");
let name = document.getElementById("name");
let year = document.getElementById("year");
let button = document.getElementById("button");
let url = document.getElementById("url");
let URL = "https://localhost:8080/";

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let updateurl;
    if (name.value !== "" && year.value !== "") {
        updateurl = `${URL}?name=${name.value}&year=${year.value}`;
    } else if (name.value === "" && year.value !== "") {
        updateurl = `${URL}?year=${year.value}`;
    } else if (name.value !== "" && year.value === "") {
        updateurl = `${URL}?name=${name.value}`;
    } else {
        updateurl = `${URL}`;
    }
    url.textContent = updateurl;
});