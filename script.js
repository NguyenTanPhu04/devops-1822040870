
const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");

helloButton.addEventListener("click", function () {
    message.textContent = "Chúc mừng! JavaScript đã hoạt động thành công.";
});
