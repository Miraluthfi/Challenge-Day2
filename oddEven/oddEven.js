let num = prompt("Enter the Number : ");
if (!isNaN(num) && num >= 0) {
  if (num % 2 === 0) {
    console.log("is an odd number");
  } else {
    console.log("is an even number");
  }
} else {
  console.log("wrong input");
}
