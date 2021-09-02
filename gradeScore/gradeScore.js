const score = prompt("Enter the final test score : ");
let result = "";
if (score >= 90) {
  result = "Congratulation! You get A grade";
} else if (score >= 80) {
  result = "You get B grade";
} else if (score >= 70) {
  result = "You get C grade";
} else if (score >= 60) {
  result = "You get D grade";
} else if (score >= 50) {
  result = "Sorry! You get D grade";
} else {
  result = "Sorry! You get F grade and Repeat next year! ";
}
console.log(result);
