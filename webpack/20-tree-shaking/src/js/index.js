// // 引入@babel/polyfill对js做全部兼容性处理
// // import '@babel/polyfill';

// const add = (x, y) => x + y;

// console.log(add(1, 3));

// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('定时器执行完了~');
//     resolve();
//   }, 1000);
// });

// console.log('promise: ', promise);

import { mul } from './test';
import '../css/index.css';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

console.log(mul(2, 3));

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
