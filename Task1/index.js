function findMiddleCharacter() {
  let input = prompt("Please enter a word:");

  if (input === null) {
    alert("Canceled.");
    return;
  }

  input = input.trim();

  if (input.length === 0) {
    alert("Invalid value");
    return;
  }

  const length = input.length;
  const middle = Math.floor(length / 2);

  let result;

  if (length % 2 === 0) {
    result = input.substring(middle - 1, middle + 1);
  } else {
    result = input.charAt(middle);
  }

  alert(result);
}

findMiddleCharacter();
