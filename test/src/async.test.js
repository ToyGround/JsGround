import {USERS, getUserById} from './async';
import {test} from '@jest/globals';

test('[success case] getUserId => id : 1', () => {
  return getUserById(1).then(user => expect(user).toEqual({id: 1, name: '홍길동', age: 20}));
});

test('[fail case] getUserId => id : 1', () => {
  return getUserById(1).then(user => expect(user).toEqual({id: 2, name: '홍길동', age: 20}));
});
