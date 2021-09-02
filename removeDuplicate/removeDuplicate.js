const letters = alert("Remove duplicate letter in sentences.");
function removeDuplicate(input) {
  if (input.length <= 1) return input;
  if (input[0] == input[1]) return removeDuplicate(input.substring(1));
  else return input[0] + removeDuplicate(input.substring(1));
}
let A = "helloworld";
//output heloworld
console.log(removeDuplicate(A));
