import _ from 'lodash';

let numbers = [];

function addRandomNum() {
  const mainEl = document.getElementById('main');
  let p = document.createElement('p')
  p.innerHTML = "Random Number: " + _.random(0, 10).toString();
  document.body.appendChild(p)
//.shift  先頭を消す　５個以上の場合
//.push   後ろに入れる　５個以上になり、先頭が抜けた場合
  if (numbers.length === 5) {
    console.log('ここはshift()')
    numbers.shift(_.random(0, 5));
  }
  console.log('ここはif文の外');
  numbers.push(_.random(6, 10));
}

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
  
}
function recordNum(){
}

