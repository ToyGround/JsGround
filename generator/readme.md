# Generator 제너레이터

**키워드** : `*` `yield` `next()` `iterator` `iterable` `Symbole.iterator`

외부로 실행 권한을 넘김



#### 제너레이터 기초 & next 메서드

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

