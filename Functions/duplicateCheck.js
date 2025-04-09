const arr = [1, 2, 3, 4, 5];

let duplicate = arr.length !== new Set(arr).size;
console.log(duplicate);
