const buttons = document.querySelectorAll(".choice");
const response = document.getElementById("response");

const messages = {
  yes: "Yeay! Terima kasih sudah sanggup ✦",
  maybe: "Geloookk."
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");

    const answer = button.dataset.answer;
    response.textContent = messages[answer];
  });
});