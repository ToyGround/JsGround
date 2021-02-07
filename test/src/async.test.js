import {getUserById} from './async';
import {describe, test} from '@jest/globals';

describe('async test', () => {
  test('[success case] getUserId => id : 1', () => {
    return getUserById(1).then(user => expect(user).toEqual({id: 1, name: '홍길동', age: 20}));
  });

  test('[fail case] getUserId => id : 1', () => {
    return getUserById(1).then(user => expect(user).toEqual({id: 2, name: '홍길동', age: 20}));
  });

  test('[success case] async/await id 1 => 1', async () => {
    const result = await getUserById(1);
    expect(result).toEqual({id: 1, name: '홍길동', age: 20});
  });

  test('[throw error case] not argument', async () => {
    expect(() => getUserById()).toThrow('조회할 ID 값이 입력되지 않았습니다.')
  })
})