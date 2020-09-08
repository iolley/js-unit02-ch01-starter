import _ from 'lodash';

let numbers = [];

// 関数に後置インクリメントは使用できません。
    // この範囲は関数randomNum関数自体の用意をしている宣言範囲内です。
    // 準備中の関数内に準備中の関数自体を呼び出すことはできたかどうかを、基礎編Lesson 9とMDNの関数の項目ページを調べて確認しましょう


function addRandomNum() {
  const mainEl = document.getElementById('main');
  let p = document.createElement('p')
  const randomNum = _.random(0,1,2,3,4,5,6,7,8,9,10)//sum の引数はユーザーの出したランダムな数値すべて →lodashのsumメソッドの基本構文をもう一度確認してください、引数は「0から10」のようには書けません。引数に入ることのできる値の型を確認してください
  p.innerHTML = "Random Number: " + randomNum.toString();
  document.body.appendChild(p)
  if (numbers.length === 5) {
    console.log('ここはshift()');
    numbers.shift(randomNum);
  }
  // // ↓ この記述はif文内のスコープに書いてあったのかどうかを確認してください。
    // 文字列で「ここはif文の外」と用意をしたことを思い出しましょう
    // 以前のようにきちんとconsole.logで「ここはif文の外」や「ここはshift()」と出てこないのはこれが原因です
    // なぜelseを省略できたかを思い出しましょう
  console.log('ここはif文の外');
  numbers.push(randomNum);
}
//.shift  先頭を消す　５個以上の場合
//.push   後ろに入れる　５個以上になり、先頭が抜けた場合

function randomNum() {
  const sum = _.sum(0,10);//sum の引数はユーザーの出したランダムな数値すべて
  const mainEl = document.getElementById('main');
  let p = document.createElement('p')
  // 31行目に全く同じ値で定数の用意があります。この行は消しましょう

  ​// ↓ これは何を繰り返し処理させる目的なのか、考えましょう。そして必要な記述であればfor文の基本構文が崩れています。
  for (var i = 0 ; i < 10 ; i++)
    print(Math.random());// ← この行はどういう目的で書いたのかをSlackで教えてください
  p.innerHTML = "Sum Numbers: " + SumRandomNum.toString();// ランダムな数値のアウトプット表記"Random Number: "が2つできています。こちらの関数の役割を考えて表記を変えましょう
  document.body.appendChild(p)
} 
  // 関数randumNumはここに用意をしておいた方がいいかどうかはまだわかりません。
  // 関数addRandomNum内で確実に呼び出すことがわからないからです
  // どこで呼び出すかが未定の関数ば、基本的にグローバルスコープにまずは用意してください
  // ここは関数addRandomNumのローカルスコープ内です

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");

  const button2 = document.getElementById('button2')
  button2.addEventListener("click", randomNum);
  console.log("ready"); 
}
// button1とひとまとめにしましょう。分ける必要はないです