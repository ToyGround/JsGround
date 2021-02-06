const USERS = [
  {id: 1, name: '홍길동', age: 20},
  {id: 2, name: '김철수', age: 10},
  {id: 3, name: '이철수', age: 15},
  {id: 4, name: '박철수', age: 30},
];

const getUserById = id => {
  return new Promise((res) => {
    setTimeout(() => {
      const matchUser = USERS.find(user => user.id === id);
      res(matchUser);
    }, 500);
  });
};

export {USERS, getUserById};