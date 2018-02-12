function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return beatles;
}
  
function johnLennonFacts(array) {
  var newArray = [];
  let i = 0;
  while (i < array.length) {
    newArray.push(`${array[i]}!!!` );
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var array = [];
  while (i < n) {
    do array.push("I love the Beatles!");
    i++;
    }
  return array;
}