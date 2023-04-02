const fs = require('fs'); // 파일 시스템 모듈을 불러옵니다
const dns = require('dns'); // DNS 모듈을 불러옵니다
// 인코딩을 지정하지 않으면 원시 버퍼가 반환됩니다.
fs.readFile('test.txt',  (err, data) => {
    if (err) {
      throw err; // 에러를 던집니다.
    }
    console.log(data);
  });