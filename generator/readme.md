# Generator 제너레이터

**키워드** : `*` `yield` `next()` `iterator` `iterable` `Symbole.iterator`

**내가 생각하는 제너레이터 특징**

- 외부로 실행 권한을 넘김
- 값을 하나씩 넘김



### 제너레이터 기초 & next 메서드

제너레이터는 객체로 만들어야한다.

```javascript
function* generator(){
  yield 'hello';
  yield 'world';
  return 'return';
}
```

위와같은 제너레이터 함수를 만든다.

제너레이터를 호출하는 객체로 만든다.

```javascript
function* generator(){
  yield 'hello';
  yield 'world';
  return 'return';
}

const gen = generator();
```

`const gen = generator()` 는 `Object [Generator]` 로 표기 된다.

제너레이터 객체에는 `next`라는 메서드가 존재

```javascript
const gen = generator();

console.log(gen) // Object [Generator]
console.log(gen.next()) //{ value: 'hello', done: false }
console.log(gen.next()) //{ value: 'world', done: false }
console.log(gen.next()) //{ value: 'return', done: true }

```

💡`const gen = generator()` 가 아닌 generator().next()를 하면?

```javascript
const gen = generator();

console.log(gengenerator() // Object [Generator]
console.log(generator().next()) //{ value: 'hello', done: false }
console.log(generator().next()) //{ value: 'hello', done: false }
console.log(generator().next()) //{ value: 'hello', done: false }
```



### iterator & iterable 이해

제너레이터 객체는 반복자 iterator 이다.

- next 메서드, `{value, done}` 객체를 반환
- `done` 은 모든 호출이(next메서드 호출) 종료되었을때 `true` 



```javascript
function* generator(){
  yield 'hello';
  yield 'world';
  return 'return';
}

const gen = generator();
const newGen = gen[Symbol.iterator]()

console.log(gen === newGen) // true
```

`gen` 과 `newGen` 은 같다.

그렇다면 gen객체의 next 메서드를 실행하면 newGen객체는?

```javascript
const gen = generator();
const newGen = gen[Symbol.iterator]()

console.log(gen.next()) //{ value: 'hello', done: false }
console.log(gen.next()) //{ value: 'world', done: false }
console.log(gen.next()) //{ value: 'return', done: true }

console.log(newGen.next()) //{ value: undefined, done: true }
```

`gen`과 `newGen` 은 같기 때문에, 기존 `gen.next()` 를 종료 했기 때문에 

`newGen`도 마찬가지로 `done`의 값은 `true`가 나온다.



#### Array 배열도 Iterable

```javascript
const arr = [1,2,3]
const foo = arr[Symbol.iterator]();

console.log(foo.next()) // { value: 1, done: false }
console.log(foo.next()) // { value: 2, done: false }
console.log(foo.next()) // { value: 3, done: false }
console.log(foo.next()) // { value: undefined, done: true }

```

배열도 iterable 이다.

```javascript
const arr = [1,2,3]
const foo = arr[Symbol.iterator]();

for (const value of foo) {
    console.log(value)
}
// 1,2,3 
```

배열이 iterable 이기 때문에 제너레이터도 `spread operator` 사용 가능하다.

```javascript
function* generator(){
  yield 'hello';
  yield 'world';
  return 'return';
}

const newArray = [...generator()]

console.log(newArray) // [ 'hello', 'world' ]
```



#### 제너레이터 무한반복?

```javascript
function* iterNum () {
    let i = 1;
    while (true) {
        yield i++
    }
}

const iterGen = iterNum();

console.log(iterGen.next()) // { value: 1, done: false }
console.log(iterGen.next()) // { value: 2, done: false }
console.log(iterGen.next()) // { value: 3, done: false }
```

기존의 while 이라면 무한 반복이 일어 났을건데, 제너레이터는 하나씩 값을 넘기는 특징이 있다.

