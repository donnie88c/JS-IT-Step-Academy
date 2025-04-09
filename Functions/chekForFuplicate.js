const arr = [1, 2, 3, 4, 5];

let checked = arr.length !== new Set(arr).size;
console.log(checked);