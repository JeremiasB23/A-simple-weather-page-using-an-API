function req() {
  const requester = document.createElement("section");
  const input = document.createElement("input");
  const button = document.createElement("button");

  requester.className = "requester";

  button.textContent = "PRESS";

  requester.appendChild(input);
  requester.appendChild(button);

  let inputValue = "";
  button.addEventListener("click", function () {
    inputValue = input.value;
    //console.log(inputValue);
  });

  document.body.appendChild(requester);
  return inputValue;
}

//document.body.appendChild(req());

export default req();
