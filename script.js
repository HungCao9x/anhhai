const originalNumbers = document.getElementById("originalNumbers");
const resultNumbers = document.getElementById("resultNumbers");
const submitButton = document.getElementById("submitButton");
const refreshButton = document.getElementById("refreshButton");

submitButton.addEventListener("click", function() {
  let numbers = originalNumbers.value.split(",");
  let missingNumbers = [];
  
  for (let i = 0; i <= 99; i++) {
    if (!numbers.includes(i.toString().padStart(2, '0'))) {
      missingNumbers.push(i.toString().padStart(2, '0'));
    }
  }
  
  missingNumbers.splice(Math.floor(Math.random() * missingNumbers.length), 1);
  numbers = numbers.concat(missingNumbers).sort();
  
  resultNumbers.value = numbers.join(",");
});
refreshButton.addEventListener("click", function() {
  location.reload();
});
