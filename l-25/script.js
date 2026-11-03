// ITERATORS

for (const val of [1, 2, 3, 4, 5]) {
    console.log(val);
}


// CUSTOM ITERATOR

function makeIterator(start = 0, end = Infinity, step = 1) {
    let nextValue = start;

    return {
        next() {
            if (nextValue <= end) {
                let result = { value: nextValue, done: false };
                nextValue += step;
                return result;
            }

            return { value: undefined, done: true };
        }
    };
}

const iterator = makeIterator(1, 5, 1);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// GENERATOR FUNCTION

function* makeGenerator(start = 0, end = Infinity, step = 1) {
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}

const generator = makeGenerator(1, 5, 1);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


// GENERATOR WITH FOR...OF

const generator2 = makeGenerator(1, 5, 1);

for (const val of generator2) {
    console.log(val);
}


// YIELD EXAMPLE

function* example() {
    yield "First";
    yield "Second";
    yield "Third";
    return "Finished";
}

const result = example();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());