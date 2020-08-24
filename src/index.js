import _ from 'lodash';

let numbers = [];

function addRandomNum() {
  const mainEl = document.getElementById('main');
  let p = document.createElement('p')
  const randomNum = _.random(0, 10)
  p.innerHTML = "Random Number: " + randomNum.toString();
  document.body.appendChild(p)
//.shift  先頭を消す　５個以上の場合
//.push   後ろに入れる　５個以上になり、先頭が抜けた場合
  if (numbers.length === 5) {
    console.log('ここはshift()')
    numbers.shift(randomNum);
  }
  console.log('ここはif文の外');
  numbers.push(randomNum);
 
  function recordNum(){
    randomNum++
  }
{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready"); 
}
}