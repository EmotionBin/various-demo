import print from './print';
import '../styles/iconfont.css';
import '../styles/index.less';

print();

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));

/**
 * 这里手动对js进行HMR功能
 */
if(module.hot){
  // 一旦module.hot为true说明开启了HMR功能 
  module.hot.accept('./print.js', function(){
    // 方法会监听 print.js 文件的变化，一旦发生变化，其他默认不会重新打包构建
    // 会执行后面的回调函数
    print();
  })
}

