const btnEl = document.getElementById("btn-el")
const message = document.getElementById("message-el")

btnEl.addEventListener("click", () => {
    console.log("hello, i'm alive")
    message.textContent = "Hello, I'm alive"

})
