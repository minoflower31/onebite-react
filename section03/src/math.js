export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multifly() {
  return {add, sub}
}