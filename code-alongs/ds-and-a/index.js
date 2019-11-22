function abc() {
    console.log('what');
}

let map = new Map();

map.set(true, 'This is true');
map.set(abc, 'This is something else');
map.set(abc, 'This is something else 123');

map.set('abc', 'This is something else');

console.log(map.get(abc));

console.log(map.has(abc));
abc();

map.clear();
console.log(map.size);

const qwerty = new Set();
