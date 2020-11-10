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