function* generator(){
    yield 'hello';
    yield 'world';
    return 'return';
}

const genObj = generator();
console.log(genObj);
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());

console.log(generator())
console.log(generator().next())
console.log(generator().next())
console.log(generator().next())

const newGenObj = genObj[Symbol.iterator]()
console.log(genObj === newGenObj)

console.log(newGenObj.next())

const arr = [1,2,3]
const foo = arr[Symbol.iterator]();

// console.log(foo.next())
// console.log(foo.next())
// console.log(foo.next())
// console.log(foo.next())

for (const value of foo) {
    console.log(value)
}

const newArray = [...generator()]
console.log(newArray)

function* iterNum () {
    let i = 1;
    while (true) {
        yield i++
    }
}

const iterGen = iterNum();
console.log(iterGen.next())
console.log(iterGen.next())
console.log(iterGen.next())