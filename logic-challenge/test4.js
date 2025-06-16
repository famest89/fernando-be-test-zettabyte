/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  const last = numbers.length + 1;

  for (let i = 0; i <= last; i++) {
    if (!numbers.includes(i)) {
      return i;
    }
  }
}

console.log(result(numbers));
