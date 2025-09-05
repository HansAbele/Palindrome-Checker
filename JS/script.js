const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input === "") {
    alert("Please input a value")
    return;
  };
  const text = input.value;
  const cleanedText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedText = cleanedText.split("").reverse().join("");
  result.innerText =
    cleanedText === reversedText
      ? ` ${text} is a palindrome`
      : ` ${text} is not palindrome`;
});
