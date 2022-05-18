// var val1 = "var変数";
// console.log(val1);

// // var 変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var var1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// const val4 = {
//   name: "abc",
//   age: 24,
// }
// val4.name = 'fd'
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5)

// function func1(str) {
//     return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10,20));

// const myProfile = {
//   name: 'abc',
//   age: 24,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2)

// const myProfile = ['abc', 34];

// const message3 = `名前は${myProfile[0]}です。　年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// const sayHello = (name = 'ゲスト') => console.log(`こんにちは${name}さん`);
// sayHello();

//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4)

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// // console.log(arr8[0]);
// console.log(arr4[0]);

// const nameArr = ['田中', '山田', 'ab'];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newnumArr = numArr.map((num) => {
//   return num % 2 === 1;
// })
// console.log(newnumArr);

// const newnameArr = nameArr.map((name) => {
//   if (name === 'ab') {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newnameArr);

// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1)

// const num = '1300';
// console.log(num.toLocaleString());

// const formattednum = typeof num ==='number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattednum)

// const checkSum = (num1, num2) => {
//   return num1+ num2 > 100 ? '100を超えています' : '許容範囲内です';
// }

// console.log(checkSum(50,400))

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log('1 or 2 is true');
// }

// if (flag1 && flag2) {
//   console.log('1 and 2 are true');
// }

// if left side is false , retuen right side
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// if left side is true , retuen right side
const num2 = null;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
