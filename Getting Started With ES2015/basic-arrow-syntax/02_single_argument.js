// method #1 (longer)
// const square =>(x) {
//   return x * x;
// }
// const = (x) {
//   return square(x) * x;
// }

// method #2 (shorter)
const square = x => x * x;

const cube = x => square(x) * x;