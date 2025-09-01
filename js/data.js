const dataSpan = document.getElementById("data");
let storedData = localStorage.getItem("data");

dataSpan.textContent = storedData;
