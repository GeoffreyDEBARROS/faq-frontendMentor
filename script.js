const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const answer = question.nextElementSibling;
  const icon = question.querySelector("img");

  question.addEventListener("click", () => {
    answer.classList.toggle("hidden");

    if (icon.src.endsWith("icon-plus.svg")) {
      icon.src = "./assets/images/icon-minus.svg";
    } else {
      icon.src = "./assets/images/icon-plus.svg";
    }
  });
});
