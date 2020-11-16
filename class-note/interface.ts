// 객체

interface IUser {
  age: number;
  name: string;
}

function getUser(user: IUser) {
  console.log(user);
}

getUser({ age: 1, name: 'a' });

// 함수 구조

interface ISumFunction {
  (a: number, b: number): number;
}

const sum: ISumFunction = (a, b) => a + b;

// 인덱싱

interface IStringArray {
  [index: number]: string
}

const arr: IStringArray = ['a', 'b', 'c'];
// arr[0] = 10; // ! 에러 발생

// 인터페이스 딕셔너리 패턴

interface IStringRegexDictionary {
  [key: string]: RegExp
}

const obj: IStringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
}
