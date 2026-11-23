function calculer(event) {
  event.preventDefault();
  console.log("effectuer une operation");

  const firstNumberInput = document.getElementById("firstNumber");
  const valueOfFirstNumberInput = firstNumberInput.value;
  console.log(valueOfFirstNumberInput);

  const secondNumberInput = document.getElementById("secondNumber");
  const valueOfSecondNumberInput = secondNumberInput.value;
  console.log(valueOfSecondNumberInput);

  const operation = document.getElementById("operation");
  const selectedOperation = operation.value;
  console.log(selectedOperation);

  let result = 0;
  if (selectedOperation == 1) {
    result = 1 * valueOfFirstNumberInput + 1 * valueOfSecondNumberInput;
  } else if (selectedOperation == 2) {
    result = Number(valueOfFirstNumberInput) - Number(valueOfSecondNumberInput);
  } else if (selectedOperation == 3) {
    result = Number(valueOfFirstNumberInput) * Number(valueOfSecondNumberInput);
  } else if (selectedOperation == 4) {
    result = Number(valueOfFirstNumberInput) / Number(valueOfSecondNumberInput);
  } else if (selectedOperation == 5) {
    result = Number(valueOfFirstNumberInput) % Number(valueOfSecondNumberInput);
  }
  console.log(result);

  const name = document.getElementById("name");
  const valueOfNameInput = name.value;
  console.log(valueOfNameInput);

  //concatenation
  let namwAndResult = valueOfNameInput + " " + result;
  namwAndResult = `${valueOfNameInput} ${result}`;

  //longueur d une chaine de caractere

  const length = namwAndResult.length;
  console.log(length);

  document.getElementById("result").innerHTML = namwAndResult;
}
