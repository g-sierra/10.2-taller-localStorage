const btn = document.getElementById("buttonText");

btn.addEventListener("click", () => {
    let dataValue = document.getElementById("inputText").value;
    localStorage.setItem("data", dataValue)
});
